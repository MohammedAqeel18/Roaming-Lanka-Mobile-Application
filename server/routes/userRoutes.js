import express from "express";
import { registerUser,loginUser,getUsers } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";


const  router = express.Router();

router.post("/register", registerUser);

router.get("/getUsers", getUsers);

router.post("/login", loginUser);

router.get("/profile", protect, async(req,res)=>{
    res.json(req.user)
})

export default router;