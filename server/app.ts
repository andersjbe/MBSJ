import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Express + TypeScript Server'));


const PORT: number = 8080;
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
