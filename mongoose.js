import mongoose from "mongoose";

const uri =
    "mongodb+srv://7121093:MpLMV7O87O6cElAF@project01.xxts48m.mongodb.net/";

const connectDb = async () => {
    await mongoose.connect(uri);
};
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Database connected');
})
export default connectDb;