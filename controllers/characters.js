import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";

//database testing as an array   
const characters = [
    {id:1,
    Name:'CHIMERA', 
    Location: 'Mirage Tower', 
    Elements: 'Fire', 
    Weakness: 'Ice', 
    Strength: 'Fire-based attacks', 
    Resistant: 'Quake, and Fire', 
    Weapon: 'Fire-breathing, Blaze', 
    Game: 'FINAL FANTASY XV (First appearance since Final Fantasy II)', 
    Description: ' As a final boss of Cutters Cry, the origins of this nightmarish combination of lion, goat, and dragon have been furiously debated. Some deem the creature a cruel jest of the gods, while others believe it the twisted creation of forbidden sorcery.', 
    img: "https://drive.google.com/drive/folders/150tlVJJZDG0a7f6HJQJRJgCiH54rYU6v"},
      
];


export const getAllCharacters = asyncHandler (async (req, res, next) => {
    try {
        throw new ErrorResponse('Not found!', 404);
      } catch (error) {
        next(error);
      }
});

export const createCharacter = ((req, res) => {
    const { body } = req;
    const newCharacter = { id: characters.length +1, ...body};
    characters.push(newCharacter)
    res.status(201).json(newCharacter);
});

export const getSingleCharacter = ((req, res) => {                // how to fix this one as an async function?
    const {
        params: { id }
    } = req;
    const found = characters.find(character => character.id === parseInt(id));    // hand also this one as an async function?
    //if(!found) return res.status(404).json({msg: 'There is no Character with this ID!'})
    res.json(found);
});

export const updateCharacter = async (req, res) => res.send('You just changed an existing Character!');

export const deleteCharacter = async (req, res) => res.send('You just deleted a Character!');
