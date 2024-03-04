// סכמה של משתמשים
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    userId: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
        default: "User Name"
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
    role: {
        type: String,
        required: true,
    },
    lastDate: {
        type: String,
        required: true,
    },
});
export default mongoose.model("users", UserSchema);