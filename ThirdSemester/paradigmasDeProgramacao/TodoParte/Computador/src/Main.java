public class Main {

    public static void main(String[] args) {

        Computer pc = new Computer(
                1,
                "Dell",
                "Intel",
                "i7",
                3.5
        );

        System.out.println("Computador: " + pc.getMarca());
        System.out.println("Processador: " + pc.getProcessador().getModelo());

        // se o computador for apagado
        pc = null;

        // o processador também deixa de existir (não temos mais acesso)
    }
}