// סכמה של רקע
import mongoose from "mongoose";

const BackgroundsSchema = mongoose.Schema({
    Id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
        default: "User Name"
    },
    categoriId: {
        type: Number,
        default: 0
    },
    url:{
        type: String,
        required: true,
    }
})

export default mongoose.model("backgroundsSchema", BackgroundsSchema);