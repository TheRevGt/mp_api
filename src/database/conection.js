import sql from 'mssql';
import config from '../config';

const db_seting = {
    user: config.userDb,
    password: config.passwordDb,
    server: config.serverDb,
    database: config.databaseDb,
    options: {
        encrypt : true,
        trustServerCertificate: true,
    }
};

export async function conectioDb(){
    try {
        const pool = await sql.connect(db_seting);
        return pool;
    } catch (error) {
        console.log(error)
    }
}
export { sql };