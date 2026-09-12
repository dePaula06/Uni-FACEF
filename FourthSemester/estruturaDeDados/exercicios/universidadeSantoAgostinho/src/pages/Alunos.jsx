import { useEffect, useState } from "react";

const API = "http://localhost:3001/api/alunos";

function Alunos() {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        async function buscarAlunos() {

            const resposta = await fetch(API);

            const dados = await resposta.json();

            setStudents(dados);
        }

        buscarAlunos();

    }, []);

    return (
        <main className="relatorios">

            <div className="contador">
                {students.length} alunos cadastrados
            </div>

            <div className="tabela-container">

                <table>

                    <thead>

                        <tr>
                            <th>RA</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Nota 1</th>
                            <th>Nota 2</th>
                            <th>Média</th>
                            <th>Resultado</th>
                        </tr>

                    </thead>

                    <tbody>

                        {students.map((aluno) => (

                            <tr key={aluno.id}>

                                <td>{aluno.ra}</td>

                                <td>{aluno.nome}</td>

                                <td>{aluno.idade}</td>

                                <td>{aluno.sexo}</td>

                                <td>{aluno.nota1}</td>

                                <td>{aluno.nota2}</td>

                                <td>
                                    {aluno.media.toFixed(1)}
                                </td>

                                <td>
                                    {aluno.resultado}
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </main>
    );
}

export default Alunos;