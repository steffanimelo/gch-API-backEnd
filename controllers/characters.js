import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/Post.js";



export const getAllCharacters = asyncHandler (async (req, res, next) => {
    const posts = await Post.find()
    res.json(posts);
});

export const getSingleCharacter = asyncHandler(async (req, res) => res.send('Getting a Single Character'));

export const createCharacter = asyncHandler(async (req, res) => res.send('Create New Character'));

export const updateCharacter = asyncHandler (async (req, res) => res.send('You just changed an existing Character!'));

export const deleteCharacter = asyncHandler (async (req, res) => res.send('You just deleted a Character!'));
