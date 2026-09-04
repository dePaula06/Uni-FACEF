import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

const PORT = 3001;


// Middlewares
app.use(cors());
app.use(express.json());


// Rotas
app.use("/api/alunos", studentRoutes);


// Rota inicial
app.get("/", (req, res) => {
    res.json({
        message: "API StudentSort funcionando!"
    });
});


// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});