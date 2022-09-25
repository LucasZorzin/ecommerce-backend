import express from "express";
const { Router } = express;
const router = new Router();

import UserController from "../controllers/userController.js";
const controller = new UserController();

router.get("/profile", controller.getProfile);

export default router;
