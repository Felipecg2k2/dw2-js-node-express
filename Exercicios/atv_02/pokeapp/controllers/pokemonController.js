import express from "express"
const router = express.Router()
import { Pokemon, TIPOS_POKEMON } from '../models/pokemonModel.js';
import { uploadSingle } from '../middleware/multer-config.js';

// LISTAR POKÉMONS + FORMULÁRIO NA MESMA PÁGINA
router.get("/", async (req, res) => {
    try {
        const pokemons = await Pokemon.findAll({ 
            order: [['numero', 'ASC']] 
        });
        
        res.render('pokemons', { 
            pokemons: pokemons,
            tipos: TIPOS_POKEMON,
            titulo: "Gerenciar Pokémons"
        });
    } catch (error) {
        console.error('Erro ao buscar pokémons:', error);
        res.render('pokemons', { 
            pokemons: [],
            tipos: TIPOS_POKEMON,
            titulo: "Gerenciar Pokémons"
        });
    }
});

// CRIAR POKÉMON COM IMAGEM
router.post("/", uploadSingle('imagem'), async (req, res) => {
    try {
        const pokemonData = { ...req.body };
        
        // Se há arquivo de imagem, adicionar caminho aos dados
        if (req.file) {
            pokemonData.imagem = '/uploads/pokemons/' + req.file.filename;
        }
        
        await Pokemon.create(pokemonData);
        res.redirect('/pokemons');
    } catch (error) {
        console.error('Erro ao criar Pokémon:', error);
        const pokemons = await Pokemon.findAll({ order: [['numero', 'ASC']] });
        res.render('pokemons', {
            pokemons: pokemons,
            tipos: TIPOS_POKEMON,
            titulo: "Gerenciar Pokémons",
            error: "Erro ao criar Pokémon."
        });
    }
});

// ATUALIZAR POKÉMON COM IMAGEM
router.post("/editar/:id", uploadSingle('imagem'), async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            const updateData = { ...req.body };
            
            // Se há nova imagem, atualizar caminho
            if (req.file) {
                updateData.imagem = '/uploads/pokemons/' + req.file.filename;
            }
            
            await pokemon.update(updateData);
        }
        res.redirect('/pokemons');
    } catch (error) {
        console.error('Erro ao atualizar Pokémon:', error);
        res.redirect('/pokemons');
    }
});

// DELETAR POKÉMON (mantido igual)
router.post("/deletar/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            await pokemon.destroy();
        }
        res.redirect('/pokemons');
    } catch (error) {
        console.error('Erro ao deletar Pokémon:', error);
        res.redirect('/pokemons');
    }
});

export default router;