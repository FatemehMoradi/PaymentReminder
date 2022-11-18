import Fastify from 'fastify';
import autoLoad from '@fastify/autoload';
import path from 'path';

const app = Fastify({ logger: true });

app.register(autoLoad, {
    dir: path.join(__dirname, 'plugins'),
});

app.register(autoLoad, {
    dir: path.join(__dirname, 'routes'),
});

async function start() {
    try {
        await app.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
start();
