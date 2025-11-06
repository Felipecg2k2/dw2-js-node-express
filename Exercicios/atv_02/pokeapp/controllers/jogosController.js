import express from "express"
const router = express.Router()
import Jogo from '../models/jogoModel.js'; // ✅ CORRIGIDO: Import Jogo, não Treinador

// ========== READ - LISTAR JOGOS ==========
router.get("/", async (req, res) => {
    try {
        const jogos = await Jogo.findAll({ // ✅ CORRIGIDO: Jogo.findAll
            order: [['ano', 'ASC']] 
        });

        res.render('jogos', {
            jogos: jogos,
            titulo: "Gerenciar Jogos Pokémon"
        });
    } catch (error) {
        console.error('Erro ao buscar jogos:', error);
        res.render('jogos', {
            jogos: [],
            titulo: "Gerenciar Jogos Pokémon"
        });
    }
});

// ========== CREATE - SALVAR NOVO JOGO ==========
router.post("/", async (req, res) => {
    try {
        const { nome, console, ano } = req.body;
        
        await Jogo.create({ nome, console, ano }); // ✅ CORRIGIDO: Jogo.create
        res.redirect('/jogos');
    } catch (error) {
        console.error('Erro ao criar jogo:', error);
        const jogos = await Jogo.findAll({ order: [['ano', 'ASC']] });
        
        res.render('jogos', {
            jogos: jogos,
            titulo: "Gerenciar Jogos Pokémon",
            error: "Erro ao criar jogo."
        });
    }
});

// ========== UPDATE - ATUALIZAR JOGO ==========
router.post("/editar/:id", async (req, res) => {
    try {
        const { nome, console, ano } = req.body;
        const jogo = await Jogo.findByPk(req.params.id); // ✅ CORRIGIDO: Jogo.findByPk
        
        if (jogo) {
            await jogo.update({ nome, console, ano });
        }
        res.redirect('/jogos');
    } catch (error) {
        console.error('Erro ao atualizar jogo:', error);
        res.redirect('/jogos');
    }
});

// ========== DELETE - REMOVER JOGO ==========
router.post("/deletar/:id", async (req, res) => {
    try {
        const jogo = await Jogo.findByPk(req.params.id); // ✅ CORRIGIDO: Jogo.findByPk
        if (jogo) {
            await jogo.destroy();
        }
        res.redirect('/jogos');
    } catch (error) {
        console.error('Erro ao deletar jogo:', error);
        res.redirect('/jogos');
    }
});

export default router;