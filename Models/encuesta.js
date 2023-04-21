import { DataTypes   } from "sequelize";
import db from "../db.js";

const encuestaDB = db.define("encuesta", {
    "id": {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    "seleccion": {
        type: DataTypes.TEXT('tiny'),
    },
    "nombre":{
        type: DataTypes.TEXT('tiny'),
    },
    "partido":{
        type: DataTypes.TEXT('tiny'),
    },
    "dni":{
        type: DataTypes.TEXT('tiny'),
    }
},
{
    timestamps: false
})

export default encuestaDB;