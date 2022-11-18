import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
    const signals = ['SIGINT', 'SIGTERM', 'SIGQUIT'];
    signals.forEach((sig) => {
        process.on(sig, () => {
            fastify.log.info(`Signal handler called sig=${sig}`);
            //@ts-ignore
            fastify.db
                .close()
                .then(() => {
                    fastify.log.info(`Signal handled successfully sig=${sig}`);
                    process.exit(0);
                })
                .catch(() => {
                    fastify.log.info(`Signal handling failed sig=${sig}`);
                    process.exit(1);
                });
        });
    });
}
