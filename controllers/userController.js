const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");
require("dotenv").config();

// Defining methods for the userController
module.exports = {
  validateUser: function (req, res) {
    let username = req.body.data.username;
    let password = req.body.data.password;

    User.findOne({ username: username }).then(dbEntry => {
      // console.log(dbEntry)

      dbEntry.verifyPassword(password, (err, valid) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error")
        } else if (valid) {
          // console.log(valid);
          //Create JSON Web Token with username as the payload.
          let token = jwt.sign({ user: username }, process.env.TOKEN_SECRET);
          //Respond with an array with success message, and the token.
          res.status(200).send(["Login Successful", token]);
        } else {
          console.log("not valid")
          res.status(401).send("Authentication failed.")
        }
      })
    })
  },

  getUsers: function(req, res) {
    User.find({},{username:1}, (err, data) => {
      if(err) return err;
      // console.log(data);
      return res.json(data)
    })
  },

  createUser: function (req, res) {
    let body = req.body.data;
    bcrypt.hash(body.password, 10, function(err, hash){
      User
      .create({
        username: body.username,
        password: hash
      }, (err, success) => {
        if (err) {
          if (err.code === 11000) {
            res.status(422).json(err)
          } else {
            res.status(500).json(err)
          }
        }
        // console.log(success)
        res.status(200).send("User successfully created.")
      })
    })
  },

  removeUser: function (req, res) {
    let body = req.body.data;
    User
      .findByIdAndDelete({
        _id: body._id
      }, (err, success) => {
        if (err) {
          if (err.code === 11000) {
            res.status(422).json(err)
          } else {
            res.status(500).json(err)
          }
        }
        // console.log(success)
        res.status(200).send("User successfully removed.")
      })
  },

  //Back-end method to verify token.
  verifyToken: (req, res) => {
    //Store jwt.verify to check.  This will be an object that contains the payload, in this case, the username.
    jwt.verify(req.body.data, process.env.TOKEN_SECRET, (err, check) => {
      if(err){
        //Send Invalid message.
        res.send("Invalid Token")
      }
      if(check){
        //Then, using the verified token, check to see if the user exists in the User collection.
        User.findOne({ username: check.user }).then((data, err) => {
          if (err) {
            console.log(err)
            //Send invalid message.
            res.send("Invalid Token")
          }
          if (data) {
            //If good, pass 200 status
            res.status(200).send("Token Verified!");
          }
        })
      }
    });
  }

};
