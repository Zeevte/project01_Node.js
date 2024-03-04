// סכמה של ברכהimport mongoose from "mongoose";
const BlessingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "User Name"
    },
    urlBackground: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    categoriId: {
        type: Number,
        default: 0
    },
    subCategoriId: {
        type: Number,
        default: 0
    },
    Id:{
        type: Number,
        default: 0
    },
  
})

export default mongoose.model("blessingSchema", BlessingSchema);