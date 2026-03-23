public class Main {

    public static void main(String[] args) {

        Edificio edificio = new Edificio("Residencial Sol", "Rua A");

        edificio.construirApartamento(101, 1);
        edificio.construirApartamento(202, 2);
        edificio.construirApartamento(303, 3);

        edificio.listarApartamentos();

        // se o edifício for apagado
        edificio = null;

        // os apartamentos também deixam de existir no sistema
    }
}