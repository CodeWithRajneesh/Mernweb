const Service = require("../models/service-modal");

const Services = async (req, res, next) => {
    try {
        const response = await Service.find();
        console.log("Services found:", response); // 
        if (!response || response.length === 0) {
            return res.status(404).json({ msg: "No Services Found" });
        }
        res.status(200).json(response);
    } catch (error) {
        next(error)
    }
};

module.exports = Services;
