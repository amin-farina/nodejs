import { DataTypes } from "sequelize";
import db from "../db.js";


const padronDB = db.define("padron", {
    "DOCUMENTO": {
        type: DataTypes.TEXT('tiny'),
        primaryKey: true,
    },
    "APELLIDO":{
        type: DataTypes.TEXT('tiny'),
    },
    "NOMBRE":{
        type: DataTypes.TEXT('tiny'),
    },
    "TIPODOC":{
        type: DataTypes.TEXT('tiny'),
    },
    "DOMIC":{
        type: DataTypes.TEXT('tiny'),
    },
    "SECCION":{
        type: DataTypes.DATE,
    },
    "TX_CLASE":{
        type: DataTypes.TEXT('tiny'),
    },
    "CIRCUITO":{
        type: DataTypes.DATE,
    },
    "MESA":{
        type: DataTypes.TEXT('tiny'),
    },
    "ORDEN":{
        type: DataTypes.TEXT('tiny'),
    },
    "CentrosVot":{
        type: DataTypes.TEXT('tiny'),
    },
    "Domicilio":{
        type: DataTypes.TEXT('tiny'),
    }
},
{
    tableName:"Transformacion",
    timestamps: false,
  })

export default padronDB;