import AuthRouter from './auth.js';
import homeRouter from './home.js'
export default function routes(app) {
    // Define your routes here
    // Thêm route gốc để kiểm tra tình trạng server

    app.use('/api/auth', AuthRouter)
    app.use('/api', (req, res) => {
        res.send('API is working');
    });
    app.use('/', homeRouter);
}