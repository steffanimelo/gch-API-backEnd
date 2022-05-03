import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import Character from "../models/Character.js";

export const getAllCharacters = asyncHandler(async (req, res, next) => {
  const {
    query: { name, location, elements, weakness, strength, resistance, weapon },
  } = req;
  const query = {};

  if (name) {
    query.name = name.toUpperCase();
  }

  if (location) {
    const searchElements = elements
      .split(",")
      .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  query.location = { $all: searchLocation };
  }
  if (elements) {
    const searchElements = elements
      .split(",")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );
    query.elements = { $all: searchElements };
  }
  if (weakness) {
    const searchWeakness = weakness
      .split(",")
      .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  query.weakness = { $all: searchWeakness };
  }
  if (strength) {
    const searchStrength = strength
      .split(",")
      .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  query.strength = { $all: searchStrength };
  }
  if (resistance) {
    const searchResistance = resistance
      .split(",")
      .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  query.resistance = { $all: searchResistance };
  }
  if (weapon) {
    const searchWeapon = weapon
      .split(",")
      .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  query.weapon = { $all: searchWeapon };
  }

  console.log(query);
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
