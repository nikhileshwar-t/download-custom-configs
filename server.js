const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const getConfigs = require('./API/custom-configs');

const app = express()

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true}));

getConfigs.getConfigs(app)

let port = process.env.PORT || 7071;
app.listen(port, () => console.log("app running on port : ", port))