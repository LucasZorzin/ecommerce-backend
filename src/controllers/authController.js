import logger from "../utils/logger.js";

class AuthController {
    constructor() {}

    async signup(req, res) {
        try {
            res.render("pages/signup");
        } catch (error) {
            logger.warn(error);
        }
    }

    async login(req, res) {
        try {
            res.render("pages/login");
        } catch (error) {
            logger.warn(error);
        }
    }

    async failSignup(req, res) {
        try {
            res.render("pages/fail-signup");
        } catch (error) {
            logger.warn(error);
        }
    }
    async failLogin(req, res) {
        try {
            res.render("pages/fail-login");
        } catch (error) {
            logger.warn(error);
        }
    }
    async logout(req, res) {
        if (req.user) {
            let nameUser = req.user.userName;
            req.logout(function (err) {
                if (err) {
                    return next(err);
                }
            });
            res.render("pages/logout", { nameUser });
        }
    }
}

export default AuthController;
