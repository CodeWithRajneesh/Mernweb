const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const signupSchema = require("../validator/auth-validator");
const loginSchema = require("../validator/login-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");

// Registration route with validation
router.route("/register")
    .post(validate(signupSchema), authControllers.register);

// Login route with validation
router.route("/login")
    .post(validate(loginSchema), authControllers.login);

// Protected user route with authentication middleware
router.route("/user")
    .get(authMiddleware, authControllers.user);

module.exports = router;
