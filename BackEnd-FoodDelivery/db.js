const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://ragib:ragib@cluster1.lfwt3da.mongodb.net/goFoodmern?retryWrites=true&w=majority";

const mongodb = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();

    const foodCategory = await mongoose.connection.db.collection("foodCategory");
    const catData = await foodCategory.find({}).toArray();

    global.food_items = data;
    global.foodCategory = catData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongodb;
