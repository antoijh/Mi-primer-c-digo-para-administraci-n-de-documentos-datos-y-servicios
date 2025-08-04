
import {ModeloEmpleados, ModeloDesempleados} from "../models/empleados.model.js";

ModeloEmpleados.create({
    name:"among us",
    edad:22,
    sueldo: 24000
},
{
name: "soi",
edad: 23,
sueldo: 4345
})

ModeloDesempleados.create({
    name: "juan",
    edad: 44,
    sueldo: 1
})

export const test= ()=>{
    console.log("funcion para llamar al controlador")
}

