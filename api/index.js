// Requiring modules
const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();
const config = {
	user: 'root',
	password: 'root',
	server: 'localhost',
	database: 'exlaw'
};
app.get('/', function (req, res) {

});

