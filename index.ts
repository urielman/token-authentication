import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/api', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use('/api', router);
