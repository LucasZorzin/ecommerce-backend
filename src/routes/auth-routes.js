import express from "express";
const { Router } = express;
const router = new Router();

import upload from "../utils/multer.js";
import passport from "../utils/passport.js";

import AuthController from "../controllers/authController.js";
const controller = new AuthController();

router.get("/", async (req, res) => {
    res.redirect("/home")
});

router.post(
    "/login",
    passport.authenticate("local-login", {
        successRedirect: "/home?statusCart=true",
        failureRedirect: "/fail-login",
    })
);
router.get("/login", controller.login);

router.post(
    "/signup",
    upload.single("userPhoto"),
    passport.authenticate("local-signup", {
        successRedirect: "/",
        failureRedirect: "/fail-signup",
    })
);

router.get("/signup", controller.signup);

router.get("/fail-login", controller.failLogin);

router.get("/fail-signup", controller.failSignup);

router.post("/logout", controller.logout);

export default router;
