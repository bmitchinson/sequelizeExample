const models = require('./database/models');

// const User = sequelize.define("user", {
//   name: DataTypes.TEXT,
//   favoriteColor: {
//     type: DataTypes.TEXT,
//     defaultValue: 'green'
//   },
//   age: DataTypes.INTEGER,
//   cash: DataTypes.INTEGER
// });

// (async () => {
//   await sequelize.sync({ force: true });
//   const jane = await User.create({ name: "Jane" });
// })();

const Dan = models.User.create({
  firstName: "Jim"
}).then(() => {
  console.log("Sweet!");
  console.log(this);
})

// models.extra_user.sync({force: true}).then(() => {
//   // Table created
//   return extra_user.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });

