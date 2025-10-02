import express from "express";
import { listarPokemons } from "../controllers/pokemonController.js";

const router = express.Router();

router.get("/", listarPokemons);

export default router;