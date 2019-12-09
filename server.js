const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const app = express()

app.use(cors())

app.use(bodyparser.urlencoded({
    extended: true
}))

app.use(bodyparser.json())

const db = require('./app/config/db');

db.sequelize.sync({
    force: false
}).then(() => {
    console.log('connected to db ...')
})

require('./app/route/route.product')(app)
const port = 8443
app.listen(port, function () {
    console.log('server is starting and listening at port:', port)
})