public class TestaStreaming {

    public static void main(String[] args) {

        Streaming obj1 = new Streaming("Pedro", "Premium");
        System.out.println(obj1.toString());
        obj1.assistirFilme("Creed");
        System.out.println(obj1.toString());
        obj1.cancelarAssinatura();
        System.out.println(obj1.toString());
    }
}
