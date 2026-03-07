public class ArCondicionadoInteligente {

    private String marca, modelo;
    private int temperatura;
    private boolean ligado;

    public ArCondicionadoInteligente(){

    }

    public ArCondicionadoInteligente(String marca, String modelo, int temperatura){
        this.setMarca(marca);
        this.setModelo(modelo);
        this.setTemperatura(temperatura);
        this.setLigado();
    }

    // metodos Setters
    public void setMarca(String m){
        if(m.length() >= 3){
            this.marca = m;
        } else System.out.println("A marca deve ter mais do que 3 caracteres");
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }

    public void setTemperatura(int t){
        if(t >= 16 && t <= 30){
            this.temperatura = t;
        } else System.out.println("Temperatura fora da faixa");
    }

    public void setLigado(){
        if(temperatura >= 16 && temperatura <= 30){
            this.ligado = true;
        } else this.ligado = false;
    }

    // metodo verificarCompressor
    private boolean verificarCompressor(){
        int randomico = (int) (Math.random() * 10);
        if (randomico > 2) {
            System.out.println("Compressor OK");
            return true;
        } else {
            System.out.println("Compressor com problemas... testar novamente");
            return false;
        }
    }

    // metodo ativarModoTurbo()
    public void ativarModoTurbo(){
        if(verificarCompressor()){
            this.setTemperatura(16);
        } else System.out.println("Não foi possível usar o modo turbo");
    }

    // metodo que converte o objeto em String
    public String toString(){

        return "Marca: " + this.marca +
               "\nModelo: " + this.modelo +
               "\nTemperatura: " + this.temperatura +
                "\nLigado: " + this.ligado + "\n\n";
    }
}