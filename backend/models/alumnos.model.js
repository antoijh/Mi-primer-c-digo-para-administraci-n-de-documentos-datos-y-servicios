import { model, Schema } from "mongoose";

//crear un estructura para una tabla
const EsquemaAlumnos= new Schema({
    name:String,
    edad:Number,
    calificacion:Number
})

//creacion de una tabla
export const TablaAlumnos= new model("Alumnos", EsquemaAlumnos)