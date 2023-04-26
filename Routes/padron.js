import { Router } from "express";
import padronDB from "../Models/padron.js";

const padronRoutes = Router();

padronRoutes.get("/", async (req, res) => {
    const padron = await padronDB.findAll();
    res.json(padron);
});

padronRoutes.get("/:id", async (req, res) => {
    const padron = await padronDB.findByPk(req.params.DOCUMENTO);
    res.json(padron);
})

export default padronRoutes;