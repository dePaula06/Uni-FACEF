public class TestaSmartTV {

    public static void mais(String[] args) {

        //cria uma instância de SmartTV
        SmartTV s1 = new SmartTV("Philco", "Qled de 35 polegadas", 0);

        // s1.volume = 30; => variável privada necessita de get e set
        s1.setVolume(-30);
        s1.setVolume(120);
        s1.setVolume(50);

        System.out.println("Volume de s1"+ s1.getVolume());

        SmartTV s2 = new SmartTV("Samsung", "QLed de 70 polegadas", 30);
        System.out.println(s2.getVolume());
        System.out.println(s2.getMarca());
        System.out.println(s2.getModelo());
    }
}
