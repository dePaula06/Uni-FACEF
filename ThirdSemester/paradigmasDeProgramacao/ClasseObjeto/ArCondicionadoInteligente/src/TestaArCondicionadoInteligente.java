public class TestaArCondicionadoInteligente {

    public static void main(String[] args){

        ArCondicionadoInteligente ar1 = new ArCondicionadoInteligente("LGGG","Ultra v3",0);
        System.out.println(ar1);
        ar1.ativarModoTurbo();
        System.out.println(ar1);
    }

}