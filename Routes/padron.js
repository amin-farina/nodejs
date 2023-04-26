import { Router } from "express";
import padronDB from "../Models/padron.js";

const padronRoutes = Router();

padronRoutes.get("/", async (req, res) => {
    const padron = await padronDB.findAll();
    res.json(padron);
});

padronRoutes.get("/:documento", async (req, res) => {
    const padron = await padronDB.findOne({ where: { DOCUMENTO: req.params.documento }});
    res.json(padron);
})

export default padronRoutes;