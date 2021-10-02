'use strict';
const Firebase = require('../db');
const blog = require('../models/blogs');
const firestore = Firebase.firestore();


const addBlog = async(req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection("Blogs").doc().set(data);
        res.send("Record Saved Successfully");
    }catch(error){
        res.status(400).send(error.message);
    }
}
module.exports = {
    addBlog
}