import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Charater from "../models/Character.js";



export const getAllCharacters = asyncHandler (async (req, res, next) => {
    const characters = await Charater.find()
    const {params: {name, id}} = req
    await Charater.find({$or:[{name}, {id}]});                     //In need of testing in the front-End
    res.json(characters);
});


export const getSingleCharacter = asyncHandler(async (req, res) => {
    const {
        params: {id}           
    } = req;                  
    const character = await Charater.findById(id);
    if(!character) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json(character);
});


export const createCharacter = asyncHandler(async (req, res) => {
    const {body} = req;
    const newCharater = await Charater.create(body);
    res.status(201).json(newCharater);
});

export const updateCharacter = asyncHandler (async (req, res) => {
    const {
        body,
        params: { id }
    } = req;
    const updateCharacter = await Charater.findOneAndUpdate({ _id: id }, body, { new: true });
    if(!updateCharacter) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json(updateCharacter);
});


export const deleteCharacter = asyncHandler (async (req, res) => {
    const {
        params: { id }
    } = req;
    const deleted = await Charater.findByIdAndDelete(id);
    if(!deleted) throw new ErrorResponse(`Charater with this ${id} doesn't exist!`, 404);  // Joi will substitute this one
    res.json({success: `Charater with this ${id} was deleted!`})
});

