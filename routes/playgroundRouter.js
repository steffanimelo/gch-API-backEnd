import { Router } from "express";
import { createCharacter, getAllCharacters, getSingleCharacter, updateCharacter, deleteCharacter } from "./controllers/playground.js";

const playgroundRouter = Router();

playgroundRouter  
   .route('/')
   .get(getAllCharacters)
   .post(createCharacter);

playgroundRouter
   .route('/:id') 
   .get(getSingleCharacter)
   .put(updateCharacter)
   .delete(deleteCharacter);


  
export default playgroundRouter;