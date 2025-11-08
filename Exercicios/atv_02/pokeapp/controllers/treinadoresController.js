import express from "express"
const router = express.Router()
import Treinador from '../models/treinadorModel.js';
import Pokemon from '../models/pokemonModel.js';

// ========== READ - LISTAR TREINADORES ==========
router.get("/", async (req, res) => {
    try {
        const treinadores = await Treinador.findAll({ 
            order: [['nome', 'ASC']] 
        });

        const pokemons = await Pokemon.findAll({ order: [['nome', 'ASC']] });

        // Converter equipe de string para array se necessário
        const treinadoresFormatados = treinadores.map(treinador => {
            let equipe = treinador.equipe;
            
            // Se equipe é string, tentar converter para array
            if (typeof equipe === 'string') {
                try {
                    equipe = JSON.parse(equipe);
                } catch (error) {
                    equipe = [];
                }
            }
            
            // Garantir que equipe é um array
            if (!Array.isArray(equipe)) {
                equipe = [];
            }
            
            return {
                ...treinador.toJSON(),
                equipe: equipe
            };
        });

        res.render('treinadores', {
            treinadores: treinadoresFormatados,
            pokemons: pokemons,
            titulo: "Gerenciar Treinadores Pokémon"
        });
    } catch (error) {
        console.error('Erro ao buscar treinadores:', error);
        res.render('treinadores', {
            treinadores: [],
            pokemons: [],
            titulo: "Gerenciar Treinadores Pokémon"
        });
    }
});

// ========== CREATE - SALVAR NOVO TREINADOR ==========
router.post("/", async (req, res) => {
    try {
        const { nome, cidade, equipe } = req.body;
        
        console.log('=== CRIANDO TREINADOR ===');
        console.log('Equipe recebida:', equipe);
        
        // CORREÇÃO: Usar a mesma lógica do UPDATE
        let equipeArray = [];
        
        if (equipe) {
            if (typeof equipe === 'string' && equipe.trim() !== '') {
                if (equipe.includes(',')) {
                    equipeArray = equipe.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
                } else {
                    equipeArray = [parseInt(equipe.trim())].filter(id => !isNaN(id));
                }
            } else if (Array.isArray(equipe)) {
                equipeArray = equipe.map(id => parseInt(id)).filter(id => !isNaN(id));
            }
        }
        
        console.log('Equipe processada:', equipeArray);
        
        await Treinador.create({ 
            nome, 
            cidade,
            equipe: equipeArray
        });
        
        res.redirect('/treinadores');
    } catch (error) {
        console.error('Erro ao criar treinador:', error);
        const treinadores = await Treinador.findAll({ order: [['nome', 'ASC']] });
        const pokemons = await Pokemon.findAll({ order: [['nome', 'ASC']] });
        
        res.render('treinadores', {
            treinadores: treinadores,
            pokemons: pokemons,
            titulo: "Gerenciar Treinadores Pokémon",
            error: "Erro ao criar treinador."
        });
    }
});

// ========== UPDATE - ATUALIZAR TREINADOR ==========
router.post("/editar/:id", async (req, res) => {
    try {
        const { nome, cidade, equipe } = req.body;
        const treinador = await Treinador.findByPk(req.params.id);
        
        console.log('=== EDITANDO TREINADOR ===');
        console.log('ID:', req.params.id);
        console.log('Nome:', nome);
        console.log('Cidade:', cidade);
        console.log('Equipe recebida:', equipe);
        console.log('Tipo da equipe:', typeof equipe);
        
        if (treinador) {
            // CORREÇÃO: Processar equipe corretamente
            let equipeArray = [];
            
            if (equipe) {
                if (typeof equipe === 'string' && equipe.trim() !== '') {
                    // Se for string com vírgulas, separar
                    if (equipe.includes(',')) {
                        equipeArray = equipe.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
                    } else {
                        // Se for string única, criar array com um elemento
                        equipeArray = [parseInt(equipe.trim())].filter(id => !isNaN(id));
                    }
                } else if (Array.isArray(equipe)) {
                    // Se já for array, usar diretamente
                    equipeArray = equipe.map(id => parseInt(id)).filter(id => !isNaN(id));
                }
            }
            
            console.log('Equipe processada:', equipeArray);
            console.log('Tipo da equipe processada:', Array.isArray(equipeArray) ? 'Array' : typeof equipeArray);
            
            await treinador.update({ nome, cidade, equipe: equipeArray });
            
            // Verificar se foi salvo corretamente
            const treinadorAtualizado = await Treinador.findByPk(req.params.id);
            console.log('Equipe após salvar:', treinadorAtualizado.equipe);
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