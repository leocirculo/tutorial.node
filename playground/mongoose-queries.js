const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const id = '5b4394947cb43415a4df83d3';

if (ObjectID.isValid(id)) {
  Todo.find({
    _id: id,
  }).then((todos) => {
    if (todos.length === 0) return console.log('not found');
    console.log(todos);
  })
    .catch(err => console.log(err));

  Todo.findOne({
    _id: id,
  }).then((todos) => {
    if (!todos) return console.log('not found');
    console.log(todos);
  })
    .catch(err => console.log(err));

  Todo.findById(id).then((todo) => {
    if (!todo) return console.log('not found');
    console.log(todo);
  })
    .catch(err => console.log(err));

} else {
  console.log('id is invalid');
}

