import java.util.ArrayList;

public class TestaVetorPolimorfico {

    public static void main(String[] args) {

        ArrayList<Desenvolvedor> vet = new ArrayList<Desenvolvedor>();

        Junior jr1 = new Junior("Pedro", "JavaScript", 4000, "João");
        Pleno pl1 = new Pleno("Jhon", "JavaScript", 7000, 5);
        Senior s1 = new Senior("Joaquim", "Python", 15000, 2000);
        Desenvolvedor ds1 = new Desenvolvedor("Rafael", "Java", 2000);

        vet.add(jr1);
        vet.add(pl1);
        vet.add(s1);
        vet.add(ds1);


        for (Desenvolvedor d : vet) {
            d.codar();

            System.out.println("Bônus: " + d.calcularBonus());

            System.out.println(d.toString());

            System.out.println("------------------------");
        }
    }
}