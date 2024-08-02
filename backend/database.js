import mongoose from "mongoose";


const mongodb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017', { dbName: "Ecommerce" });
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}



export default mongodb;