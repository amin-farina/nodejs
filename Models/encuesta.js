import { DataTypes   } from "sequelize";
import db from "../db.js";

const encuestaDB = db.define("encuesta", {
    "dni": {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    "seleccion": {
        type: DataTypes.STRING(255),
        defaultValue: 'No Participo'
    },
    "correo": {
        type: DataTypes.STRING(255),
        defaultValue: 'No Participo'
    },
    "telefono":{
        type: DataTypes.STRING(255),
        defaultValue: 'No Participo'
    }
},
{
    timestamps: false
})

export default encuestaDB;