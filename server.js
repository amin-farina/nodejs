import express from 'express';
import config from './config.js';
import db from './db.js';
import apiRoutes from './Routes/index.js';
import encuestaDB from './Models/encuesta.js';
import cors from 'cors';


const app = express();
app.use(cors())
app.use(express.json());
app.use("/api", apiRoutes)

db.authenticate()
.then(() => {
    app.listen (3000);
    console.log("Server started on port " + config.SERVER_PORT)
})
.catch((err) => {
    console.log("Error starting server: " + err);
});
