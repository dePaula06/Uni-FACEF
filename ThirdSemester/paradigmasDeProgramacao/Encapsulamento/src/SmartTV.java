public class SmartTV {

    private String marca, modelo;
    private int volume;

    public void setVolume(int volume){

        if(volume >=0 && volume <=100){

            this.volume = volume;

        } else System.out.println("Volume inválido");
    }

    public void setMarca(String marca){

        this.marca = marca;

    }

    public void setModelo(String modelo){

        this.modelo = modelo;

    }

    public int getVolume(){

        return this.volume;

    }

    public String getMarca(){

        return this.marca;

    }

    public String getModelo(){

        return this.modelo;

    }

    // metodo construtor
    public SmartTV(String marca, String modelo, int volume){
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setVolume(volume);
    }

}