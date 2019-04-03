const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


const items = require("./routes/api/items");


const app = express();

//body parser middleware
app.use(bodyParser.json() );

// DB Config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
    .connect(db)
    .then(()=> console.log("mongo connected") )
    .catch(e => console.log(e) );


//use routes
app.use("/api/items", items);


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`server started on port ${port}`) );