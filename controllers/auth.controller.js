const { response } = require("express"); //opcional
const bcrypt = require("bcryptjs");

const users = require("../models/users");
const { tokenGenerator } = require("../helpers/jwt");

//controllador para crear un usuario
const userCreate = async (req, res = response) => {
  const { username, name, phone, email, password, roleId } = req.body;

  try {
    //encripta la contraseña con hash
    const salt = bcrypt.genSaltSync();
    passwordCrypt = bcrypt.hashSync(password, salt);

    console.log("here", req.body);
    const created = await users.create({
      username,
      name,
      phone,
      email,
      password: passwordCrypt,
      roleId
    });

    //Generar el JWT
    const token = await tokenGenerator(created.id, created.name);

    return res.status(200).json({
      ok: true,
      msg: "Se ingresó correctamente",
      created,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Por favor comuníquese con el administrador de este sitio",
      error,
    });
  }
};

//controlador para login
const userLogin = async (req, res = response) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    const user  = await users.findOne({
      where: {
        username,
      },
    });


    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    //confirma si el password hace match
    const validPassword = bcrypt.compareSync( password, user.dataValues.password );

    if( !validPassword){
        return res.status(400).json({
            ok: false,
            msg: "La contraseña no es correcta",
        });
    }

    //Generar el JWT
    const token = await tokenGenerator(user.dataValues.roleId, user.dataValues.name);

    return res.status(200).json({
      ok: true,
      msg: "Se ingresó correctamente",
      token
    });
  } catch (error) {

    return res.status(500).json({
        ok:false,
        msg: "Por favor comuníquese con el administrador de este sitio",
        error,
    });
  }
};

const getUsers = async (req, res = response) => {
  try { 

    const results = await users.findAll();
      return res.status(200).json({
        ok:true,
        data: results
      })

  } catch (error) {
    
    return res.status(500).json({
      ok:false,
      error
    })

  }

}


//controlador para revalidar o renovar token


module.exports = {
  userCreate,
  userLogin,
  getUsers
};
