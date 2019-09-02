const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = require('../config/database');

class Todo extends Model {}

Todo.init({
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description : {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'todo'
});

Todo.sync({}).then(() => {
    console.log('Create table todo');
});

module.exports = Todo;