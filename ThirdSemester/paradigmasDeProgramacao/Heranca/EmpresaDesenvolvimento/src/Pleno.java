public class Pleno extends Desenvolvedor {

    private int projetosEntregues;

    public Pleno() {
        super(); // chama construtor da superclasse
    }

    public Pleno(String nome, String linguagem, float salarioBase, int projetosEntregues) {

        super(nome, linguagem, salarioBase);
        this.projetosEntregues = projetosEntregues;

    }

    public int getProjetosEntregues() {
        return projetosEntregues;
    }

    public void setProjetosEntregues(int projetosEntregues) {
        this.projetosEntregues = projetosEntregues;
    }

    @Override
    public String toString() {
        return "Junior{" +
                super.toString() +
                "projetosEntregues: " + projetosEntregues + "\'" +
                "}";
    }

    @Override
    public void codar(){
        System.out.println("Pleno desenvolvendo código e fazendo Code Review");
    }

    @Override
    public float calcularBonus() {

        return super.calcularBonus() + this.salarioBase * 0.15f;

    }
}
