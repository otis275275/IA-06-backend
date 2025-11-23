import "dotenv/config";
import express from "express";
import connectDB from "./src/config/db.js";
import routes from "./src/routes/index.js"; // Giả định đây là file định nghĩa routes
import cors from "cors";

const app = express();

// 1. Cấu hình CORS (Phải đặt TRƯỚC khi định nghĩa routes)
const allowOrigin = process.env.ALLOW_ORIGIN || 'http://localhost:5173';

const allowedOrigins = [
    'http://localhost:5173',
    'https://ia-06-frontend.vercel.app'
];

const corsOptions = {
    origin: allowedOrigins, 
    credentials: true, 
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.options(/.*/, cors(corsOptions));

// 2. Middleware xử lý body (cũng nên đặt trước routes)
app.use(express.json());

// 3. Kết nối DB
connectDB();

// 4. Định nghĩa Routes (Phải đặt SAU CORS và express.json)
routes(app);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});