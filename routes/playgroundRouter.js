import { Router } from "express";

const playgroundRouter = Router();

playgroundRouter  
   .route('/')
   .get((req, res) => {
      res.send('Get all Characters');
  })
  .post((req, res) => res.send('Add new Character'));

playgroundRouter
   .route('/:id') 
   .get((req, res) => res.send('GET single Character'))
   .put((req, res) => res.send('Change an existing Character'))
   .delete((req, res) => res.send('Delete a Character'));


  
export default playgroundRouter;