import express from 'express';
const route = express.Router();
import categoruController from '../controller/categoruController.js';

route.get("",  categoruController.get)
route.post("", categoruController.add)
route.put("", categoruController.update)
route.delete("", categoruController.delete)


export default route
