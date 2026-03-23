import java.time.LocalDate;

public class Emprestimo {

    private LocalDate dataEmprestimo;
    private LocalDate dataDevolucaoPrevista;

    private Leitor leitor;
    private Livro livro;

    public Emprestimo(LocalDate dataEmprestimo,
                      LocalDate dataDevolucaoPrevista,
                      Leitor leitor,
                      Livro livro) {
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucaoPrevista = dataDevolucaoPrevista;
        this.leitor = leitor;
        this.livro = livro;
    }

    public LocalDate getDataEmprestimo() {
        return dataEmprestimo;
    }

    public LocalDate getDataDevolucaoPrevista() {
        return dataDevolucaoPrevista;
    }

    public Leitor getLeitor() {
        return leitor;
    }

    public Livro getLivro() {
        return livro;
    }

    @Override
    public String toString() {
        return "Leitor: " + leitor.getNome() + "|" + " Id: "+ leitor.getId() +
                "\nLivro: " + livro.getTitulo() +
                "\nData do Empréstimo: " + dataEmprestimo +
                "\nDevolução Prevista: " + dataDevolucaoPrevista;
    }
}