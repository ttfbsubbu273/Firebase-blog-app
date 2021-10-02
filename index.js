'use strict';
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const config = require('./config');
const blogRoute = require('./routes/blogroute');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

app.use('/api', blogRoute);


app.listen(config.port, () =>
    console.log("App is listening on url: http://localhost:" + config.port))
