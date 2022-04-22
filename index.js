import express from "express";
import playgroundRouter from "./routes/playgroundRouter.js";

const app = express();
const port = process.env.PORT || 5050;

app.use('/playground', playgroundRouter);
app.get('/', (req, res) => res.send('Game Characters API'));

app.listen(port,() => console.log(`Server running at http://localhost:${port}`));

/*const { resolve } = require('path');   // resolving the absolute path for langingPage
app.get('/characters', (req, res) => {
    const myTitle = 'Game Characterts API - Final Fantasy';
    const characters = [
    {id:1,name:'Thorr', origin: 'Pole', age: '400', weakness: 'fire', strength: 'ice', Weapon: 'Hammer', game: 'FF4', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
    {id:2,name:'Frea', origin: 'Sun', age: '1000', weakness: 'unknown', strength: 'fire', Weapon: 'Mind', game: 'FF8', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
    {id:3,name:'BigFoot', origin: 'Mars', age: '300', weakness: 'eye', strength: 'Dust', Weapon: 'Gun', game: 'FF2', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
]
});
*/

