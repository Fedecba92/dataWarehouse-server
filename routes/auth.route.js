const { Router } = require('express');
const { check } = require('express-validator');
const { userCreate } = require('../controllers/auth.controller');
const router = Router();

//crear un usuario
router.post('/new', userCreate);


//login de usuario


//validar y revalidar el token





module.exports = router;