import { DataTypes } from "sequelize";
import db from "../db.js";


const padronDB = db.define("padron", {
    "NU_MATRICULA": {
        type: DataTypes.DOUBLE,
        primaryKey: true,
    },
    "TX_GENERO": {
        type: DataTypes.TEXT('tiny'),
    },
    "TX_APELLIDO":{
        type: DataTypes.TEXT('tiny'),
    },
    "TX_NOMBRE":{
        type: DataTypes.TEXT('tiny'),
    },
    "TX_TIPO_EJEMPLAR":{
        type: DataTypes.TEXT('tiny'),
    },
    "TX_CLASE":{
        type: DataTypes.TEXT('tiny'),
    },
    "FC_FECHA_NACIMIENTO":{
        type: DataTypes.DATE,
    },
    "TX_DOMICILIO":{
        type: DataTypes.TEXT('tiny'),
    },
    "FC_FECHA_EJEMPLAR":{
        type: DataTypes.DATE,
    },
    "TX_PROFESION":{
        type: DataTypes.TEXT('tiny'),
    },
    "TX_SECC_NUMERO":{
        type: DataTypes.TEXT('tiny'),
    },
    "TX_CIRC_NUMERO":{
        type: DataTypes.TEXT('tiny'),
    },
},
{
    tableName:"Transformacion",
    timestamps: false,
  })

export default padronDB;