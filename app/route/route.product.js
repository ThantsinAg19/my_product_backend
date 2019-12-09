module.exports = function (app) {
    const product = require('../controller/controller.product');

    app.get('/productlist',product.getAllProducts)
}