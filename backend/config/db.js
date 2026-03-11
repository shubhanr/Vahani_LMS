import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI is not set. Starting server without database connection.");
    return;
  }
  try {
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectDB;
