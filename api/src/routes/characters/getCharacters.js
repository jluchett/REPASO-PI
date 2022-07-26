const { Router } = require('express');
const obtCharacters = require('../../controllers/characters/getCharacters');

const router = Router();

router.get('/', async (req,res) => {
    const name = req.query.name;
    try {
        let totCharacters = await obtCharacters();
        if(name){
            let characterName = await totCharacters.filter(cr => cr.name.toLowerCase().includes(name.toLowerCase()));
            characterName.length ?
            res.status(200).send(characterName) :
            res.status(404).send("No se encontro Character")
        } else {
            res.status(200).send(totCharacters);
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;