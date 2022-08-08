const character = [
  {
    id: 1,
    name: 'Luffy',
    roll: 'Protagonist',
    gender: 'Male',
    race: 'Human',
  },
  {
    id: 2,
    name: 'Black Beard',
    roll: 'Antagonist',
    gender: 'Male',
    race: 'Unknown',
  },
  {
    id: 3,
    name: 'Zoro',
    roll: 'Secondary Character',
    gender: 'Male',
    race: 'Human',
  },
];

const findCharacterService = () => {
  return character;
};

const findCharacterByIdService = (id) => {
  return character.find((character) => character.id == id);
};

const createCharacterdService = (newCharacter) => {
  const newID = character.length + 1;
  newCharacterID = newID;
  character.push(newCharacter);
  return newCharacter;
};

const updateCharacterByIdService = (id, characterUpdated) => {
  characterUpdated['id'] = id;
  const characterIndex = character.findIndex((character) => character.id == id);
  character[characterIndex] = characterUpdated;
  return characterUpdated;
};

const deleteCharacterService = (id) => {
  const characterIndex = character.findIndex((character) => character.id == id);
  return character.splice(characterIndex, 1);
};

module.exports = {
  findCharacterService,
  findCharacterByIdService,
  createCharacterdService,
  updateCharacterByIdService,
  deleteCharacterService,
};
