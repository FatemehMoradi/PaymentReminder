import { FastifyInstance, FastifyRegisterOptions } from 'fastify';
import fp from 'fastify-plugin';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

export default fp(async (fastify: FastifyInstance) => {
    fastify.register(fastifySwagger, {
        swagger: {
            info: {
                title: 'Remini Api Documentation',
                description: 'Payment reminder app',
                version: '0.1.0',
            },
            host: 'localhost:3000',
            schemes: ['http'],
            consumes: ['application/json'],
            produces: ['application/json'],
            securityDefinitions: {
                apiKey: {
                    type: 'apiKey',
                    name: 'apiKey',
                    in: 'header',
                },
            },
        },
    });

    await fastify.register(fastifySwaggerUi, {
        routePrefix: '/swagger',
        initOAuth: {},
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false,
        },
        uiHooks: {
            onRequest: function (request: any, reply: any, next: any) {
                next();
            },
            preHandler: function (request: any, reply: any, next: any) {
                next();
            },
        },
        staticCSP: true,
        transformStaticCSP: (header: any) => header,
    });
    // // Executes Swagger
    // fastify.ready((err) => {
    //     if (err) throw err;
    //     fastify.swagger();
    // });
});
