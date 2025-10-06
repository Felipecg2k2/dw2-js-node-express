import express from "express";
import {getAllJogos} from "../models/pokemonModel.js";

const router = express.Router();

router.get("/", (req, res) => {
    const listaJogos = getAllJogos();
    res.render('jogos', {
        titulo: "Jogos e Plataformas Pokémon",
        jogos: listaJogos
    });
});

export default router;
