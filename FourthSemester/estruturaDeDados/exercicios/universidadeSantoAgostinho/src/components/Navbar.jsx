function Navbar({ paginaAtual, navegar }) {

    return (
        <nav className="navbar">

            <div
                className="logo"
                onClick={() => navegar("home")}
            >
                <div className="logo-icon">
                    ♜
                </div>

                <div>
                    <strong>Santo</strong>
                    <strong>Agostinho</strong>
                </div>
            </div>

            <div className="menu">

                <button
                    className={paginaAtual === "home" ? "ativo" : ""}
                    onClick={() => navegar("home")}
                >
                    Home
                </button>

                <button
                    className={paginaAtual === "alunos" ? "ativo" : ""}
                    onClick={() => navegar("alunos")}
                >
                    Alunos
                </button>

                <button
                    className={paginaAtual === "cadastrar" ? "ativo" : ""}
                    onClick={() => navegar("cadastrar")}
                >
                    Cadastrar
                </button>

                <button
                    className={paginaAtual === "relatorios" ? "ativo" : ""}
                    onClick={() => navegar("relatorios")}
                >
                    Relatórios
                </button>

            </div>

        </nav>
    );
}

export default Navbar;