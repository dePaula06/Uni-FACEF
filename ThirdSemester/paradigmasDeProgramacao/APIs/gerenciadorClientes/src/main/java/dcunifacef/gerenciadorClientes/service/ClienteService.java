package dcunifacef.gerenciadorClientes.service;

import dcunifacef.gerenciadorClientes.model.Cliente;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClienteService {

    // criando o ArrayList <>
    private List<Cliente> clientes = new ArrayList<>();

    private Long id = 1L;

    // consulta os clientes na lista
    public List<Cliente> listar(){
        return this.clientes;
    }

    public Cliente criar(Cliente c) {
        c.setId(id);
        id++;
        this.clientes.add(c);
        return c;
    }

    public Cliente buscarPorId(Long id) {

        for (Cliente c : clientes) {

            if (c.getId().equals(id)) {
                return c;
            }

        }

        return null;
    }

    public boolean remover(Long id) {
        return this.clientes.removeIf(cliente -> cliente.getId().equals(id));
    }

    public Cliente atualizar(Long id, Cliente novo) {

        novo.setId(id);

        for (int i = 0; i < this.clientes.size(); i++) {

            if (this.clientes.get(i).getId().equals(id)) {

                this.clientes.set(i, novo);

                return novo;
            }
        }

        // cliente não encontrado
        return null;
    }

}
