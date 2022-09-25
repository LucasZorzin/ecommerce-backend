import express from "express";
const { Router } = express;
const router = new Router();

import HomeController from "../controllers/homeController.js";
const controller = new HomeController();

router.get("/", controller.getHome);

export default router;
