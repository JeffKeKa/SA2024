package com.sa.coffebrew.service;

import com.sa.coffebrew.entity.Comanda;
import com.sa.coffebrew.entity.Pedido;
import com.sa.coffebrew.repository.ComandaRepository;
import com.sa.coffebrew.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class ComandaService {
    
    @Autowired
    private ComandaRepository comandaRepository;
    
    @Autowired
    private PedidoRepository pedidoRepository;
    
    public Long incluirComanda(Comanda comanda, Long idPedido) {
        
       
        Pedido pedido = pedidoRepository.getReferenceById(idPedido);
        Set<Pedido> pedidos = new HashSet<>();
        pedidos.add(pedido);
        comanda.setPedidos(pedidos);
        return comandaRepository.save(comanda).getIdComanda();
        
    }

    public Boolean excluirComanda(Long idComanda) {
        try {
            comandaRepository.deleteById(idComanda);
            return true;
        } catch (Exception ex) {
            System.out.println("Erro ao excluir Comanda ID: " + idComanda + " Erro: " + ex.getLocalizedMessage());
            return false;
        }
    }
    
    public Optional<Comanda> consultarComanda(Long idComanda) {
        return comandaRepository.findById(idComanda);
    }
    
    public List<Comanda> listarComanda() {
        return comandaRepository.findAll();
    }
    
    public Boolean atualizarComanda(Comanda comanda) {
        Optional<Comanda> optionalComanda = comandaRepository.findById(comanda.getIdComanda());
        if (optionalComanda.isPresent()) {
            Comanda c = optionalComanda.get();
            c.setPrecoTotal(comanda.getPrecoTotal());
            c.setStatus(comanda.getStatus());
            c.setCliente(comanda.getCliente());
            c.setNumero(comanda.getNumero());
            comandaRepository.save(c);
            return true;
        } else {
            return false;
        }
    }
}
