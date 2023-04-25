import { Router } from "express";
import encuestaDB from "../Models/encuesta.js";

const encuestaRoutes = Router();

encuestaRoutes.get("/", async (req, res) => {
    const encuesta = await encuestaDB.findAll();
    res.json(encuesta);
});

encuestaRoutes.get("/:dni", async (req, res) => {
    const encuesta = await encuestaDB.findByPk(req.params.dni);
    res.json(encuesta);
})

encuestaRoutes.post("/create", async (req, res) => {
    try{
        const { seleccion, dni } = req.body; // Asegúrate de obtener correctamente los valores
        const nuevaEncuesta = await encuestaDB.create({ seleccion, dni }); // Crea una nueva instancia de Encuesta con los valores recibidos
        res.status(201).json(nuevaEncuesta);
    }catch (error){
        console.error(error);
        res.status(500).json(error);
    }    
});

encuestaRoutes.put("/:id", async (req, res) => {
    const encuesta = await encuestaDB.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(encuesta);
});

encuestaRoutes.delete("/:id", async (req, res) => {
    await encuestaDB.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: "Encuesta eliminada" });
});

export default encuestaRoutes;