const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");


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

//serve static files in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build') );
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html') );
    });
}

//use routes
app.use("/api/items", items);


const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`server started on port ${port}`) );