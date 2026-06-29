import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

await connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Roaming Lanka Mobile App Backend is running successfully ):");
})

app.listen(5000,()=>{
    console.log("Server is running on port http://localhost:5000");
});