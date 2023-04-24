import { Router } from "express";
import sorteoDB from "../Models/sorteo.js";

const sorteoRoutes = Router();

sorteoRoutes.get("/", async (req, res) => {
    const sorteo = await sorteoDB.findAll();
    res.json(sorteo);
});

sorteoRoutes.get("/:id", async (req, res) => {
    const sorteo = await sorteoDB.findByPk(req.params.id);
    res.json(sorteo);
})

sorteoRoutes.post("/create", async (req, res) => {
    try{
        const { correo, telefono } = req.body; // Asegúrate de obtener correctamente los valores
        const nuevaSorteo = await sorteoDB.create({ correo, telefono }); // Crea una nueva instancia de sorteo con los valores recibidos
        res.status(201).json(nuevaSorteo);
    }catch (error){
        console.error(error);
        res.status(500).json(error);
    }    
});

sorteoRoutes.put("/:id", async (req, res) => {
    const sorteo = await sorteoDB.update(req.body, {
        where: { id: req.params.id }
    });
    res.json(sorteo);
});

sorteoRoutes.delete("/:id", async (req, res) => {
    await sorteoDB.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: "sorteo eliminada" });
});

export default sorteoRoutes;