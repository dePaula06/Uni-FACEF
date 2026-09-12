import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import Cadastrar from "./pages/Cadastrar";
import Relatorios from "./pages/Relatorios";

function App() {

    const [pagina, setPagina] = useState("home");

    function navegar(paginaSelecionada) {
        setPagina(paginaSelecionada);
    }

    return (
        <>
            <Navbar
                paginaAtual={pagina}
                navegar={navegar}
            />

            {pagina === "home" && (
                <Home navegar={navegar} />
            )}

            {pagina === "alunos" && (
                <Alunos />
            )}

            {pagina === "cadastrar" && (
                <Cadastrar navegar={navegar} />
            )}

            {pagina === "relatorios" && (
                <Relatorios />
            )}
        </>
    );
}

export default App;