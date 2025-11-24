import { Router } from "express";

const router = Router();

router.get('/home', (req, res, next) => {
    res.json('Welcome to user registration form!');
});

export default router;