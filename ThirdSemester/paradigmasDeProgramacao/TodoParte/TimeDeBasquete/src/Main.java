public class Main {

    public static void main(String[] args) {

        Atleta atleta = new Atleta(1, "João", "Armador");

        Time time = new Time(1, "Franca", "Técnico X");
        time.contratarAtleta(atleta);

        System.out.println(time.toString());

        // anulando o time
        time = null;

        // atleta continua existindo
        System.out.println("Atleta ainda existe: " + atleta.getNome());
    }
}