import java.util.ArrayList;

public class Venda {

    private Cliente cliente; // agregação
    private ArrayList<ItemVenda> itens; // composição

    public Venda(Cliente cliente) {
        this.cliente = cliente;
        this.itens = new ArrayList<>();
    }

    // COMPOSIÇÃO: cria ItemVenda dentro da classe
    public void adicionarItem(int id, int quantidade, Produto produto) {
        itens.add(new ItemVenda(id, quantidade, produto));
    }

    public double calcularTotal() {
        double total = 0;
        for (ItemVenda i : itens) {
            total += i.getSubtotal();
        }
        return total;
    }

    public void mostrarVenda() {
        System.out.println("Cliente: " + cliente.getNome());
        System.out.println("Itens:");

        for (ItemVenda i : itens) {
            System.out.println(
                    i.getProduto().getNome() +
                            " | Qtd: " + i.getQuantidade() +
                            " | Subtotal: " + i.getSubtotal()
            );
        }

        System.out.println("Total: R$ " + calcularTotal());
    }
}