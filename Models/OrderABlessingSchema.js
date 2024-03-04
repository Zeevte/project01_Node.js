// סכמה של הזמנת ברכה
import mongoose from "mongoose";

const OrderABlessingSchema = mongoose.Schema({
    Id:{
        type: Number,
        default: 0
    },
    phone:{
        type:Number,
        required: true,
    },
    Topic:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    dueDate: {
        type: String,
        required: true,
    },
    Remarks: {
        type: String,
    },
    do:{
        type:Boolean,
        required: true,
    }
})

export default mongoose.model("orderABlessing", OrderABlessingSchema);