public class TermostatoSmart implements DispositivoLigavel, SensorTemperatura{

    public boolean status = false;
    public double temp;

    @Override
    public void ligar() {
        System.out.println("TermostatoSmart está sendo ligado...");
        status = true;
        System.out.println("TermostatosSmart ligado!");
    }

    @Override
    public void desligar() {
        System.out.println("TermostatoSmart está sendo desligado...");
        status = false;
        System.out.println("TermostatosSmart desligado!");
    }

    @Override
    public double lerTemperatura() {
        if (status) {
            temp = 18.5;
        } else {
            temp = 23.7;
        }
        return temp;
    }

}
