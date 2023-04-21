import { Router } from "express";
import padronRoutes from "./padron.js";
import encuestaRoutes from "./encuesta.js";

const apiRoutes = Router();

apiRoutes.use("/padron", padronRoutes )
apiRoutes.use("/encuesta", encuestaRoutes )

export default apiRoutes;   