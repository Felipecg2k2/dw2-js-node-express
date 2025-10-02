import express from "express";
const router = express.Router();
import produtos from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  produtos.findAll().then((produtos)=>{
      res.render("produtos", {
      produtos: produtos,
    });
  });
});

export default router;