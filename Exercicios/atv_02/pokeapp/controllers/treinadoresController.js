import express from "express"
const router = express.Router()
import Treinador from '../models/treinadorModel.js';

// ========== READ - LISTAR TREINADORES ==========
router.get("/", async (req, res) => {
    try {
        const treinadores = await Treinador.findAll({ 
            order: [['nome', 'ASC']] 
        });

        res.render('treinadores', {
            treinadores: treinadores,
            titulo: "Gerenciar Treinadores Pokémon"
        });
    } catch (error) {
        console.error('Erro ao buscar treinadores:', error);
        res.render('treinadores', {
            treinadores: [],
            titulo: "Gerenciar Treinadores Pokémon"
        });
    }
});

// ========== CREATE - SALVAR NOVO TREINADOR ==========
router.post("/", async (req, res) => {
    try {
        const { nome, cidade } = req.body;
        
        await Treinador.create({ nome, cidade });
        res.redirect('/treinadores');
    } catch (error) {
        console.error('Erro ao criar treinador:', error);
        const treinadores = await Treinador.findAll({ order: [['nome', 'ASC']] });
        
        res.render('treinadores', {
            treinadores: treinadores,
            titulo: "Gerenciar Treinadores Pokémon",
            error: "Erro ao criar treinador."
        });
    }
});

// ========== UPDATE - ATUALIZAR TREINADOR ==========
router.post("/editar/:id", async (req, res) => {
    try {
        const { nome, cidade } = req.body;
        const treinador = await Treinador.findByPk(req.params.id);
        
        if (treinador) {
            await treinador.update({ nome, cidade });
        }
        res.redirect('/treinadores');
    } catch (error) {
        console.error('Erro ao atualizar treinador:', error);
        res.redirect('/treinadores');
    }
});

// ========== DELETE - REMOVER TREINADOR ==========
router.post("/deletar/:id", async (req, res) => {
    try {
        const treinador = await Treinador.findByPk(req.params.id);
        if (treinador) {
            await treinador.destroy();
        }
        res.redirect('/treinadores');
    } catch (error) {
        console.error('Erro ao deletar treinador:', error);
        res.redirect('/treinadores');
    }
});

export default router;