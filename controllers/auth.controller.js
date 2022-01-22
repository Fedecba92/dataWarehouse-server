const { response } = require('express'); //opcional
const users = require('../models/users');

//controllador para crear un usuario
const userCreate = async ( req, res = response ) => {
    const { username, name, phone, email, password } = req.body;

    console.log(name);

    console.log('here', users);
    await users.create({

        username,
        name,
        phone,
        email,
        password,
        roleId:'1'

    });

    return res.status(200).json({
        ok:true,
        msg:'Se ingresó correctamente',
        created:'null'
    });

}

//controlador para login

//controlador para revalidar o renovar token

module.exports = {
    userCreate
}