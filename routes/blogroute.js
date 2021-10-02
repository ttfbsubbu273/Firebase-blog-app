const express = require('express');
const { addBlog } = require('../controllers/blogcontroller');

const route = express.Router();

route.post('/student', addBlog);

module.exports= {
    route
};