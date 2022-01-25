const { Router } = require('express');
const { check } = require('express-validator');

const { fieldValidator } = require('../middlewares/fields-validators');
const { userCreate } = require('../controllers/auth.controller');

const router = Router();

//crear un usuario
router.post('/new',[ 
    check('name', 'el campo nombre es obligatorio').not().isEmpty(), 
    check('email','el valor no es un email valido').isEmail(),
    check('password','El campo password es obligatorio').not().isEmpty(),
    check('password','La contraseña debe tener al menos 6 caracteres y no más de 12').isLength({ min: 6, max: 12 }),
    fieldValidator], userCreate);


//login de usuario
router.post('/login',)


//validar y revalidar el token





module.exports = router;