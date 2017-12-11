// const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
	ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) return console.log('Unable to connect to database. ', err);
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5a293731bd9028cf0e8fe862'),
	// }).toArray()
	// .then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// })
	// .catch((error) => {
	// 	console.log('unable to fetch database ', error);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }).catch((error) => {
	// 	console.log('unable to fetch database ', error);
	// });

	db.collection('Todos').find().toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	});

	db.close();
});