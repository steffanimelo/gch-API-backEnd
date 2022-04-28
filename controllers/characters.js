import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Post from "../models/Post.js";



export const getAllCharacters = asyncHandler (async (req, res, next) => {
    const posts = await Post.find()
    res.json(posts);
});


export const getSingleCharacter = asyncHandler(async (req, res) => {
    const {
        params: {id}            // how can I get a single with Index or keyword?
    } = req;
    const post = await Post.findById(id);
    if(!post) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json(post);
});

export const createCharacter = asyncHandler(async (req, res) => {
    const {body} = req;
    const newPost = await Post.create(body);
    res.status(201).json(newPost);
});

export const updateCharacter = asyncHandler (async (req, res) => {
    const {
        body,
        params: { id }
    } = req;
    const updateCharacter = await Post.findOneAndUpdate({ _id: id }, body, { new: true });
    if(!updateCharacter) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json(updateCharacter);
});


export const deleteCharacter = asyncHandler (async (req, res) => {
    const {
        params: { id }
    } = req;
    const deleted = await Post.findByIdAndDelete(id);
    if(!deleted) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json({success: `Charater with this ${id} was deleted!`})
});

