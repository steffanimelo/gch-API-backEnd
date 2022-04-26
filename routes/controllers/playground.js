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
    
    {id:2,
    Name:'TORAMA', 
    Location: 'Palamecia and Pandaemonium', 
    Elements: 'Fire, Thunder, Ice, Water, Wind, Earth, Poison, Holy', 
    Weakness: 'Haste, Regen, Reflect, Drain', 
    Strength: 'Blaster Attacks', 
    Resistant: 'Death, Poison, Silence, Berserk, Float, Confuse', 
    Weapon: 'Thunder, Bio, Confuse, Death, Demi, Aero, Level 5 Death, Meteor, Holy, Esuna, Blaster', 
    Game: 'FINAL FANTASY XIV (First appearance since Final Fantasy II)', 
    Description: ' These predatory quadrupeds are feared for their unrivaled savagery. In the same manner, as its close cousin, the coeurl, the torama subdues its prey by unleashing electrical from the two whip-like appendages that frame its fang-lined jaws.', 
    img: "https://drive.google.com/drive/folders/150tlVJJZDG0a7f6HJQJRJgCiH54rYU6v"},
];


export const getAllCharacters = (req, res) => res.json(characters)

export const createCharacter = ((req, res) => {
    const { body } = req;
    const newCharacter = { id: characters.length +1, ...body};
    characters.push(newCharacter)
    res.status(201).json(newCharacter);
});

export const getSingleCharacter = ((req, res) => {
    const {
        params: { id }
    } = req;
    const found = characters.find(character => character.id === parseInt(id));
    if(!found) return res.status(404).json({msg: 'There is no Character with this ID!'})
    res.json(found);
});

export const updateCharacter = (req, res) => res.send('You just changed an existing Character!');

export const deleteCharacter = (req, res) => res.send('You just deleted a Character!');
