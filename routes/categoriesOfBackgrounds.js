import express from 'express';
const route = express.Router();
import CategoriesOfBackgroundsController from '../controller/CategoriesOfBackgroundsController.js';

route.get("",  CategoriesOfBackgroundsController.get)
route.post("", CategoriesOfBackgroundsController.add)
route.put("", CategoriesOfBackgroundsController.update)
route.delete("", CategoriesOfBackgroundsController.delete)


export default route
