import express from "express";
const router = express.Router();
// Importando o Model de usuário
import User from "../models/User.js";
// Importando o bcrypt (usado para gerar hash de senha)
import bcrypt from "bcrypt";

// Rota de LOGIN
router.get("/login", (req, res) => {
  res.render("login");
});

// ROTA de CADASTRO
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
  // Coletando os dados do formulário
  const email = req.body.email;
  const password = req.body.password;
  // Verificando se o usuário já está cadastrado no banco
  User.findOne({ where: { email: email } }).then((user) => {
    // SE o usuário NÃO EXISTIR
    if (user == undefined) {
      //FARÁ O CADASTRO
      // Gerando o hash de senha
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      // Enviando para o banco  
      User.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/login");
        })
        .catch((error) => {
          console.log(error);
        });
      // SE o usuário JÁ EXISTIR
    } else {
      res.send(`O usuário informado já está cadastrado! <br>
            <a href="/login">Tentar novamente.</a>`);
    }
  });
});

// ROTA DE AUTENTICAÇÃO
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // BUSCA O USUÁRIO NO BANCO
  User.findOne({ where: { email: email } }).then((user) => {
    // SE O USUÁRIO EXISTIR
    if (user != undefined) {
      // VALIDA A SENHA
      const correct = bcrypt.compareSync(password, user.password);
      // SE A SENHA FOR VÁLIDA
      if (correct) {
        // AUTORIZA O LOGIN
        // GERANDO A SESSÃO PARA O USUÁRIO
        req.session.user = {
            id: user.id,
            email: user.email
        }
        /*res.send(`Usuário logado é: <br>
            ID: ${req.session.user['id']}<br>
            E-mail: ${req.session.user['email']}`);
        */
            res.redirect("/");
        // SE A SENHA NÃO FOR VÁLIDA
      } else {
        res.send(`A senha digitada está incorreta! <br>
            <a href="/login">Tentar novamente</a>`)
      }
      // SE O USUÁRIO NÃO EXISTIR
    } else { 
        res.send(`Usuário informado não existe! <br>
            <a href="/login">Tentar novamente</a>`)
    }
  });
});

// ROTA DE LOGOUT
router.get("/logout", (req,res) =>{
  req.session.user = undefined
  res.redirect('/')
})
export default router;
