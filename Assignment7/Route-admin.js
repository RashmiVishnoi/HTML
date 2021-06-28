const express = require("express");
const adminController = require("../controller/AdminController");
const router = express();


//Routers
router.post("/admin/signup", adminController.signUp);

router.post("/admin/login", adminController.login);

module.exports = router;