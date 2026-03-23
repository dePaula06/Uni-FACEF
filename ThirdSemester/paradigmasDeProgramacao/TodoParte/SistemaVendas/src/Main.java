public class Main {

    public static void main(String[] args) {

        Produto p1 = new Produto(1, "Arroz", 25.0);
        Produto p2 = new Produto(2, "Feijão", 10.0);

        Cliente c = new Cliente(1, "João");

        Venda venda = new Venda(c);

        venda.adicionarItem(1, 2, p1);
        venda.adicionarItem(2, 3, p2);

        venda.mostrarVenda();
    }
}