const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jvianad:Jean1047498312@vianademares.pnzw9u0.mongodb.net/Pet_Shop?retryWrites=true&w=majority",
(event) => {
    console.log("Conexion con mongoDB")
})
.catch((err) => console.log(err));

module.exports = mongoose;