public class JogoBasquete{

    public String nomeTimeCasa, nomeTimeVisitante;
    public int pontosCasa, pontosVisitantes, periodoQuarto;

    public JogoBasquete(String nomeTimeCasa, String nomeTimeVisitante){

        this.nomeTimeCasa = nomeTimeCasa;
        this.nomeTimeVisitante = nomeTimeVisitante;
        this.pontosCasa = 0;
        this.pontosVisitantes = 0;
        this.periodoQuarto = 1;

    }

    public void registrarPontos(String time, int tipo){
        if (time.equals("casa")) {
            this.pontosCasa += tipo;

        } else if (time.equals("visitante")) {
            this.pontosVisitantes += tipo;

        } else {
            System.out.println("Escolha: casa ou visitante");
        }
    }

    public void proximoQuarto(){
        if(this.periodoQuarto < 4){
            this.periodoQuarto += 1;
        } else{
            System.out.println("O jogo finalizou");
        }
    }

    public String toString(){
        return "Time A: " + this.pontosCasa + " x " + "Time B: " + this.pontosVisitantes
                + " - " + "Período: " + this.periodoQuarto;
    }

}