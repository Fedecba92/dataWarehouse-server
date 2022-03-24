const { Model,DataTypes } = require ('sequelize');
const sequelize = require ('../db/config');



class regions extends Model {}
regions.init( {
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
            
        }
    },
   
},
{
    sequelize:sequelize.connection,
    modelName: "regions",
    timestamps: false
});



module.exports = regions;