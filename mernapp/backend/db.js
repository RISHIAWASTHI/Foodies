const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://rishi220202:Rishi12345@cluster0.e8j7gxi.mongodb.net/gofoodmern?retryWrites=true&w=majority'; // Customer 

module.exports = async function () {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected to MongoDB");

        const foodCollection = await mongoose.connection.db.collection("food_items");
        const data = await foodCollection.find({}).toArray();

        const categoryCollection = await mongoose.connection.db.collection("foodCategory");
        const Catdata = await categoryCollection.find({}).toArray();
        global.food_items=data;
        global.foodCategory=Catdata;
        return { data, Catdata };
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        throw err; // Propagate the error to the caller
    }
};


