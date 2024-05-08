import express from "express"
import { User } from "../models/userModel.js";
import { getAllUser, register, getByid } from "../controllers/userController.js";

const router = express.Router()




// Getting  users api
router.get("/all", getAllUser)


// creating users api (browser only do get request not post)
router.post("/new", register)


router.get("/userid/:id", getByid)

export default router