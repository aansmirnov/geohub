import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORT || 6969;

app.use(router);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
