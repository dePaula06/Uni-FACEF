import java.util.ArrayList;

public class TestaDesenvolvedor {

    public static void exibir(Desenvolvedor camaleao) {
        camaleao.codar();
        System.out.println(camaleao.toString() + "Bônus: " + camaleao.calcularBonus());
    }

    public static void main(String[] args){

        Junior jr1 = new Junior("Pedro", "JavaScript", 4000, "João");
        exibir(jr1);

        Pleno pl1 = new Pleno("Jhon", "JavaScript", 7000, 5);
        exibir(pl1);

        Senior s1 = new Senior("Joaquim", "Python", 15000, 2000);
        exibir(s1);

        ArrayList<Desenvolvedor> empresa = new ArrayList<Desenvolvedor>();
        empresa.add(new Junior());
        empresa.add(pl1);

    }

}
