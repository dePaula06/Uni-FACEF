public class FechaduraEletronica implements Autenticavel, DispositivoLigavel {

    private boolean acessoPermitido = false;
    private boolean aberta = false;

    @Override
    public void validarAcesso(String senha) {
        if (senha.equals("senha")) {
            acessoPermitido = true;
            System.out.println("Acesso permitido!");
        } else {
            acessoPermitido = false;
            System.out.println("Acesso negado!");
        }
    }

    @Override
    public void ligar() {
        if (acessoPermitido) {
            aberta = true;
            System.out.println("Fechadura destrancada!");
        } else {
            System.out.println("Acesso não autorizado.");
        }
    }

    @Override
    public void desligar() {
        aberta = false;
        System.out.println("Fechadura trancada!");
    }
}