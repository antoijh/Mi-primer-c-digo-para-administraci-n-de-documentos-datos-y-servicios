// importaciones de librerias
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { test } from "./backend/controlers/alumnos.controllers.js";

dotenv.config();//acceder la configuracion del .env


//conectar una base de datos
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("conecto la base de datos")
})
.catch((error) =>{
    console.log("no jalo la base ptm", error)
})

const app= express();//creando un servidor local
app.use(cors()); //seguridad en el servidor
app.listen(4000, ()=>{
    console.log("se escucha el servidor")
})//verificando funcion del servidor

test();


