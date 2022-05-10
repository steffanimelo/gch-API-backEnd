import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Character from "../models/Character.js";

/* export const updateAll = asyncHandler(async (req, res) => {
  const docs = await Character.find();
  for await (const doc of docs) {
    doc.elements = doc.elements.map((el) => el.toLowerCase());
    doc.weakness = doc.weakness.map((el) => el.toLowerCase());
    doc.strength = doc.strength.map((el) => el.toLowerCase());
    doc.resistance = doc.resistance.map((el) => el.toLowerCase());
    doc.weapon = doc.weapon.map((el) => el.toLowerCase());
    await doc.save();
  }
  res.json(docs);
}); */

export const getAllCharacters = asyncHandler(async (req, res, next) => {
  const {
    query: { name, location, elements, weakness, strength, resistance, weapon },
  } = req;
  const query = {};
  if (name) {
    query.name = name.toUpperCase();
  }
  if (location) {
    const searchLocation = location.split(",").map((location) =>
      location
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    );
    query.location = { $all: searchLocation };
  }
  if (elements) {
    const searchElements = elements.split(",");
    query.elements = { $all: searchElements };
  }
  if (weakness) {
    const searchWeakness = weakness.split(",");
    query.weakness = { $all: searchWeakness };
  }
  if (strength) {
    const searchStrength = strength.split(",");
    query.strength = { $all: searchStrength };
  }
  if (resistance) {
    const searchResistance = resistance.split(",");
    query.resistance = { $all: searchResistance };
  }
  if (weapon) {
    const searchWeapon = weapon.split(",");
    query.weapon = { $all: searchWeapon };
  }

  if (process.env.NODE_ENV !== "production") {
    console.log(query);
  }
  const characters = await Character.find(query);

  res.json({ total: characters.length, characters });
});

export const getSingleCharacter = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const character = await Character.findById(id);

  if (!character)
    throw new ErrorResponse(`Character with this ${id} doesn't exist!`, 404);
  res.json(character);
});

export const createCharacter = asyncHandler(async (req, res) => {
  const { body } = req;
  const newCharacter = await Character.create(body);
  res.status(201).json(newCharacter);
});

export const updateCharacter = asyncHandler(async (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const updateCharacter = await Character.findOneAndUpdate({ _id: id }, body, {
    new: true,
  });
  if (!updateCharacter)
    throw new ErrorResponse(`Character with this ${id} doesn't exist!`, 404);
  res.json(updateCharacter);
});

export const deleteCharacter = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;
  const deleted = await Character.findByIdAndDelete(id);
  if (!deleted)
    throw new ErrorResponse(`Character with this ${id} doesn't exist!`, 404);
  res.json({ success: `Character with this ${id} was deleted!` });
});
