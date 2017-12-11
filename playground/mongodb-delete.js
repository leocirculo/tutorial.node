// const MongoClient = require('mongodb').MongoClient;
const {
	MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to database. ', err);
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Leo'})
  // .then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  // .then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  const id = new ObjectID('5a2bec018c7b159baf790890');
  db.collection('Users').findOneAndDelete({ _id: id })
  .then((result) => {
    console.log(result);
  });

  // db.close();
});