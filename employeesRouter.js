const express = require("express");
const router = express.Router();
const employeeModule = require("./modules/employeeModule");
const auth = require("./modules/authModule");

router.get("/get",employeeModule.getEmployees);

router.put("/update/:id",auth.authorizeUser, employeeModule.updateEmployees);

router.post("/create" ,auth.authorizeUser, employeeModule.createEmployees);

router.delete("/delete/:id" ,auth.authorizeUser, employeeModule.deleteEmployees);

module.exports = router;