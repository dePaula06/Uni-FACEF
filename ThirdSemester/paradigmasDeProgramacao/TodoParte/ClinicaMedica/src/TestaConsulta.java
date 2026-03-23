import java.util.Date;

public class TestaConsulta {

    public static void main(String[] args){
        Medico doutor = new Medico(1, "Pedro", "Pediatra");
        Paciente paciente = new Paciente(1, "João", "568.984.512-47");

        Consulta atendimento = new Consulta(new Date(), 120.30, doutor, paciente);

        System.out.println(atendimento.toString());
    }

}
