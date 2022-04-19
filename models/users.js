const { Model,DataTypes } = require ('sequelize');
const sequelize = require ('../db/config');



class users extends Model {}
users.init( {
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:'field can not be empty'
            },
            notNull:{
                msg:'The field can not be null'
            },
            len:{
                args:[3,255],
                msg:'the username lenght has to be between 3 and 255 characters'
            }
        
        }
        
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:'field can not be empty'
            },
            notNull:{
                msg:'The field can not be null'
            },
            isAlpha:{
                args:true,
                msg:'name must only contain letters'
        
            },
            len:{
                args:[3,255],
                msg:'the name lenght has to be between 3 and 255 characters'
            }
        
        
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:'field can not be empty'
            },
            notNull:{
                msg:'The field can not be null'
            },
            len:{
                args:[3,255],
                msg:'the phone lenght has to be between 3 and 255 characters'
            },
            isNumeric:{
                args:true,
                msg:'phone must contain only numbers'
            }
        
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:{
                args:true,
                msg:'field can not be empty'
            },
            notNull:{
                msg:'The field can not be null'
            },
            len:{
                args:[3,255],
                msg:'the password lenght has to be between 3 and 255 characters'
            }
        
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notEmpty:{
                args:true,
                msg:'field can not be empty'
            },
            notNull:{
                msg:'The field can not be null'
            },
            len:{
                args:[3,255],
                msg:'the password lenght has to be between 3 and 255 characters'
            },
            isEmail:{
                args:true,
                msg:'it must be a valid E-mail address'
            }
        
        },
        unique: {
          
            name: 'email',
            msg: 'The email is already taken!'
         }
    },
    
},
{
    sequelize:sequelize.connection,
    modelName: "users",
    timestamps: false
});



module.exports = users;