const Admin = require("../models/Admin");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
exports.signUp = (req, res) => {
    let { firstName, lastName, email, password } = req.body;
    let admin = new Admin ({
        firstName, lastName, email, password
    });
    admin.save()
    .then(() =>res.status(200).send(admin))
    .catch((error) => { console.error(error);
        return res.status(500).send("ERROR");
    });
};
exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({email: email })
    .then((admin) => {
        const token = JWT.sign({
            email: admin.email,
         },"trailSecretKey",
         { expiresIn: "1h"});
        console.info(`Admin with email: ${email} was successfully found`);
        if(password === admin.password){
            console.info("login succesfull");
            return res.status(200).send(admin);
        }
        console.warn("Password Incorrect");
        return res.status(401).send("Password was Incorrect");
    }).catch((error) => {
        console.error(`Admin with email: ${email} does not exist!`);
        return res.status(404).send(`Admin with email: ${email} not exist!`);
    });
};