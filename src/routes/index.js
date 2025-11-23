import AuthRouter from './auth.js';
export default function routes(app) {
    // Define your routes here

    app.use('/api/auth', AuthRouter)
    app.use('/api', (req, res) => {
        res.send('API is working');
    });
}