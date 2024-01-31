const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    await client.connect();
    let db = client.db(database);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
    await client.close();
}

getData();
