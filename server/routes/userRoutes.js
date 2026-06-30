import express from "express";
import { registerUser,loginUser,getUsers } from "../controllers/userController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";


const  router = express.Router();

router.post("/register", registerUser);

router.get("/getUsers", getUsers);

router.post("/login", loginUser);

router.get("/profile", protect, async(req,res)=>{
    res.json(req.user)
})

router.get("/admin-data", protect, adminOnly, (req,res)=>{
    res.json({message:"Welcome Admin"})
})

export default router;