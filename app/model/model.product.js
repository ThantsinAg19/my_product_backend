module.exports = (sequelize, Sequelize) => {
    return Product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        label: {
            type: Sequelize.STRING,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: 'product'
    })
}