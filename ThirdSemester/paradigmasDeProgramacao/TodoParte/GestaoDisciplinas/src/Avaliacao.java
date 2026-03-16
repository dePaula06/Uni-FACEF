import java.util.ArrayList;

public class Avaliacao {

    private int id;
    private String nome;
    private ArrayList<Questao> questoes;

    public Avaliacao() {
        this.questoes = new ArrayList<>(); // aloca espaço na memória
    }

    public Avaliacao(int id, String nome) {
        this.id = id;
        this.nome = nome;
        this.questoes = new ArrayList<>();
    }

    public void adicionaQuestao(int num, String texto, float peso){
        Questao aux = new Questao(num, texto, peso);
        this.questoes.add(aux);
        System.out.println("Questão adicionado com sucesso");
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public ArrayList<Questao> getQuestoes() {
        return questoes;
    }

    @Override
    public String toString() {
        return "Avaliacao{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", questoes=" + questoes +
                '}';
    }
}
