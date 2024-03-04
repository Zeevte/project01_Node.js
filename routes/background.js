import express from 'express';
const route = express.Router();
import backgroundController from '../controller/BackgroundsControllers.js';

route.get("",  backgroundController.get)
route.post("", backgroundController.add)
route.put("", backgroundController.update)
route.delete("", backgroundController.delete)


export default route
