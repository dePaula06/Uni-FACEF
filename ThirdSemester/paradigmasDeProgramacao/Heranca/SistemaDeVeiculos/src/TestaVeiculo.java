public class TestaVeiculo {

    public static void exibir(Veiculo camaleao) {
        camaleao.mover();
        camaleao.abastecer();
    }

    public static void main(String[] args) {

        Aviao aviao = new Aviao("Airbong", "37890-VMS", 300, 1000);
        exibir(aviao);

        CarroEletrico carro = new CarroEletrico("Tesla", "Tesla LM01", 150, 75);
        exibir(carro);
    }

}
