// Requiring modules
const express = require('express');
// require('dotenv').config()
const app = express();
const bodyParser = require ('body-parser');
app.use(bodyParser.json());
const cors = require("cors"); 
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));  
app.use(bodyParser.urlencoded({ extended: false }));
var {MongoClient,Timestamp } = require('mongodb');
var url = "mongodb+srv://Dhanush:SD18A2004@cluster0.2s94ek1.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(url);
app.get('/', async function (req, res) {
	const database = (await mongoClient).db("mini_project");
	const collection =await database.collection("EXLAW");
	 const resul = await collection.find({}).toArray( function(err, result) {
		if (err) throw err;
		db.close();
		console.log(result);
		return result
	
		
	  })
	 console.log(resul)
	 res.send(JSON.stringify(resul));
});
app.post('/post', async function (req, res) {
	// console.log(req);
	// let reqq=JSON.parse(req);
console.log(req.body)
	try{
		const database = (await mongoClient).db("mini_project");
	const collection =await database.collection("EXLAW");
	const results = await collection.insertOne({Message:`${req.body.Message}`,});
    res.send(JSON.stringify(results));
    }catch(err){
		console.log(err)
      res.send({statusCode: 500, body: err.toString()});
      }
		});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));