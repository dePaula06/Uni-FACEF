public class Pix implements Pagamento{
    @java.lang.Override
    public void autorizar(double valor) {
        System.out.println("Gerando QRCode para a chave pix...");
        System.out.println("O pagamento no valor " + valor + "foi enviado instantaneamente");
    }

    @java.lang.Override
    public void exibirComprovante() {
        System.out.println("Comprovante disponível no App do Banco");
    }
}
