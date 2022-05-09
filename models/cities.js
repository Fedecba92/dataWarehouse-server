const { Model,DataTypes } = require ('sequelize');
const sequelize = require ('../db/config');



class cities extends Model {}
cities.init( {
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
            }
            
            
        }
    },
   
},
{
    sequelize:sequelize.connection,
    modelName: "cities",
    timestamps: false
});



module.exports = cities;