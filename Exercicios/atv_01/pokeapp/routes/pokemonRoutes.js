import express from "express";
import {getAllPokemons} from "../models/pokemonModel.js";

const router = express.Router();

router.get("/", (req, res) => {
    const listaPokemons = getAllPokemons();
    res.render('pokemons', {
        titulo: "Lista de Pokémons",
        pokemons: listaPokemons 
    });
});

export default router;