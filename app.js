import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import { error } from "console";
import e from "express";
import{test} from "./backend/controllers/empleados.controles.js"

dotenv.config();
mongoose.connect(process.env.urlbd)

.then(()=> {
    console.log("funciono")
})
.catch((error)=> {
    console.log("fallo", e)
})

const app= express();
app.use(cors())
app.listen(4000, ()=> {
    console.log("se escucha el servidor")
})

test()

