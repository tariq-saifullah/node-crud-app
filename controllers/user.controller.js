const Users = require('../models/users/users.model');
const mongoose = require('mongoose');

exports.getAllUsers = (req, res) => {
    Users.find({})
        .exec((err, user) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send(user);
            }
        });
}


exports.addUser = (req, res) => {
    Users.create({
        name : req.body.name,
        email : req.body.email,
        age : req.body.age,
        gender : req.body.gender,
        isUser : req.body.isUser || true,
        isAdmin : req.body.isAdmin || false
    }, (err, user) => {
      if(err) {
          res.send(err)
      }
      else {
          res.send(JSON.stringify({message : 'User Successfully added!', user}));
      }
    });
}

exports.updateUser = (req, res) => {
    console.log(req.body);
    Users.findOneAndUpdate({
      _id : req.body.id
    },
    {$set: {name : req.body.name, age : req.body.age, otherDetails : {isAdmin : req.body.isAdmin || false, isUser : req.body.isUser || true}}},
    {upsert : true},
    (err, user) => {
      if(err) {
          res.send(err);
      }
      else {
          res.send(user)
      }
    }
    );
}

exports.removeUserById = (req, res) => {
    let response = { };
   Users.findByIdAndRemove({
       _id : req.body.id
   }, (err, user) => {
      if(err) {
          response.status = 404,
          response.message = 'Error deleting the user!'
          res.send(JSON.stringify(response));
      }
      else {
        response.status = 200,
        response.message = 'User successfully deleted!',
        response.user = user;
        res.send(JSON.stringify(response));
      }
   });
}