import students from "../data/student.js"

export function getStudents(req, res) {
    res.status(200).json(students)
}

export function createStudent(req, res) {

    const {
        nome,
        ra,
        idade,
        sexo,
        nota1,
        nota2
    } = req.body

    const media = (Number(nota1) + Number(nota2)) / 2;

    const resultado = media >= 6
    ? "Aprovado"
    : "Reporvado";

    const newStudent = {
        id: Date.now(),
        nome,
        ra,
        idade: Number(idade),
        sexo,
        nota1: Number(nota1),
        nota2: Number(nota2),
        media,
        resultado
        };

        students.push(newStudent);

        res.status(201).json(newStudent);
}