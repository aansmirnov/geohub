import express, { Request, Response } from 'express';
require('dotenv').config();

const app = express();
const port = process.env.PORT || 6969;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
