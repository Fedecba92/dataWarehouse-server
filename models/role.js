const { Model,DataTypes } = require ('sequelize');
const sequelize = require ('../db/config');

class role extends Model {}
role.init( {
    name: {
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    sequelize:sequelize.connection,
    modelName: "role",
    timestamps: false
});


module.exports = role;