import {config} from 'dotenv';
config();

export default{
    port: process.env.PORT,
    userDb: process.env.DB_USER || "",
    passwordDb: process.env.DB_PASSWORD || "",
    serverDb: process.env.DB_SERVER || "",
    databaseDb: process.env.DB_DATABASE || ""
}