// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) return console.log('Unable to connect to database. ', err);
	console.log('Connected to MongoDB server');

	// Insert new record
	/* db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false,
	}, (err, result) => {
		if (err) return console.log('Unable to insert todo. ', err);
		console.log(JSON.stringify(result.ops, undefined, 2));
	}); */

	// Insert new record
	/* db.collection('Users').insertOne({
		name: 'Leo',
		age: 29,
		location: 'Resistencia',
	}, (err, result) => {
		if (err) return console.log('Unable to insert user. ', err);
		console.log(JSON.stringify(result.ops, undefined, 2));
	});*/

	db.close();
});