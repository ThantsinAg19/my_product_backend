const db = require('../config/db')
const product = db.product

exports.getAllProducts = (req, res) => {
    console.log('searching...')
    product.findAll()
        .then(data => {
            res.status(200).send(data);
        })
}