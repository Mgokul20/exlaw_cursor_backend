// Requiring modules
const express = require('express');
// require('dotenv').config()
var {MongoClient,Timestamp } = require('mongodb');
var url = "mongodb+srv://Dhanush:SD18A2004@cluster0.2s94ek1.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const mongoClient = new MongoClient(url);
app.get('/', async function (req, res) {
	const database = (await mongoClient).db("mini_project");
	const collection =await database.collection("EXLAW");
	 const resul = await collection.find({}).toArray( function(err, result) {
		if (err) throw err;
		db.close();
		console.log(result);
		return result
		// console.log(result.name);
		
	  })
	 console.log(resul)
});
app.post('/post', async function (req, res) {
	// let body=req.body;
	try{
		const database = (await mongoClient).db("mini_project");
	const collection =await database.collection("EXLAW");
	const results = await collection.insertOne(req.body);
    res.send(JSON.stringify(results));
    }catch(err){
      res.send({statusCode: 500, body: err.toString()});
      }
		});


const port =5000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));