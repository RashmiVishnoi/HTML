const User = require("../models/User");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
exports.signUp = (req, res) => {
    let { firstName, lastName, email, password, DoB } = req.body;
    let user = new User ({
        firstName, lastName, email, password, DoB,
    });
    user.save()
    .then(() =>res.status(200).send(user))
    .catch((error) => { console.error(error);
        return res.status(500).send("ERROR");
    });
};
exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({email: email })
    .then((user) => {
        const token = JWT.sign({
            email: user.email,
         },"trailSecretKey",
         { expiresIn: "1h"});
        console.info(`User with email: ${email} was successfully found`);
        if(password === user.password){
            console.info("login succesfull");
            return res.status(200).send(user);
        }
        console.warn("Password Incorrect");
        return res.status(401).send("Password was Incorrect");
    }).catch((error) => {
        console.error(`User with email: ${email} does not exist!`);
        return res.status(404).send(`User with email: ${email} not exist!`);
    });
};


exports.findUserByFirstNameAndLastName = (req, res) => {
    let { email, password, firstName, lastName } = req.body;
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    User.updateOne(
        { _id: id },
        { $set: { email, password, firstName, lastName }})
    .then(() => {
        console.info("Update succesful");
        return res.status(200).send({ email, password, lastName, firstName});
    })
    .catch((error) => {
        console.error("There was an error while udating the user");
        return res.status(500).send("There was an error while updating the user");
    });
};

exports.getUserById = (req, res) => {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    User.findOne({_id: id}).then((user) =>{
        if (user) {
        console.info("User found");
        return res.status(200).send(user);
        }
        console.error("User was not found!");
        return res.status(404).send("NOT FOUND");
    }).catch((error) => {
        console.error(error);
        return res.status(500).send("Error");
    })
};