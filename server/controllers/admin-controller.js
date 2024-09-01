const User = require('../models/user_model'); // Mongoose model for the User collection
const Contact = require('../models/contact-model'); // Mongoose model for the Contact collection

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 }); // Retrieve all users, excluding the password field
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        } else {
            return res.status(200).json(users);
        }
    } catch (error) {
        next(error)
    }
};

// Get single user by ID

const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ _id: id }, { password: 0 }); // Find user by ID, excluding the password field
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        next(error)
    }
};

// Delete user by ID

const deleteUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id); // Delete user by ID
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error)
    }
};

// Update user by ID


const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, { $set: updatedData }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(updatedUser);
    } catch (error) {
        next(error)
    }
};

// Get all contacts

const getAllContact = async (req, res, next) => {
    try {
        const contacts = await Contact.find(); // Retrieve all contacts
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
};

// delete contact by id

const deleteContactById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        return res.status(200).json({ message: 'Contact deleted successfully' });
    } catch (error) {
        next(error)
    }
};



module.exports = { getAllUsers, getAllContact, deleteUserById, getUserById, updateUserById, deleteContactById };
