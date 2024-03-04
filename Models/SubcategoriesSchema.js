// סכמה של תת קטגוריות
import mongoose from "mongoose";

const SubcategoriesSchema = mongoose.Schema({
    categoriId: {
        type: Number,
        default: 0
    },
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

export default SubcategoriesSchema//mongoose.model("subcategories", SubcategoriesSchema);