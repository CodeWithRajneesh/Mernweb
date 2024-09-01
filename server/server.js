
require("dotenv").config();
const cors = require("cors")
const express = require("express");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router")


// lets tackle cors

const corsOption = {
    origin: "http://localhost:5173",
    methods: "GET, PUT , POST , PATCH , DELETE , HEAD",
    Credentials: true,
}

app.use(cors(corsOption))

app.use(express.json())

// This line of code adds express middleware that parses incoming request bodies with Json payloads. It's iportant to place this before any routes that need to handle JSON dta in the request body . This middleware is responsible for the parsing JSON data requests, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.



app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use("/api/data", serviceRoute);

app.use("/api/admin", adminRoute)





// app.get("/", (req, res) => {
//     console.log("GET / request received");
//     res.status(200).send('Welcome to the world\'s best Node.js practice');
// });

// app.get("/register", (req, res) => {
//     console.log("GET /register request received");
//     res.status(200).send('Welcome to the Registration Part');
// });

// app.use((req, res) => {
//     console.log("Catch-all route for undefined routes");
//     res.status(404).send('Page not found');
// });


app.use(errorMiddleware);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port:${PORT}`);
    });
});


// nodemon use for( not run again an again npm run) it's load only one time run