import Fastify from 'fastify';
import routes from './routes';
import connectDB from './db/connection';

const app = Fastify({ logger: true });
app.register(connectDB);
app.register(routes);

async function start() {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
start();
