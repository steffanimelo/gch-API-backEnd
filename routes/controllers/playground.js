//database testing as an array   
const characters = [
    {id:1,name:'Thorr', origin: 'Pole', age: '400', weakness: 'fire', strength: 'ice', Weapon: 'Hammer', game: 'FF4', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww', img: "https://drive.google.com/drive/folders/1usLi659tgYvRoEzQcmjcs-NVbPTOKeHO"},
    {id:2,name:'Frea', origin: 'Sun', age: '1000', weakness: 'unknown', strength: 'fire', Weapon: 'Mind', game: 'FF8', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww', img: "https://drive.google.com/drive/folders/1usLi659tgYvRoEzQcmjcs-NVbPTOKeHO"},
    {id:3,name:'BigFoot', origin: 'Mars', age: '300', weakness: 'eye', strength: 'Dust', Weapon: 'Gun', game: 'FF2', Description: 'Some text wwwwwwwwwwwwwwwwwwwwwwwwwwwww', img: "https://drive.google.com/drive/folders/1usLi659tgYvRoEzQcmjcs-NVbPTOKeHO"},
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
    if(!found) return res.status(404).json({msg: 'No Character for you!'})
    res.json(found);
});

export const updateCharacter = (req, res) => res.send('Change an existing Character');

export const deleteCharacter = (req, res) => res.send('Delete a Character');
