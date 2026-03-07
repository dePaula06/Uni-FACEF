public class TesteDrone {

    public static void main(String[] args){
        Drone dr1 = new Drone("2e45t", 50);
        System.out.println(dr1.toString());
        dr1.decolar();
        System.out.println(dr1.toString());
        dr1.subir(100);
        dr1.descer(50);
        System.out.println(dr1.toString());
    }

}
