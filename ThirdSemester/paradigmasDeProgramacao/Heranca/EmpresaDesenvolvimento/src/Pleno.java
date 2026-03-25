public class Pleno extends Desenvolvedor {

    private int projetosEntregues;

    public Pleno(){
        super(); // chama construtor da superclasse
    }

    public Pleno(String nome, String linguagem, float salarioBase, int projetosEntregues){

        super(nome, linguagem, salarioBase);
        this.projetosEntregues = projetosEntregues;

    }

}
