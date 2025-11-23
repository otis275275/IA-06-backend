import serverless from 'serverless-http';
import app from '../server.js';

// Export a handler that Vercel's @vercel/node can use
const handler = serverless(app);

export default handler;
