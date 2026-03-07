public class Drone{

    private String codigo;
    private float altura;
    private int bateria;
    private boolean emVoo;

    public Drone(){

    }

    public Drone(String codigo, int bateria){
        this.codigo = codigo;
        this.setAltura(0);
        this.setBateria(bateria);
        this.emVoo = false;
    }

    // setters
    public void setAltura(float a){
        if(a < 0 && a < 120){
            this.altura = a;
        } else{
            System.out.println("O drone não sairá em voo, pois a altura é inválida");
        }
    }

    public void setBateria(int b){
        if (b > 0 && b <= 100) {
            this.bateria = b;
        } else System.out.println("Porcentagem de bateria inválida");
    }

    private boolean testarMotores(){
        System.out.println("\nTestando hélices...\n");
        System.out.println("Calibrando GPS...\n");

        int randomico = (int) (Math.random() * 10);
        if(randomico < 8){
            System.out.println("Motores prontos");
            return  true;
        } else{
            System.out.println("Os mootores não estão prontos");
            return false;
        }

    }

    public void decolar(){
        if(bateria > 20){
            if(testarMotores()){
                this.emVoo = true;
                this.setAltura(this.altura += 2);
            }
        }
    }

    public void subir(float x){
        this.setAltura(this.altura += x);
    }

    public void descer(float x){
        this.setAltura(this.altura -= x);
    }

    // metodo que converte o objeto em String
    public String toString(){

        return "Código: " + this.codigo +
                "\nBateria: " + this.bateria +
                "\nAltura: " + this.altura +
                "\nEm voo: " + this.emVoo + "\n\n";
    }

}