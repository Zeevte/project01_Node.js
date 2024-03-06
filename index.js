import express from "express";
import connectDb from "./mongoose.js";
import user from './routes/user.js';
import category from './routes/category.js';
import background from './routes/Background.js';
import subCategory from './routes/subCategory.js';
import CategoriesOfBackgrounds from './routes/categoriesOfBackgrounds.js'

import cors from 'cors';

connectDb();

const app = express()

app.use(cors());
app.use(express.json());
app.use('/user', user)
app.use('/category', category)
app.use('/background', background)
app.use('/categoriesOfBackgrounds', CategoriesOfBackgrounds)
app.use('/subCategory', subCategory)

const port = 3010


app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})