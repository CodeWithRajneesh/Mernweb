const Contact = require("../models/contact-model");

const contactForm = async (req, res,next) => {
    try {
        const { username, email, message } = req.body;

        // Logging the received data
        console.log("Received Request Body:", req.body);

        // Creating new contact
        const newContact = await Contact.create({ username, email, message });
        console.log("New Contact Created:", newContact);

        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        next(error)
    }
};

module.exports = contactForm;
