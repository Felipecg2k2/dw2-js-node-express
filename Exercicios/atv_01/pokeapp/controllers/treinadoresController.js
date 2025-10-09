import express from "express"
const router = express.Router()

import { getAllTreinadores } from '../models/pokemonModel.js';

router.get("/treinadores", (req, res) => {
    const listaTreinadores = getAllTreinadores();
    res.render('treinadores', {
        treinadores: listaTreinadores 
    });
});