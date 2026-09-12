import express from "express";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/alunos", studentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API StudentSort funcionando!"
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});