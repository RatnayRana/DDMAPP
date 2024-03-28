import mongoose from "mongoose";
import { DB_NAME } from "../constant/constant.js";

const connectDB = async () => {
    try {
        if (!process.env.mongodb_url) {
            throw new Error("MongoDB URL is not defined in the environment variables.");
        }

        const connectionInstance = await mongoose.connect(process.env.mongodb_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: DB_NAME // Specify the database name here
        });
        console.log(`MongoDB connected on the host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
