const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false

    }
})


// secure the password with the bcrypt

// pre method means data save karne se pahle pre method run hoga aur phir hum haspssowrd apply kar sakte hain phir database main data save hoga

userSchema.pre('save', async function (next) {
    //next is a middleware and checked if password is not change then go to next step

    // console.log("pre method", this);
    const user = this;
    // console.log(this);
    if (!user.isModified("password")) {
         return next();
    }
    try {
        // const saltRound=10;
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }

})


// compare the password


userSchema.methods.comparePassword = async function (inputPassword) {
    return await bcrypt.compare(inputPassword, this.password);
};


// json Web Token

// Tokens , such as JWTs ( JSON WEB TOEKN),are typically not stored in the database alog with other user details.Instead, they are issued by the server, during the authentication process and then stored on the client-side(e.g, in cookies or local storage) for later use.

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_KEY, {
            expiresIn: "30d",
        }
        )

    } catch (error) {
        console.log(error)
    }
}

//In most cases converting _id to a string is good practice because it comes it ensures consistency and compatibility across different JWT libraries amd systems. It also aligns with the exeption that cliams in JWT are represent as strings.



// define the model an dthe collection name
const User = new mongoose.model("User", userSchema)
module.exports = User;