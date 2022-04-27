import mongoose from "mongoose";
import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";



try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log(res);
} catch (error) {
    console.log(error);
}


export const getAllCharacters = asyncHandler (async (req, res, next) => res.sen('Get All Characters'));

export const getSingleCharacter = asyncHandler(async (req, res) => res.send('Getting a Single Character'));

export const createCharacter = asyncHandler(async (req, res) => res.send('Create New Character'));

export const updateCharacter = asyncHandler (async (req, res) => res.send('You just changed an existing Character!'));

export const deleteCharacter = asyncHandler (async (req, res) => res.send('You just deleted a Character!'));
