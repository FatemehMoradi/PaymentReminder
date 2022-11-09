import Fastify from 'fastify';
const app = Fastify({ logger: true });

app.get('/', function (request, reply) {
    reply.send({ hello: 'word' });
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
