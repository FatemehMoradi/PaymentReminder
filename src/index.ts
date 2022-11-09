import Fastify from 'fastify';
import routes from './routes';
const app = Fastify({ logger: true });

async function start() {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

app.register(routes);

start();
