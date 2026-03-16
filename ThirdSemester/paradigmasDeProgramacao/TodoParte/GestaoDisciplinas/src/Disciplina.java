import java.util.ArrayList;

    public class Disciplina {

        private int id;
        private String nome;
        private String professor;

        private ArrayList<Aluno> alunos;
        private ArrayList<Avaliacao> avaliacoes;

        public Disciplina() {
            alunos = new ArrayList<>();
            avaliacoes = new ArrayList<>();
        }

        public Disciplina(int id, String nome, String professor) {
            this.id = id;
            this.nome = nome;
            this.professor = professor;
            alunos = new ArrayList<>();
            avaliacoes = new ArrayList<>();
        }

        // AGREGACAO
        public void matricularAluno(Aluno a){
            alunos.add(a);
            System.out.println("Aluno matriculado com sucesso!");
        }

        // COMPOSICAO
        public void criarAvaliacao(int id, String nome){
            Avaliacao nova = new Avaliacao(id, nome);
            avaliacoes.add(nova);
            System.out.println("Avaliação criada com sucesso");
        }

        public ArrayList<Avaliacao> getAvaliacoes() {
            return avaliacoes;
        }

        @Override
        public String toString() {
            return "Disciplina{" +
                    "id=" + id +
                    ", \nnome='" + nome + '\'' +
                    ", \nprofessor='" + professor + '\'' +
                    ", \nalunos=" + alunos +
                    ", \navaliacoes=" + avaliacoes +
                    '}';
        }
    }