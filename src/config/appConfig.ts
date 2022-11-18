import dotenv from 'dotenv';
dotenv.config();

function loadEnvironmentVariable(keyname: string) {
    const envVar = process.env[keyname];
    if (!envVar) {
        throw new Error(`Must include ${keyname} as an environment variable.`);
    }
    return envVar;
}

function loadArrayEnvVariable(keyname: string) {
    return loadEnvironmentVariable(keyname).split(',');
}

export default {
    postgresUri: loadEnvironmentVariable('POSTGRES_URI'),
    sessionSecret: loadArrayEnvVariable('SESSION_SECRET'),
};
