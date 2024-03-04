import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Live here!");
})
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Jokes1",
            desc: "Joke here1"
        },
        {
            id: 2,
            title: "Jokes2",
            desc: "Joke here2"
        },
        {
            id: 3,
            title: "Jokes3",
            desc: "Joke here3"
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Port-${port} is live...`);
})