import express from "express"
const router = express.Router()

import getAllJogos from '../models/pokemonModel.js';

router.get("/jogos",  (req, res) => {
    const listaTipos = getAllTipos();
    res.render('jogos', {
        jogos: getAllJogos 
    });
});