const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://tanveer:tanveer%40795@cluster0.xi48jnz.mongodb.net/E-Shop"
// const mongoURI = "mongodb+srv://tanveer:tanveer%40795@cluster0.xi48jnz.mongodb.net/"
const connectToMongo = () => {
	mongoose.connect(mongoURI, () => {
		console.log("Connected to Mongo Successfully");
	})
}

module.exports = connectToMongo;