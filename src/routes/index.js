import AuthRouter from './auth.js';
import homeRouter from './home.js'
export default function routes(app) {
    // Define your routes here
    app.use('/api', AuthRouter)

    app.use('/', homeRouter);
}