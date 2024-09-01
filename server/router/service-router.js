const express = require("express");
const router = express.Router();
const Services =require("../controllers/service-controller")


router.route("/service").get(Services)


module.exports=router;