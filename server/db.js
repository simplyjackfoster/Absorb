const mongoose = require('mongoose');
//require("dotenv").config({ path: "server/.env" });
const uri = "mongodb+srv://Learner:rqu95eEicFQe4vTZ@cluster0.p8rbyhf.mongodb.net/?retryWrites=true&w=majority";
//console.log(uri);
mongoose.set('strictQuery', false);
const connectionToDB = async() => {
    try {
        
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
    }
};
module.exports = (connectionToDB);
