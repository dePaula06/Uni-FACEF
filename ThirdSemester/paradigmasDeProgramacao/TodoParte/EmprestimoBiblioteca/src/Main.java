import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Leitor leitor = new Leitor(1, "Mario");
        Livro livro = new Livro(1, "Pequeno Principe", "Joseph K.");

        Emprestimo emp = new Emprestimo(
                LocalDate.now(),
                LocalDate.now().plusDays(7),
                leitor,
                livro
        );

        System.out.println(emp.toString());
    }
}