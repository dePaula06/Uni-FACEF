public class Conta{

    public int numeroConta, agencia;
    public String nomeCliente;
    public float saldo;
    public boolean status;

    public Conta(int numeroConta, int agencia, String nomeCliente){
        this.numeroConta = numeroConta;
        this.agencia = agencia;
        this.nomeCliente = nomeCliente;
        this.saldo = 0;
        this.status = true;
    }

    public String toString(){
        return " Número da conta: " + this.numeroConta +
                " Agência: " + this.agencia +
                " Nome cliente: " + this.nomeCliente +
                " Saldo: " + this.saldo +
                " Status: " + this.status;
    }

    // Metodo de deposito
    public void depositar(float valor){
        if(this.status){
            this.saldo += valor;
        } else{
            System.out.println("Não foi possível adicionar o valor, a conta está desativada");
        }
    }
    
    // Metodo de saque
    public void sacar(float saque){
        if(!this.status){
            System.out.println("Conta inativa");
        } else if (this.saldo < saque) {
            System.out.println("Saldo insuficiente");
        } else{
            this.saldo -= saque;
        }
    }

    // Metodo para desativar a conta
    public void encerrarConta(){
        if(!this.status){
            System.out.println("Conta já encerrada");
        } else if (this.saldo > 0) {
            System.out.println("Você ainda tem valor em conta, saque-o antes de encerrar a conta");
        } else{
            this.status = false;
        }
    }

}