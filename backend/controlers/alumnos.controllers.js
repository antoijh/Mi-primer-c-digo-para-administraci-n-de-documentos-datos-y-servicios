import { TablaAlumnos } from "../models/alumnos.model.js";
TablaAlumnos.create({
    name:"Jesus",
    edad:25,
    calificacion: 10
},{
    name:"Jessy",
    edad:24,
    calificacion:9.9
},{
    name:"Antonio",
    edad: 19,
    calificacion:10
})

export const test= ()=>{
    console.log("se esta llamando al conrolador desde app")
}
