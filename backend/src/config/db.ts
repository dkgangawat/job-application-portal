import mongoose from "mongoose";
import config from "./envConfig";

const db = async () => {
  try {
    await mongoose.connect(`${config.MONGODB_URI}/job-portal`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};


export default db;