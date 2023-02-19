const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017";

const connectToMongo = ()=>{
    mongoose.connect( mongoURI, ()=>{
        console.log(" Connected with Mongoo Successfully !");
    });
}

// hence this funciton is exported , so whenever this file is imported the followinf funciton would be promted ! 
module.exports = connectToMongo;