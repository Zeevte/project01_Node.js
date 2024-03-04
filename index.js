import  express  from "express";
import connectDb from "./mongoose";

connectDb();
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})