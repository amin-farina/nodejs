import { DataTypes   } from "sequelize";
import db from "../db.js";

const encuestaDB = db.define("encuesta", {
    "dni": {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    "seleccion": {
        type: DataTypes.TEXT('tiny'),
        defaultValue: "No Participo"
    },
    "correo": {
        type: DataTypes.TEXT('tiny'),
        defaultValue: "No Participo"
    },
    "telefono":{
        type: DataTypes.TEXT('tiny'),
        defaultValue: "No Participo"
    }
},
{
    timestamps: false
})

export default encuestaDB;