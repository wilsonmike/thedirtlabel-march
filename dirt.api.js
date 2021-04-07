const express = require("express");
const dirt = express.Router();
const pool = require("./connection");

//api routes including pg data

//TVSO Data
dirt.get('/shipping', function(req,res) {
    let query = `select * from shipping`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

dirt.get('/lineitems', function(req,res) {
    let query = `select * from lineitems`;
    pool.query(query).then((response) => {
        res.json(response.rows);
    });
})

module.exports = dirt;