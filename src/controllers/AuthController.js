import bcrypt from "bcryptjs";
import User from "../modals/User.js";

const SALT_ROUNDS = 10;
class AuthController {
    //[POST] /api/auth/register
    async registerUser(req, res, next) {
        try {
            const data = req.validated;
            const { email, password } = data;
            const findUser = await User.findOne({ email });
            if (findUser) {
                return res.status(400).json({ message: "User already exists" });
            }
            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
            const newUser = new User({ email, password: hashedPassword });
            await newUser.save();
            return res.status(201).json({ message: "User registered successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }

    //[POST] /api/auth/login
    async login(req, res, next) {
        try {
            const data = req.validated;
            const { email, password } = data;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: "Email hoặc mật khẩu không chính xác" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Email hoặc mật khẩu không chính xác" });
            }
            return res.status(200).json({ message: "Login successful" });
        } catch (error) {
            res.status(500).json({ error: error.message });
            next(error);
        }
    }
}

export default new AuthController();