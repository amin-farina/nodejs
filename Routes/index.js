import { Router } from "express";
import padronRoutes from "./padron.js";
import encuestaRoutes from "./encuesta.js";
import sorteoRoutes from "./sorteo.js";

const apiRoutes = Router();

apiRoutes.use("/padron", padronRoutes )
apiRoutes.use("/encuesta", encuestaRoutes )
apiRoutes.use("/sorteo", sorteoRoutes)

export default apiRoutes;   