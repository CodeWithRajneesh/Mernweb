const { z } = require("zod");


const signupSchema = z.object({
    username: z
        .string({ require_error: "Name is required" })
        .trim().min(3, { message: "Name must be at least 3 chars" })
        .max(255, { message: "Name must not be more then 255 charaters" }),
    email: z
        .string({ require_error: "Email is required" })
        .email({ message: "Invalid email address" })
        .trim().min(3, { message: "Email must be at least 3 chars" })
        .max(255, { message: "Email must not be more then 255 charaters" }),
    phone: z
        .string({ require_error: "Phone is required" })
        .trim().min(10, { message: "Phone must be at least 10 chars" })
        .max(20, { message: "Phone must not be more then 20 charaters" }),
    password: z
        .string({ require_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 chars" })
        .max(1024, { message: "Password must not be more then 1024 charaters" }),
});
module.exports = signupSchema;