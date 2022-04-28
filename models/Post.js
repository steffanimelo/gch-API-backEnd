import mongoose from "mongoose";
const { Schema, model } = mongoose;


const postSchema = new Schema({
    id: Number,
    name: String,
    location: String,
    elements: String,
    weakness: String,
    strength: String,
    resistance: String,
    weapon: String,
    game: String,
    description: String,
    img: String  
});


export default model ('Post', postSchema);