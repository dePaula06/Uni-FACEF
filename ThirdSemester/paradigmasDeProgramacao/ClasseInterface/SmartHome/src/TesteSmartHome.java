public class TesteSmartHome {

    public static void main(String[] args) {


        System.out.println("=== TESTE TERMOSTATO ===");

        TermostatoSmart termostato = new TermostatoSmart();

        // Ler temperatura desligado
        System.out.println("Temperatura (desligado): " + termostato.lerTemperatura());

        // Ligar
        termostato.ligar();

        // Ler temperatura ligado
        System.out.println("Temperatura (ligado): " + termostato.lerTemperatura());

        // Desligar
        termostato.desligar();


        System.out.println("\n=== TESTE FECHADURA ===");

        FechaduraEletronica fechadura = new FechaduraEletronica();

        // Tentativa sem autenticar
        fechadura.ligar();

        // Senha errada
        fechadura.validarAcesso("1234");
        fechadura.ligar();

        // Senha correta
        fechadura.validarAcesso("senha");
        fechadura.ligar();

        // Trancar novamente
        fechadura.desligar();
    }
}