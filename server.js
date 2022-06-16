
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
var mongoose = require('mongoose');
var userRoutes = require('./routes/user.routes');
const contactRoutes = require('./routes/contact.routes');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

server.use('/api/users', userRoutes);
server.use('/api/contact', contactRoutes);

// DB connection
mongoose
  .connect("mongodb+srv://tariq-saifullah:tariq3739128@cluster0.2tlyp.mongodb.net/users?retryWrites=true&w=majority")
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  }).catch((err) => {
    console.error("Error! connecting to your DB.");
  })

server.listen('3000', () => console.log('server is listening on port 3000!'));