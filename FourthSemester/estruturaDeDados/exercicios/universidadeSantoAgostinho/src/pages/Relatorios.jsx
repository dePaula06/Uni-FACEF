import { useEffect, useState } from "react";

import {
    bubbleSort,
    selectionSort,
    mergeSort,
    quickSort,
    zerarContadores,
    obterContadores,
    compararNomeCrescente,
    compararNomeDescrescente,
    compararRaCrescente,
    compararRaDescrescente,
    compararIdCrescente,
    compararIdDescrescente,
    compararNomeCrescenteSituacao,
    compararRaCrescenteSituacao
} from "../alghoritms/sorting";

const API = "http://localhost:3001/api/alunos";

function Relatorios() {

    const [students, setStudents] = useState([]);

    const [criterio, setCriterio] = useState("nome");

    const [ordem, setOrdem] = useState("crescente");

    const [algoritmo, setAlgoritmo] = useState("bubble");

    const [somenteAprovados, setSomenteAprovados] =
        useState(false);

    const [alunosOrdenados, setAlunosOrdenados] =
        useState([]);

    const [tempoOrdenacao, setTempoOrdenacao] =
        useState(null);

    const [estatisticas, setEstatisticas] =
        useState(null);


    useEffect(() => {

        async function buscarAlunos() {

            try {

                const resposta = await fetch(API);

                const dados = await resposta.json();

                setStudents(dados);

            } catch (error) {

                console.error(
                    "Erro ao buscar alunos:",
                    error
                );

            }
        }

        buscarAlunos();

    }, []);


    function gerarRelatorio() {

        /*
         * Cria uma cópia do vetor.
         *
         * Assim não alteramos o vetor original
         * recebido da API.
         */
        let dados = [...students];


        /*
         * Filtra apenas aprovados,
         * caso essa opção esteja marcada.
         */
        if (somenteAprovados) {

            dados = dados.filter(
                (aluno) =>
                    aluno.resultado === "Aprovado"
            );
        }


        /*
         * Escolhe o comparador.
         */
        let comparador;


        if (criterio === "nome") {

            if (somenteAprovados) {

                comparador =
                    compararNomeCrescenteSituacao;

            } else if (ordem === "crescente") {

                comparador =
                    compararNomeCrescente;

            } else {

                comparador =
                    compararNomeDescrescente;
            }
        }


        if (criterio === "ra") {

            if (somenteAprovados) {

                comparador =
                    compararRaCrescenteSituacao;

            } else if (ordem === "crescente") {

                comparador =
                    compararRaCrescente;

            } else {

                comparador =
                    compararRaDescrescente;
            }
        }


        if (criterio === "id") {

            if (ordem === "crescente") {

                comparador =
                    compararIdCrescente;

            } else {

                comparador =
                    compararIdDescrescente;
            }
        }


        /*
         * Zera os contadores antes
         * de executar a ordenação.
         */
        zerarContadores();


        /*
         * INÍCIO DA MEDIÇÃO
         */
        const inicio = performance.now();


        let resultado;


        /*
         * Executa o algoritmo escolhido.
         */
        if (algoritmo === "bubble") {

            resultado =
                bubbleSort(
                    dados,
                    comparador
                );
        }


        if (algoritmo === "selection") {

            resultado =
                selectionSort(
                    dados,
                    comparador
                );
        }


        if (algoritmo === "merge") {

            resultado =
                mergeSort(
                    dados,
                    comparador
                );
        }


        if (algoritmo === "quick") {

            resultado =
                quickSort(
                    dados,
                    comparador
                );
        }


        /*
         * FIM DA MEDIÇÃO
         */
        const fim = performance.now();


        /*
         * Tempo gasto em milissegundos.
         */
        const tempo = fim - inicio;


        /*
         * Recupera as estatísticas.
         */
        const contadores =
            obterContadores();


        /*
         * Atualiza a tela.
         */
        setTempoOrdenacao(tempo);

        setEstatisticas(contadores);

        setAlunosOrdenados(resultado);
    }


    return (
        <main className="pagina">

            <div className="relatorio-card">

                <h1>
                    Relatórios de Alunos
                </h1>


                <div className="filtros">

                    <div className="campo">

                        <label>
                            Critério
                        </label>

                        <select
                            value={criterio}
                            onChange={(event) =>
                                setCriterio(
                                    event.target.value
                                )
                            }
                        >
                            <option value="nome">
                                Nome
                            </option>

                            <option value="ra">
                                RA
                            </option>

                            <option value="id">
                                ID
                            </option>
                        </select>

                    </div>


                    <div className="campo">

                        <label>
                            Ordem
                        </label>

                        <select
                            value={ordem}
                            onChange={(event) =>
                                setOrdem(
                                    event.target.value
                                )
                            }
                        >
                            <option value="crescente">
                                Crescente
                            </option>

                            <option value="decrescente">
                                Decrescente
                            </option>
                        </select>

                    </div>


                    <div className="campo">

                        <label>
                            Algoritmo
                        </label>

                        <select
                            value={algoritmo}
                            onChange={(event) =>
                                setAlgoritmo(
                                    event.target.value
                                )
                            }
                        >
                            <option value="bubble">
                                Bubble Sort
                            </option>

                            <option value="selection">
                                Selection Sort
                            </option>

                            <option value="merge">
                                Merge Sort
                            </option>

                            <option value="quick">
                                Quick Sort
                            </option>
                        </select>

                    </div>


                    <div className="checkbox">

                        <label>

                            <input
                                type="checkbox"
                                checked={
                                    somenteAprovados
                                }
                                onChange={(event) =>
                                    setSomenteAprovados(
                                        event.target.checked
                                    )
                                }
                            />

                            Apenas aprovados

                        </label>

                    </div>


                    <button
                        className="btn-cadastrar"
                        onClick={gerarRelatorio}
                    >
                        Gerar relatório
                    </button>

                </div>


                {tempoOrdenacao !== null && (

                    <div className="estatisticas">

                        <h3>
                            Desempenho da ordenação
                        </h3>


                        <div className="estatisticas-grid">

                            <div className="estatistica">

                                <span>
                                    Algoritmo
                                </span>

                                <strong>
                                    {algoritmo === "bubble"
                                        ? "Bubble Sort"
                                        : algoritmo === "selection"
                                            ? "Selection Sort"
                                            : algoritmo === "merge"
                                                ? "Merge Sort"
                                                : "Quick Sort"}
                                </strong>

                            </div>


                            <div className="estatistica">

                                <span>
                                    Tempo
                                </span>

                                <strong>
                                    {tempoOrdenacao.toFixed(4)} ms
                                </strong>

                            </div>


                            <div className="estatistica">

                                <span>
                                    Passagens
                                </span>

                                <strong>
                                    {estatisticas.passou}
                                </strong>

                            </div>


                            <div className="estatistica">

                                <span>
                                    Comparações
                                </span>

                                <strong>
                                    {estatisticas.comparou}
                                </strong>

                            </div>


                            <div className="estatistica">

                                <span>
                                    Trocas
                                </span>

                                <strong>
                                    {estatisticas.trocou}
                                </strong>

                            </div>

                        </div>

                    </div>

                )}


                {alunosOrdenados.length > 0 && (

                    <div className="tabela-container">

                        <table>

                            <thead>

                                <tr>

                                    <th>
                                        RA
                                    </th>

                                    <th>
                                        Nome
                                    </th>

                                    <th>
                                        Idade
                                    </th>

                                    <th>
                                        Sexo
                                    </th>

                                    <th>
                                        Nota 1
                                    </th>

                                    <th>
                                        Nota 2
                                    </th>

                                    <th>
                                        Média
                                    </th>

                                    <th>
                                        Resultado
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {alunosOrdenados.map(
                                    (aluno) => (

                                        <tr
                                            key={aluno.id}
                                        >

                                            <td>
                                                {aluno.ra}
                                            </td>

                                            <td>
                                                {aluno.nome}
                                            </td>

                                            <td>
                                                {aluno.idade}
                                            </td>

                                            <td>
                                                {aluno.sexo}
                                            </td>

                                            <td>
                                                {aluno.nota1}
                                            </td>

                                            <td>
                                                {aluno.nota2}
                                            </td>

                                            <td>
                                                {Number(
                                                    aluno.media
                                                ).toFixed(1)}
                                            </td>

                                            <td>
                                                {aluno.resultado}
                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </div>

        </main>
    );
}

export default Relatorios;