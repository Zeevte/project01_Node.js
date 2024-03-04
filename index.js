import express from "express";
import connectDb from "./mongoose.js";
import user from './routes/user.js';
import category from './routes/category.js';
import background from './routes/Background.js';
import CategoriesOfBackgrounds from './routes/categoriesOfBackgrounds.js'

import cors from 'cors';

//its connected to the mongo db
connectDb();

const app = express()

//aaaaaaaa
app.use(cors());
app.use(express.json());
app.use('/user', user)
app.use('/category', category)
app.use('/background', background)
app.use('/categoriesOfBackgrounds', CategoriesOfBackgrounds)

//bbbbb
const port = 3010


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})