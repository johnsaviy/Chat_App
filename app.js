//External Imports
const express = require("express");
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const path = require("path");
const cookieParser = require("cookie-parser");
const colors = require('colors')

//Internal Imports
const {notFoundHandler, errorHandler} = require("./middlewares/commons/errorHandler")
const loginRouter = require("./router/loginRouter")
// const inboxRouter = require("./router/inboxRouter")
// const usersRouter = require("./router/usersRouter")





//App initialization
const app = express();
dotenv.config();

//Database Connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( ()=> console.log('Database connection succesful'.blue) )
.catch(err => console.log(err));




// Request parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Set View Engine
app.set("view engine", "ejs");

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Parse Cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

//Routing Setup

app.use("/", loginRouter);
// app.use("/users", usersRouter);
// app.use("/inbox", inboxRouter);










//Error Handling  

// 404 not found handler
app.use(notFoundHandler)


//default  errorhandler
app.use(errorHandler)






app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`.blue)
});