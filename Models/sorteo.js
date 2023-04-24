import { DataTypes   } from "sequelize";
import db from "../db.js";

const sorteoDB = db.define("sorteo", {
    "id": {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    "correo": {
        type: DataTypes.TEXT('tiny'),
    },
    "telefono":{
        type: DataTypes.TEXT('tiny'),
    }
},
{
    timestamps: false
})

export default sorteoDB;