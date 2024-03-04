// סכמה של קטגוריות
import mongoose from "mongoose";
import SubcategoriesSchema from './SubcategoriesSchema.js'

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
     ,Subcategories:[SubcategoriesSchema]
})

export default mongoose.model("categories", CategoriesSchema);