import java.util.Date;

public class Consulta {

    private Date data;
    private double valorDaConsulta;

    private Medico medico;
    private Paciente paciente;

    // Construtor
    public Consulta(Date data, double valorDaConsulta, Medico medico, Paciente paciente) {
        this.data = data;
        this.valorDaConsulta = valorDaConsulta;
        this.medico = medico;
        this.paciente = paciente;
    }

    // Getters e Setters
    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }

    public double getValorDaConsulta() {
        return valorDaConsulta;
    }

    public void setValorDaConsulta(double valorDaConsulta) {
        this.valorDaConsulta = valorDaConsulta;
    }

    public Medico getMedico() {
        return medico;
    }

    public void setMedico(Medico medico) {
        this.medico = medico;
    }

    public Paciente getPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    // toString
    @Override
    public String toString() {
        return "Consulta em " + data +
                "\nValor: R$ " + valorDaConsulta +
                "\nMédico: " + medico.getNome() +
                "\nPaciente: " + paciente.getNome();
    }
}