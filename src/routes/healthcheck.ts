import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default async function (fastify: FastifyInstance) {
    fastify.route({
        method: 'GET',
        url: '/',
        schema: {
            description: 'This is an endpoint for application health check',
            tags: ['Healthcheck'],
            response: {
                200: {
                    description: 'Successful response',
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        timestamp: { type: 'string', format: 'date-time' },
                    },
                },
            },
        },
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            return { status: 'Healthy!', timestamp: new Date().toISOString() };
        },
    });
}
