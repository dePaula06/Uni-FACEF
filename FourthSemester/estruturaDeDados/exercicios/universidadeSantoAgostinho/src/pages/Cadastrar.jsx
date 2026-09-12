import { useState } from "react";

const API = "http://localhost:3001/api/alunos";

function Cadastrar({ navegar }) {

    const [formulario, setFormulario] = useState({
        nome: "",
        ra: "",
        idade: "",
        sexo: "",
        nota1: "",
        nota2: ""
    });

    const [mensagem, setMensagem] = useState("");

    function alterarCampo(event) {

        const { name, value } = event.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    async function cadastrarAluno(event) {

        event.preventDefault();

        try {

            const resposta = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formulario)
            });

            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar aluno.");
            }

            const aluno = await resposta.json();

            setMensagem(
                `Aluno ${aluno.nome} cadastrado com sucesso!`
            );

            setFormulario({
                nome: "",
                ra: "",
                idade: "",
                sexo: "",
                nota1: "",
                nota2: ""
            });

        } catch (error) {

            setMensagem("Não foi possível cadastrar o aluno.");

            console.error(error);
        }
    }

    return (
        <main className="pagina">

            <form
                className="form-card"
                onSubmit={cadastrarAluno}
            >

                <h1>Cadastrar Aluno</h1>

                <div className="campo campo-nome">
                    <label>Nome</label>

                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite o nome..."
                        value={formulario.nome}
                        onChange={alterarCampo}
                        required
                    />
                </div>

                <div className="linha">

                    <div className="campo">
                        <label>RA</label>

                        <input
                            type="text"
                            name="ra"
                            placeholder="Digite o RA..."
                            value={formulario.ra}
                            onChange={alterarCampo}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Idade</label>

                        <input
                            type="number"
                            name="idade"
                            placeholder="Digite a idade..."
                            value={formulario.idade}
                            onChange={alterarCampo}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Sexo</label>

                        <select
                            name="sexo"
                            value={formulario.sexo}
                            onChange={alterarCampo}
                            required
                        >
                            <option value="">
                                Escolha o sexo
                            </option>

                            <option value="Feminino">
                                Feminino
                            </option>

                            <option value="Masculino">
                                Masculino
                            </option>
                        </select>
                    </div>

                </div>

                <div className="linha">

                    <div className="campo">
                        <label>Nota 1</label>

                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="10"
                            name="nota1"
                            placeholder="Digite a nota 1..."
                            value={formulario.nota1}
                            onChange={alterarCampo}
                            required
                        />
                    </div>

                    <div className="campo">
                        <label>Nota 2</label>

                        <input
                            type="number"
                            step="0.1"
                            min="0"
                            max="10"
                            name="nota2"
                            placeholder="Digite a nota 2..."
                            value={formulario.nota2}
                            onChange={alterarCampo}
                            required
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="btn-cadastrar"
                >
                    Cadastrar
                </button>

                {mensagem && (
                    <p className="mensagem">
                        {mensagem}
                    </p>
                )}

            </form>

        </main>
    );
}

export default Cadastrar;