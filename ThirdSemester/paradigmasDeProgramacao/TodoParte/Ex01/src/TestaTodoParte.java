import java.util.Date;

public class TestaTodoParte {

    public static void main(String[] args){

        // cria um objeto da classe Cliente independente
        Cliente cl1 = new Cliente();
        Cliente cl2 = new Cliente(1, "Fulano", "8760", "Rua Argentina");

        // cria o objeto todo
        Pedido pd1 = new Pedido();
        Pedido pd2 = new Pedido(1, new Date(), cl2);

        // verificando objetos
        System.out.println(cl1.toString());
        System.out.println(cl2.toString());
        System.out.println(pd1.toString());
        System.out.println(pd2.toString());
    }

}
