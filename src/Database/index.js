const mongoose = require('mongoose');

mongoose.set("useNewUrParser", true);
mongoose.set("useUnifiendTopology", true);

mongoose.connect('mongodb+srv://admin:admin@cluster0.g2rwuyv.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("MongoDB online.");
}).catch(erro =>{
    console.log(erro);
});

db => mongoose.connection;

module.exports = db;