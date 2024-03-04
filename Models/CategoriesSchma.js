// סכמה של קטגוריות
import mongoose from "mongoose";

const CategoriesSchema = mongoose.Schema({
    Id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
})

export default mongoose.model("categories", CategoriesSchema);