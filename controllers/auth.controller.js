const { response } = require('express'); //opcional
const users = require('../models/users');

//controllador para crear un usuario
const userCreate = async ( req, res = response ) => {
    const { username, name, phone, email, password } = req.body;

    console.log(name);

    console.log('here', users);
    const created = await users.create({

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
        created
    });

}

//controlador para login
const userLogin = async ( req, res = response ) => {
    const { username, password } = req.body;

    console.log( username );

    const user = await users.findAll({

        where:{
            username
        }

    });

    if( !user ){
        return res.status(400).json({
            ok:false,
            msg:'El usuario no existe',
        });
    }

    

    return res.status(200).json({
        ok:true,
        msg:'Se ingresó correctamente',
        user
    });

}



//controlador para revalidar o renovar token

module.exports = {
    userCreate
}