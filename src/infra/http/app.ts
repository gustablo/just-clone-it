import express from 'express';
import cors from 'cors';
import { setupRoutes } from './express-route-adapter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

setupRoutes(app);

export { app };
