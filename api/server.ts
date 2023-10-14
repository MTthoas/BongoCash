import express from 'express';
import cors from 'cors';
import { router } from './routers';
import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 4530;

app.use(cors(), express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
