const express = require("express");
const router = express();


exports.isEmailCorrect = (req, res, next) => {
    if (req.body.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/))
    {
        next();
    }
    return res.status(400).send('Bad Request');
    };
