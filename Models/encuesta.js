import { DataTypes   } from "sequelize";
import db from "../db.js";

const encuestaDB = db.define("encuesta", {
    "dni": {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    "seleccion": {
        type: DataTypes.TEXT('tiny'),
        defaultValue: null
    },
    "correo": {
        type: DataTypes.TEXT('tiny'),
        defaultValue: null
    },
    "telefono":{
        type: DataTypes.TEXT('tiny'),
        defaultValue: null
    }
},
{
    timestamps: false
})

export default encuestaDB;