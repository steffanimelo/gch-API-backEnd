import { Router } from "express";
import {
  createCharacter,
  getAllCharacters,
  getSingleCharacter,
  updateCharacter,
  deleteCharacter
} from "../controllers/characters.js";

const characterRouter = Router();

characterRouter.route("/").get(getAllCharacters).post(createCharacter);

characterRouter
  .route("/:id")
  .get(getSingleCharacter)
  .put(updateCharacter)
  .delete(deleteCharacter);

export default characterRouter;
