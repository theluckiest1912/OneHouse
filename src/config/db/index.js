const { mongoose } = require("mongoose");

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://lhm19122004:PS7k1ccHoe3fdYJx@onehousedev.slwk2tw.mongodb.net/onehouse_dev') 
    console.log('Connection Successfully')   
  } catch (error) {
    console.log(error)
  }
}

module.exports = { connect }