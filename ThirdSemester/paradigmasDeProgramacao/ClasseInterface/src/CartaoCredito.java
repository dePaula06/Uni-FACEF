public class CartaoCredito implements Pagamento {


    @java.lang.Override
    public void autorizar(double valor) {
        System.out.println("Verificando o limite do cartão");
        System.out.println("Pagamento no valor " + valor + " foi autorizado");
    }

    @java.lang.Override
    public void exibirComprovante() {
        System.out.println("Comprovante foi enviado para o seu e-mail");
    }
}
