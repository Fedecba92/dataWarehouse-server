const { Router } = require('express');
const router = Router();

const { createRegion, 
        getCountries, 
        getRegions, 
        createCountry, 
        createCity, 
        getCities,
        getCountriesByRegion 
    } = require('../controllers/countries.controller');

//Obtener información de zonas
router.get('/', getCountries); // http://localhost:3000/api/countries
router.post('/', createCountry );  // http://localhost:3000/api/countries
router.get('/countries/:regionId', getCountriesByRegion); // http://localhost:3000/api/countries/countries/:regionId
router.get('/regions', getRegions); //http://localhost:3000/api/countries/regions
router.post('/regions', createRegion); //http://localhost:3000/api/countries/regions
router.post('/cities', createCity); //http://localhost:3000/api/countries/cities
router.get('/cities', getCities) //http://localhost:3000/api/countries/cities




module.exports = router;