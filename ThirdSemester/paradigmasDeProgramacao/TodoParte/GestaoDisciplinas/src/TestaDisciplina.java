public class TestaDisciplina {

    public static void main(String[] args) {

        // 1. Instanciar 2 alunos (independentes)
        Aluno a1 = new Aluno(1, 123, "Pedro", "ADS");
        Aluno a2 = new Aluno(2, 456, "Maria", "ADS");

        // 2. Instanciar uma disciplina
        Disciplina d1 = new Disciplina(1, "Programação Orientada a Objetos", "Carlos");

        // 3. Agregação - matricular alunos na disciplina
        d1.matricularAluno(a1);
        d1.matricularAluno(a2);

        // 4. Composição - criar avaliação dentro da disciplina
        d1.criarAvaliacao(1, "Prova Semestral");

        // 5. Composição aninhada - adicionar questões na avaliação criada
        // (pegamos a primeira avaliação criada)
        Avaliacao av = d1.getAvaliacoes().get(0);

        av.adicionaQuestao(1, "O que é encapsulamento?", 2.0f);
        av.adicionaQuestao(2, "Explique herança em Java.", 3.0f);
        av.adicionaQuestao(3, "Qual a diferença entre classe e objeto?", 5.0f);

        // 6. Imprimir toda a estrutura
        System.out.println(d1.toString());
    }
}