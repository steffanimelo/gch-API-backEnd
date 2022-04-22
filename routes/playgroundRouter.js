import { Router } from "express";

const playgroundRouter = Router();

//database testing as an array   
const characters = [
    {id:1,name:'Thorr', origin: 'Pole', age: '400', weakness: 'fire', strength: 'ice', Weapon: 'Hammer', game: 'FF4', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
    {id:2,name:'Frea', origin: 'Sun', age: '1000', weakness: 'unknown', strength: 'fire', Weapon: 'Mind', game: 'FF8', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
    {id:3,name:'BigFoot', origin: 'Mars', age: '300', weakness: 'eye', strength: 'Dust', Weapon: 'Gun', game: 'FF2', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww'},
];

playgroundRouter  
   .route('/')
   .get((req, res) => res.json(characters))
  .post((req, res) => res.send('Add new Character'));

playgroundRouter
   .route('/:id') 
   .get((req, res) => res.send('GET single Character'))
   .put((req, res) => res.send('Change an existing Character'))
   .delete((req, res) => res.send('Delete a Character'));


  
export default playgroundRouter;