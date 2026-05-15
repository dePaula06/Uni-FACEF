package dcunifacef.gerenciadorClientes.controller;

import dcunifacef.gerenciadorClientes.model.Cliente;
import dcunifacef.gerenciadorClientes.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController // controlador de requisição REST
@RequestMapping("/cliente") // mapeamento da requisição

public class ClienteController {

    // injeção de dependência
    // chamar métodos de um objeto sem instanciá-lo
    @Autowired
    ClienteService service;

    @GetMapping
    public ResponseEntity<List<Cliente>> listar(){
        return ResponseEntity.ok(service.listar());
    }

    @PostMapping
    public ResponseEntity<Cliente> criar(@RequestBody Cliente c){
        Cliente novo = service.criar(c);
        // URI Uniform Resource Identifier
        URI uri = URI.create("/cliente/" + novo.getId());
        return ResponseEntity.created(uri).body(novo);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id){

        Cliente resposta = service.buscarPorId(id);

        if (resposta != null){
            return ResponseEntity.ok(resposta);
        }

        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Long id) {
        if (service.remover(id)) {
            return ResponseEntity.noContent().build(); // sucesso - 204
        } else {
            return ResponseEntity.notFound().build(); // erro cliente - 404
        }
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable Long id,
                                            @RequestBody Cliente novo){
        Cliente resposta = service.atualizar(id, novo);
        if (resposta != null) {
            // atualizou e retornou produto atualizado - 200
            return ResponseEntity.ok(resposta);
        }
        else {
            return ResponseEntity.notFound().build(); // não atualizou - 404
        }
    }

}
