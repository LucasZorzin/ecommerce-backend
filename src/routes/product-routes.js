import express from "express";
const { Router } = express;
const router = new Router();

import ProductsController from "../controllers/productController.js";
const controller = new ProductsController();

//Obtiene todos los productos
router.get("/form", controller.getFormAdd);

//Agrega un producto
router.post("/new-product", controller.addProduct);

//Obtiene un producto según el id
router.get("/:id", controller.getById);

//Muestra el producto a editar según el id
router.get("/form/:id", controller.getFormEdit);

//Edita un producto según el id
router.put("/:id", controller.editById);

//Elimina un producto según el id
router.delete("/:id", controller.deleteByid);

export default router;
