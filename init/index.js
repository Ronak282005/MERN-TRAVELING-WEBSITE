const mongoose= require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb+srv://ronakcoder340:ronsa12345@cluster0.jy89n.mongodb.net/wandelust';

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner: "6641efa0e53c618f9393fc84" }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
