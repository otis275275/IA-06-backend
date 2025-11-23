import "dotenv/config";
import express from "express";
import connectDB from "./src/config/db.js";
import routes from "./src/routes/index.js"; // Giả định đây là file định nghĩa routes
import cors from "cors";

const app = express();

// 1. Cấu hình CORS (Phải đặt TRƯỚC khi định nghĩa routes)
const allowOrigin = process.env.ALLOW_ORIGIN || 'http://localhost:5173';

app.use(cors({
  origin: '*', // Sử dụng biến môi trường hoặc fallback về localhost:5173
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

// 2. Middleware xử lý body (cũng nên đặt trước routes)
app.use(express.json());

// 3. Kết nối DB
connectDB();

// 4. Định nghĩa Routes (Phải đặt SAU CORS và express.json)
routes(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});