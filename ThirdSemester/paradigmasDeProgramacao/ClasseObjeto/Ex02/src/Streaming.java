public class Streaming{

    public String usuario, plano, ultimoFilmeAssistido;
    public float mensalidade;
    public boolean ativo;

    public Streaming(String usuario, String plano) {
        this.usuario = usuario;
        this.plano = plano;
        switch (plano) {
            case "Básico":
                this.mensalidade = 25.90f;
                break;

            case "Premium":
                this.mensalidade = 45.90f;
                break;

            case "Família":
                this.mensalidade = 60.90f;
                break;

            default:
                this.mensalidade = 0f;
                System.out.println("Plano inválido.");
        };
        this.ativo = true;
        this.ultimoFilmeAssistido = "";
    }

    public void assistirFilme(String nomeFilme){
        if(this.ativo){
            ultimoFilmeAssistido = nomeFilme;
            System.out.println("Assistindo: " + nomeFilme);
        } else{
            System.out.println("Conta inativa, é necessário pagar a fatura");
        }
    }

    public void cancelarAssinatura(){
        if(!this.ativo){
            System.out.println("Conta já inativada");
        } else{
            this.ativo = false;
        }
    }

    public String toString() {

        String status = this.ativo ? "Ativo" : "Suspenso";

        return "Usuário: " + this.usuario +
                "\nPlano: " + this.plano +
                "\nMensalidade: R$ " + this.mensalidade +
                "\nStatus: " + status +
                "\nÚltimo filme assistido: " + this.ultimoFilmeAssistido + "\n\n";
    }


}