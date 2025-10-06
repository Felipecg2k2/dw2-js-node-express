import express from "express"
const router = express.Router()

import getAllPokemons from '../models/pokemonModel.js';

router.get("/pokemon", (req, res) => {
    const listaPokemons = getAllPokemons(); 
    res.render('pokemons', { 
        pokemon: listaPokemons
    });
});