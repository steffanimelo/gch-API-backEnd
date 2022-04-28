import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/Post.js";



export const getAllCharacters = asyncHandler (async (req, res, next) => {
    const posts = await Post.find()
    res.json(posts);
});

export const getSingleCharacter = asyncHandler(async (req, res) => res.send('Getting a Single Character'));

export const createCharacter = asyncHandler(async (req, res) => {
    const newPost = await Post.create({
        id: '01',
        name: 'CHIMERA',
        location: 'Mirage Tower',
        elements: 'Fire',
        weakness: 'Ice',
        strength: 'Fire-based attacks',
        resistance: 'Quake / Fire',
        weapon: 'Fire-breathing / Blaze',
        game: 'FINAL FANTASY XV (First appearance since Final Fantasy II)',
        description: 'As a final boss of Cutters Cry, the origins of this nightmarish combination of lion, goat, and dragon have been furiously debated. Some deem the creature a cruel jest of the gods, while others believe it the twisted creation of forbidden sorcery',
        img: String  });
    res.status(201).json(newPost);
});

export const updateCharacter = asyncHandler (async (req, res) => res.send('You just changed an existing Character!'));

export const deleteCharacter = asyncHandler (async (req, res) => res.send('You just deleted a Character!'));
