const onePieceService = require('../services/onePiece.service');

const findCharacterControler = (req, res) => {
  const allCaracters = onePieceService.findCharacterService();
  res.send(allCaracters);
};

const findCharacterByIdControler = (req, res) => {
  const idParam = req.params.id;
  const choseCharacter = onePieceService.findCharacterByIdService(idParam);
  res.send(choseCharacter);
};

const createCharacterdControler = (req, res) => {
  const character = req.body;
  const newCharacter = onePieceService.createCharacterdService(character);
  res.send(newCharacter);
};

const updateCharacterByIdControler = (req, res) => {
  const idParam = req.params.id;
  const characterEdit = req.body;
  const upcharacter = onePieceService.updateCharacterByIdService(
    idParam,
    characterEdit,
  );
  res.send(upcharacter);
};

const deleteCharacterControler = (req, res) => {
  const idParam = req.params.id;
  onePieceService.deleteCharacterService(idParam);
  res.send({ message: 'character deleted!' });
};

module.exports = {
  findCharacterControler,
  findCharacterByIdControler,
  createCharacterdControler,
  updateCharacterByIdControler,
  deleteCharacterControler,
};
