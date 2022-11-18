import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { type } from 'os';

//fastify.addHook('preHandler', fastify.authPreHandler)

// TODO: schemas could be way better than it
export default async function (fastify: FastifyInstance) {
    fastify.route({
        method: 'POST',
        url: '/signup',
        schema: {
            tags: ['User'],
            description: 'Sign up user',
            body: {
                type: 'object',
                required: ['name', 'email', 'password'],
                properties: {
                    name: { type: 'string' },
                    email: { type: 'string' },
                    password: { type: 'string' },
                },
            },
            response: {
                200: {
                    type: 'string',
                },
            },
        },
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            return 'ok';
        },
    });

    fastify.route({
        method: 'POST',
        url: '/signin',
        schema: {
            tags: ['User'],
            description: 'Signin user',
            body: {
                type: 'object',
                required: ['email', 'password'],
                properties: {
                    email: { type: 'string' },
                    password: { type: 'string' },
                },
            },
            response: {
                200: {
                    type: 'object',
                    properties: {
                        token: { type: 'string' },
                    },
                },
            },
        },
        handler: async (request: FastifyRequest, reply: FastifyReply) => {
            return { token: 'ok' };
        },
    });
}
