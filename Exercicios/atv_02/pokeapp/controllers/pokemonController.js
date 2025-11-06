import express from "express"
const router = express.Router()
import { Pokemon, TIPOS_POKEMON } from '../models/pokemonModel.js';

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

// CRIAR POKÉMON
router.post("/", async (req, res) => {
    try {
        await Pokemon.create(req.body);
        res.redirect('/pokemons');
    } catch (error) {
        console.error('Erro ao criar Pokémon:', error);
        // Em caso de erro, recarrega a página com os dados
        const pokemons = await Pokemon.findAll({ order: [['numero', 'ASC']] });
        res.render('pokemons', {
            pokemons: pokemons,
            tipos: TIPOS_POKEMON,
            titulo: "Gerenciar Pokémons",
            error: "Erro ao criar Pokémon."
        });
    }
});

// ATUALIZAR POKÉMON
router.post("/editar/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            await pokemon.update(req.body);
        }
        res.redirect('/pokemons');
    } catch (error) {
        console.error('Erro ao atualizar Pokémon:', error);
        res.redirect('/pokemons');
    }
});

// DELETAR POKÉMON
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