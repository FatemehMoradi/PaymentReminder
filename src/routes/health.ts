import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function (fastify: FastifyInstance) {
    fastify.get('/health', async (request: FastifyRequest, reply: FastifyReply) => {
        return { status: 'Healthy!' };
    });
}
