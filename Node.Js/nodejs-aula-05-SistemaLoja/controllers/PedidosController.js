import express from 'express'
const router = express.Router()
import Pedido from "../models/Pedido.js";


// ROTA PEDIDOS
router.get("/pedidos", function (req,res){
    Pedido.findAll().then((pedidos)=>{
        res.render("pedidos", {
            pedidos: pedidos,
    });
  });
});

export default router