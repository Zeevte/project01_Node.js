import express from 'express';
const route = express.Router();
import UsersControllers from '../controller/userController.js';

route.post("/login",  UsersControllers.login)
route.post("/sighn", UsersControllers.add)


export default route
