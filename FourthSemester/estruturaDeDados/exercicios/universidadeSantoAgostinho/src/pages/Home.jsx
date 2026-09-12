function Home({ navegar }) {

    return (
        <main className="home">

            <div className="home-content">

                <h1>
                    Universidade
                    <br />
                    Santo Agostinho
                </h1>

                <p>
                    Gerencie os alunos da universidade
                    de forma simples, organizada e eficiente.
                </p>

                <button
                    className="btn-principal"
                    onClick={() => navegar("cadastrar")}
                >
                    Cadastrar aluno
                </button>

            </div>

        </main>
    );
}

export default Home;