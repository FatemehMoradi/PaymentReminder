import { FastifyInstance } from 'fastify';
import health from './health';

//fastify.addHook('preHandler', fastify.authPreHandler)
export default async function (fastify: FastifyInstance) {
    fastify.register(health);
}
