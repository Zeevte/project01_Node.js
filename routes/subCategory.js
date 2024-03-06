import express from 'express';
const route = express.Router();
import SubCategoriesControllers from '../controller/SubcategoriesControllers.js'; 

route.get("",  SubCategoriesControllers.get)
route.post("", SubCategoriesControllers.add)
route.put("", SubCategoriesControllers.update)
route.delete("", SubCategoriesControllers.delete)


export default route
