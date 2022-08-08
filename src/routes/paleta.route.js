const express = require('express');
const router = express.Router();
const onePiececontroller = require('../controllers/onePiece.controller');
router.get('/find-character', onePiececontroller.findCharacterControler);
router.get('/find-character/:id', onePiececontroller.findCharacterByIdControler);
router.post('/create', onePiececontroller.createCharacterdControler);
router.put('/update/:id', onePiececontroller.updateCharacterByIdControler);
router.delete('/delete/:id', onePiececontroller.deleteCharacterControler);

module.exports = router;
