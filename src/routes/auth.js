import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import { checkSchema } from "express-validator";
import { validationRulesRegister } from "../utils/validationRulesRegister.js";
import { validationRulesLogin } from "../utils/validationRulesLogin.js";
import validator from "../middlewares/validator.js";

const router = Router();
router.post('/register', checkSchema(validationRulesRegister), validator, AuthController.registerUser);
router.post('/login',checkSchema(validationRulesLogin), validator ,AuthController.login);


export default router;