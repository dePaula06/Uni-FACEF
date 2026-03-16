public class Aluno{

    private int id, ra;
    private String nome, curso;

    public Aluno() {
    }

    public Aluno(int id, int ra, String nome, String curso) {
        this.id = id;
        this.ra = ra;
        this.nome = nome;
        this.curso = curso;
    }

    public int getId() {
        return id;
    }

    public int getRa() {
        return ra;
    }

    public String getNome() {
        return nome;
    }

    public String getCurso() {
        return curso;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setRa(int ra) {
        this.ra = ra;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id=" + id +
                ", ra=" + ra +
                ", nome='" + nome + '\'' +
                ", curso='" + curso + '\'' +
                '}';
    }
}