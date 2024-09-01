const { z } = require("zod");


const loginSchema = z.object({
    email: z
        .string({ require_error: "Email is required" })
        .email({ message: "Invalid email address" })
        .trim().min(3, { message: "Email must be at least 3 chars" })
        .max(255, { message: "Email must not be more then 255 charaters" }),
    password: z
        .string({ require_error: "Password is required" })
        .min(5, { message: "Password must be at least 5 chars" })
        .max(1024, { message: "Password must not be more then 1024 charaters" }),


})

module.exports = loginSchema;