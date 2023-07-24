import express from 'express';
import app2 from './routes/utilidades.js';
import app from './routes/PostTables.js'
import dotenv from 'dotenv';
dotenv.config();
const appExpress = express();

appExpress.use(express.json());
appExpress.use("/app", app);
appExpress.use("/app2",app2)



const config=JSON.parse(process.env.MY_CONFIG);
appExpress.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});