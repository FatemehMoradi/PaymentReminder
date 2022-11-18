import { FastifyInstance } from 'fastify';
import { Sequelize } from 'sequelize';
import fp from 'fastify-plugin';

import config from '../../config/appConfig';

export default fp(async function (fastify: FastifyInstance) {
    const sequelize = new Sequelize(config.postgresUri); // Example for postgres
    try {
        await sequelize.authenticate();
        fastify.decorate('db', sequelize);
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }
});
