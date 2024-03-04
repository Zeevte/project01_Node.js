// סכמה של קטגוריות של רקעים
import mongoose from "mongoose";
import { BackgroundsSchema } from './BackgroundsSchma.js'



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
    Backgrounds: [BackgroundsSchema]


})

export default mongoose.model("categoriesOfBackgrounds", CategoriesOfBackgroundsSchema);