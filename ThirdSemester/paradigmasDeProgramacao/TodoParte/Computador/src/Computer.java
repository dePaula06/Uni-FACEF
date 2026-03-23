public class Computer {

    private int id;
    private String marca;
    private Processador processador;

    // COMPOSIÇÃO: processador é criado dentro do construtor
    public Computer(int id, String marca,
                      String marcaProc, String modeloProc, double freq) {
        this.id = id;
        this.marca = marca;
        this.processador = new Processador(marcaProc, modeloProc, freq);
    }

    public int getId() {
        return id;
    }

    public String getMarca() {
        return marca;
    }

    public Processador getProcessador() {
        return processador;
    }
}