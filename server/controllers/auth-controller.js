const User = require('../models/user_model');




// User Registration Logic

//1. Get the Registration Data: Retrive user Data(username,email,passowrd)
//2. check Email Exetence: check if the email is already registered
//3. Hash Password: Securly hash the password
//4. Create User: Create a new user with the hashed Password
//5. save to DB: Save user Data to the Database
//6. Response: Response with "Registration Successful " or handle errors


const register = async (req, res) => {
    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;


        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }


        const userCreated = await User.create({
            username,
            email,
            phone,
            password
        });
        res.status(201).json({
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    } catch (error) {

        next(error);
    }
};

// User Login Part


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        const isMatch = await userExist.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid Email or Password" });
        }

        const token = await userExist.generateToken();
        return res.status(200).json({ msg: "Login successful", token, userId: userExist._id.toString() });

    } catch (error) {
        next(error)
    }
};


// to send user data- user logic


const user = async (req, res, next) => {
    try {
        // Assuming req.user is populated by the auth middleware
        const userData = req.user;

        // Log the user data
        console.log(userData);

        // Return the user data
        return res.status(200).json({ user: userData });

    } catch (error) {
        next(error)
    }
};

module.exports = { register, login, user };
