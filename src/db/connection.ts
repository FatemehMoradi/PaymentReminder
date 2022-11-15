import { FastifyInstance } from 'fastify';
import { Sequelize } from 'sequelize';

export default async function (fastify: FastifyInstance) {
    const sequelize = new Sequelize('postgres://remini:123@localhost:6432/remini_db'); // Example for postgres
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
