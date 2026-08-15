public class Checkout {

    public static void main(String[] args) {
        Pagamento camaleao;

        camaleao = new CartaoCredito();
        camaleao.autorizar(200);
        camaleao.exibirComprovante();

        camaleao = new Pix();
        camaleao.autorizar(5000);
        camaleao.exibirComprovante();
    }

}
