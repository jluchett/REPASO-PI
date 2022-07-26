const { Router } = require("express");
const getCharacters = require('./characters/getCharacters')

const router = Router();

// Configurar los routers
router.use('/characters', getCharacters)

module.exports = router;
