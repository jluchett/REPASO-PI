const axios = require('axios');

const getCharacters = async () => {
    try {
        const apiUrl = await axios.get('https://rickandmortyapi.com/api/character');
        const dataJson = apiUrl.data?.results.map(rc =>{
            return {
                id: rc.id,
                name: rc.name,
                especies: rc.especies,
                origin: rc.origin.name,
                image: rc.image,
            }
        })
        return dataJson;
    } catch (error) {
        console.log(error);
    }
}

module.exports = getCharacters;