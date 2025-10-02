import express from "express";
import listarTipos from "../controllers/tipoController.js";

const router = express.Router();

router.get("/", listarTipos);

export default router;
