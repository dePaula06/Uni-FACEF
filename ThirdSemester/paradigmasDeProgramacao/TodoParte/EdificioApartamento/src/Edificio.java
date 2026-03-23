import java.util.ArrayList;

public class Edificio {

    private String nome;
    private String endereco;
    private ArrayList<Apartamento> apartamentos;

    public Edificio(String nome, String endereco) {
        this.nome = nome;
        this.endereco = endereco;
        this.apartamentos = new ArrayList<>();
    }

    // COMPOSIÇÃO: objeto é criado dentro da classe
    public void construirApartamento(int num, int andar) {
        apartamentos.add(new Apartamento(num, andar));
    }

    public void listarApartamentos() {
        for (Apartamento a : apartamentos) {
            System.out.println("Ap " + a.getNumero() + " - Andar " + a.getAndar());
        }
    }
}