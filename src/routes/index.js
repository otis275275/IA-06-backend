import AuthRouter from './auth.js';
export default function routes(app) {
    // Define your routes here
    // Thêm route gốc để kiểm tra tình trạng server
    app.get('/', (req, res) => {
        res.status(200).json({ 
            message: 'Backend API is running!',
            environment: process.env.NODE_ENV || 'development'
        });
    });
    app.use('/api/auth', AuthRouter)
    app.use('/api', (req, res) => {
        res.send('API is working');
    });
}