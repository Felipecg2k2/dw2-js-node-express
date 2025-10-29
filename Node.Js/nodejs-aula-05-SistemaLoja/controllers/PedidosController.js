import express from 'express'
const router = express.Router()
import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req,res){
    Pedido.findAll().then(pedidos=>{
        res.render("pedidos", {
            pedidos: pedidos,
        });
    }).catch(error => {
    console.log(error)
  });
});

// ROTA DE CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req, res) => {
  // COLETANDO OS DADOS DO FORMULÁRIO
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.create({
    // coluna : dado do form
    numero : numero,
    valor : valor,
  }).then(() => {
    res.redirect("/pedidos")
  }).catch(error => {
    console.log(error);
  });
});
 
// ROTA DE EXCLUSÃO DE PEDIDOS
// :id é um parâmetro obrigatório
router.get("/pedidos/delete/:id", (req, res) => {
  const id =req.params.id
  // .destroy() -> excluir um registro do banco
  Pedido.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/pedidos")
  }).catch(error => {
    console.log(error)
  });
});
 
// ROTA DE EDIÇÃO DE PEDIDO
router.get("/pedidos/edit/:id", (req, res) => {
  const id = req.params.id
  // Buscando o pedido pela ID
  // findByPk() -> busca um registro pela chave primária (id)
  Pedido.findByPk(id).then(pedido => {
    res.render("pedidoEdit", {
      pedido : pedido
    });
  });
});

// ROTA DE ALTERAÇÃO DE PEDIDO
router.post("/pedidos/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.update({
    numero : numero,
    valor: valor,
  },
  { where : {id : id}}
  ).then(() => {
    res.redirect("/pedidos");
  }).catch(error => {
    console.log(error);
  });
}); 

export default router;
 