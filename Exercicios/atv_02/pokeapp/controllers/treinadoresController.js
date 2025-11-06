import express from "express"
const router = express.Router()

// ✅ ATUALIZADO: Import do Model Sequelize
import Treinador from '../models/treinadorModel.js';

// ✅ MANTIDO: Simples como antes, mas com async/await
router.get("/treinadores", async (req, res) => {
    try {
        const listaTreinadores = await Treinador.findAll({ 
            order: [['nome', 'ASC']] 
        });
        
        res.render('treinadores', {
            treinadores: listaTreinadores  // ✅ Mantido igual
        });
    } catch (error) {
        console.error('Erro ao buscar treinadores:', error);
        res.render('treinadores', {
            treinadores: []  // ✅ Retorna array vazio em caso de erro
        });
    }
});

export default router;