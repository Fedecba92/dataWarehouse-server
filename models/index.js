const users = require('./users');

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

