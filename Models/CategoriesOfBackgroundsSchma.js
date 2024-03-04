// סכמה של קטגוריות של רקעים
import mongoose from "mongoose";

const CategoriesOfBackgroundsSchema = mongoose.Schema({
    Id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
        default: "User Name"
    },
    BackgroundId: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("categoriesOfBackgrounds", CategoriesOfBackgroundsSchema);