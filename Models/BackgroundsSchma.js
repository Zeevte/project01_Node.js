// סכמה של רקע
import mongoose from "mongoose";

export const BackgroundsSchema = mongoose.Schema({
    
    Id: {
        type: Number,
        default: 0
    },
    name: {
        type: String,
        required: true,
        
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

export default mongoose.model("backgrounds", BackgroundsSchema);