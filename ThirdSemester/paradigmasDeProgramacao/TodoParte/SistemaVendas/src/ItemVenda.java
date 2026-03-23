public class ItemVenda {

    private int id;
    private int quantidade;
    private Produto produto; // agregação

    public ItemVenda(int id, int quantidade, Produto produto) {
        this.id = id;
        this.quantidade = quantidade;
        this.produto = produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public double getSubtotal() {
        return quantidade * produto.getPreco();
    }
}