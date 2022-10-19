const express = require('express');
const mongo = require('./connection');
const employeeRouter = require('./employeesRouter');
const productRouter = require('./productRouter');
const registerRouter = require('./registerRouter');
const auth = require("./modules/authModule");
const cors = require("cors");

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());

// to parse req.body, to send from client to express framework we are using this middleware

app.use(express.json());

mongo.connect();

app.use('/register', registerRouter);

app.use('/',auth.authenticateUser);

app.use('/employees', employeeRouter);
 
app.use('/product', productRouter);

app.listen(process.env.PORT || 3000);

// const PORT = process.env.PORT || 3000;

// app.listen( PORT, () => {
//     console.log("Our app is running")
// })

// CORS -> Cross Origin Resource Sharing