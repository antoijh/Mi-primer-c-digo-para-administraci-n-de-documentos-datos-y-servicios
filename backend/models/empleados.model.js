import{ Schema, model} from "mongoose";
import { stringify } from "querystring";
const EsquemaEmpleados=new Schema({
    name: String,
    edad: Number,
    sueldo: Number
})

export const ModeloEmpleados= new model("tabla empleados", EsquemaEmpleados)
export const ModeloDesempleados= new model("tabla de desmpleados",EsquemaEmpleados )