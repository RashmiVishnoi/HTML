const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/UserRoute");
const adminRouter = require("./routes/AdminRoute");


const User = require("./models/User");
const Admin = require("./models/Admin");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());



const PORT = 7000;

mongoose.connect("mongodb://localhost:27017/trail", {
    useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected successfuly");
    }).catch(() =>{
        console.error("mongoDB connection failed.")
    });


    app.use(userRoute);
    app.use(adminRouter);

app.listen(7000, () =>{
    console.log(`The server is running on port: ${PORT}`);
});