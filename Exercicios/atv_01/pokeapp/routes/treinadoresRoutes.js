import express from "express";
import {getAllTreinadores} from "../models/pokemonModel.js";

const router = express.Router();

router.get("/", (req, res) => {
    const listaTreinadores = getAllTreinadores();
    res.render('treinadores', {
        titulo: "Lista de Treinadores Pokémon",
        treinadores: listaTreinadores 
    });
});

export default router;