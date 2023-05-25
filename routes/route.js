import express from "express";
import { createUser, deleteUser, getSingleUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()


router.post("/create", createUser)
router.get("/getusers", getUsers)
router.get("/getsingle/:id", getSingleUser)
router.put("/update/:id", updateUser)
router.delete("/user/:id", deleteUser)



export default router;