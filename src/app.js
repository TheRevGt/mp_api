import express from 'express';
import cors from 'cors'
import config from './config';
import citesRoutes from "./routes/cites.routes";

const app = express();
//midel
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false}));

app.use(citesRoutes);

app.set('port', config.port);
export default app;