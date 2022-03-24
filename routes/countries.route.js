const { Router } = require('express');
const router = Router();

const { getCountries, getRegions } = require('../controllers/countries.controller');

//Obtener información de zonas
router.get('/', getCountries); // http://localhost:3000/api/countries
router.get('/regions', getRegions); // http://localhost:3000/api/countries/regions



module.exports = router;