const { Router } = require('express');
const { check } = require('express-validator');

const { fieldValidator } = require('../middlewares/fields-validators');
const { userCreate, userLogin, getUsers } = require('../controllers/auth.controller');

const router = Router();
//Obtener usuario
router.get('/users',getUsers); //  http:localhost:3000/api/auth/users

//crear un usuario
router.post('/new',[ 
    check('name', 'el campo nombre es obligatorio').not().isEmpty(), 
    check('email','el valor no es un email valido').isEmail(),
    check('password','El campo password es obligatorio').not().isEmpty(),
    fieldValidator], userCreate);

//login de usuario
router.post('/login', userLogin)


//validar y revalidar el token





module.exports = router;