const users = require('./users');
const regions = require('./regions');
const countries = require('./countries');
const cities = require('./cities');
const role = require('./role')

//Regions One-To-Many
regions.hasMany( countries,{
    foreignKey:'regionId'
});
countries.belongsTo(regions);


//Countries One-To-Many
countries.hasMany( cities,{
    foreignKey:'countryId'
});
//cities
cities.belongsTo(countries);

//USERS
users.belongsTo(role,{
    foreignKey:'roleId',
});




//USERS
// users.belongsTo(role,{
//     foreignKey:'roleId',
//     foreignKeyConstraint: true,
// });

// users.hasMany(orders,{
//     foreignKey:'userId',
//     foreignKeyConstraint: true
// });

// orders.belongsTo(users,{foreignKey:'userId',
// foreignKeyConstraint: true})

//ORDERS
// paymentMethod.hasOne(orders,{
//     foreignKey:'paymentMethod_id'
// });
// orders.belongsTo(paymentMethod,{
//     foreignKey:'paymentMethodId',
//     foreignKeyConstraint:true
// });

// paymentMethod.hasOne(orders,{
//     foreignKey:'paymentMethodId',
//     foreignKeyConstraint: true
// })

// orders.belongsToMany(products,{
//     through:ordersHasProducts,
//    constraints:false,
//    foreignKeyConstraint:false
// });


module.exports={ users };

