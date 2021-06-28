const express = require("express");
const userController = require("../controller/UserController");
const router = express();


//Routers
router.post("/user/signup", userController.signUp);

router.post("/user/login", userController.login);

router.get("/user/:id", userController.getUserById);

router.put("/update/:id", userController.findUserByFirstNameAndLastName);

module.exports = router;
