import java.time.LocalDateTime;
import java.util.ArrayList;

public class Sessao {

    private int id;
    private LocalDateTime horario;
    private int sala;

    private Filme filme; // agregação
    private ArrayList<Ingresso> ingressos; // composição

    public Sessao(int id, LocalDateTime horario, int sala) {
        this.id = id;
        this.horario = horario;
        this.sala = sala;
        this.ingressos = new ArrayList<>();
    }

    // AGREGAÇÃO
    public void vincularFilme(Filme f) {
        this.filme = f;
    }

    // COMPOSIÇÃO
    public void venderIngresso(int id, String assento, String tipo, float preco) {
        ingressos.add(new Ingresso(id, assento, tipo, preco));
    }

    @Override
    public String toString() {
        String s = "Filme: " + filme +
                "\nHorário: " + horario +
                "\nSala: " + sala +
                "\nIngressos:\n";

        for (Ingresso i : ingressos) {
            s += i + "\n";
        }

        return s;
    }
}