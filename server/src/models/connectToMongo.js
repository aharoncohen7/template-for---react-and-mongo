const mongoose = require('mongoose');

require("dotenv").config()
const MONGO_URI = process.env.MONGO_URI
async function connectToMongo() {
    try {
        mongoose.connect(MONGO_URI)
        .then(res=>console.log("### DB - Connection ###"))
    } catch (error) {
console.log(error)
    }
}
module.exports = {connectToMongo};

