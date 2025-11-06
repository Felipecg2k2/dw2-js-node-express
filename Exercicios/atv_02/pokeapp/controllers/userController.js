import express from "express";
import User from '../models/userModel.js';

const router = express.Router();

// ========== PÁGINAS ==========

// Página de login
router.get("/login", (req, res) => {
    if (req.session.user) {
        return res.redirect('/'); // ✅ Redireciona para index
    }
    
    res.render('login', {
        titulo: "Login - PokéApp",
        error: null
    });
});

// Página de registro
router.get("/registro", (req, res) => {
    res.render('registro', {
        titulo: "Registrar - PokéApp",
        error: null
    });
});

// ✅ REMOVIDO: Lista de usuários (admin)

// ========== OPERAÇÕES CRUD ==========

// Registrar novo usuário
router.post("/registro", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        
        // Verificar se usuário já existe
        const usuarioExistente = await User.findOne({ where: { email } });
        if (usuarioExistente) {
            return res.render('registro', {
                titulo: "Registrar - PokéApp",
                error: "Email já cadastrado."
            });
        }
        
        // Criar usuário
        await User.create({ nome, email, senha });
        
        res.redirect('/user/login');
    } catch (error) {
        console.error('Erro ao registrar:', error);
        res.render('registro', {
            titulo: "Registrar - PokéApp",
            error: "Erro ao criar usuário."
        });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        
        // Buscar usuário
        const usuario = await User.findOne({ where: { email } });
        
        if (usuario && await usuario.verificarSenha(senha)) {
            req.session.user = {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            };
            res.redirect('/'); // ✅ Redireciona para index/dashboard
        } else {
            res.render('login', {
                titulo: "Login - PokéApp",
                error: "Email ou senha inválidos."
            });
        }
    } catch (error) {
        console.error('Erro no login:', error);
        res.render('login', {
            titulo: "Login - PokéApp",
            error: "Erro interno do sistema."
        });
    }
});

// Logout
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/user/login');
});

export default router;