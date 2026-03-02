public class TestaJogoBasquete {

    public static void main(String[] args) {

        JogoBasquete jogo1 = new JogoBasquete("Franca", "Corinthians");
        jogo1.registrarPontos("casa", 15);
        jogo1.registrarPontos("visitante", 20);
        jogo1.proximoQuarto();
        System.out.println(jogo1.toString());
        jogo1.proximoQuarto();
        jogo1.proximoQuarto();
        jogo1.proximoQuarto();
        System.out.println(jogo1.toString());
    }

}
