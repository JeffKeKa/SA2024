package com.sa.coffebrew.service;

import com.sa.coffebrew.entity.Comanda;
import com.sa.coffebrew.entity.Pedido;
import com.sa.coffebrew.entity.Produto;
import com.sa.coffebrew.repository.ComandaRepository;
import com.sa.coffebrew.repository.PedidoRepository;
import com.sa.coffebrew.repository.ProdutoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PedidoServiceTest {
    @Autowired
    private ComandaRepository comandaRepository; 
    
    @Autowired
    private PedidoService pedidoService;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private PedidoRepository pedidoRepository;
    
    @Test
    void testIncluirPedido() {
    Produto produto = new Produto();
    produto.setNome("Café");
    produto.setPreco(5.0);
    produto.setDescricao("Café fresco");
    produtoRepository.save(produto);

    Comanda comanda = new Comanda();
    comanda.setPrecoTotal(0.0); // Defina o preço total conforme necessário
    comanda.setStatus("ATIVO"); // Defina o status conforme necessário
    comanda.setnComanda(101); // Defina o número da comanda conforme necessário
    comandaRepository.save(comanda); // Salvar a comanda antes do pedido

    Pedido pedido = new Pedido();
    pedido.setQuantidade(2);
    pedido.setPrecoPedido(10.0);
    pedido.setStatusPedido("PENDENTE");
    pedido.setProduto(produto);
    pedido.setComanda(comanda); // Associar o pedido à comanda

    Long idPedido = pedidoService.incluirPedido(pedido, produto.getIdProduto());
    assertNotNull(idPedido);

    Optional<Pedido> PedidoAchado = pedidoRepository.findById(idPedido);
    assertTrue(PedidoAchado.isPresent());
    assertEquals("Café", PedidoAchado.get().getProduto().getNome());
    }

    @Test
    void testIncluirNovoPedido() {
    Produto produto1 = new Produto();
    produto1.setNome("Café");
    produto1.setPreco(5.0);
    produto1.setDescricao("Café fresco");
    produtoRepository.save(produto1);

    Produto produto2 = new Produto();
    produto2.setNome("Bolo");
    produto2.setPreco(7.5);
    produto2.setDescricao("Bolo de chocolate");
    produtoRepository.save(produto2);

    Comanda comanda = new Comanda();
    comanda.setPrecoTotal(0.0); // Defina o preço total conforme necessário
    comanda.setStatus("ATIVO"); // Defina o status conforme necessário
    comanda.setnComanda(102); // Defina o número da comanda conforme necessário
    comandaRepository.save(comanda); // Salvar a comanda antes dos pedidos

    List<Pedido> pedidos = new ArrayList<>();
    Pedido pedido1 = new Pedido();
    pedido1.setQuantidade(2);
    pedido1.setPrecoPedido(10.0);
    pedido1.setStatusPedido("PENDENTE");
    pedido1.setProduto(produto1);
    pedido1.setComanda(comanda); // Associar o pedido à comanda

    Pedido pedido2 = new Pedido();
    pedido2.setQuantidade(1);
    pedido2.setPrecoPedido(7.5);
    pedido2.setStatusPedido("PENDENTE");
    pedido2.setProduto(produto2);
    pedido2.setComanda(comanda); // Associar o pedido à comanda

    pedidos.add(pedido1);
    pedidos.add(pedido2);

    assertTrue(pedidoService.incluirNovoPedido(pedidos, comanda.getnComanda()));
    }


    @Test
    void testExcluirPedido() {
        Produto produto = new Produto();
        produto.setNome("Chá");
        produto.setPreco(3.0);
        produto.setDescricao("Chá de hortelã");
        produtoRepository.save(produto);

        Pedido pedido = new Pedido();
        pedido.setQuantidade(1);
        pedido.setPrecoPedido(3.0);
        pedido.setStatusPedido("PENDENTE");
        pedido.setProduto(produto);
        pedidoRepository.save(pedido);

        assertTrue(pedidoService.excluirPedido(pedido.getIdPedido()));
    }

    @Test
    void testConsultarPedido() {
        Produto produto = new Produto();
        produto.setNome("Café");
        produto.setPreco(5.0);
        produto.setDescricao("Café fresco");
        produtoRepository.save(produto);

        Pedido pedido = new Pedido();
        pedido.setQuantidade(2);
        pedido.setPrecoPedido(10.0);
        pedido.setStatusPedido("PENDENTE");
        pedido.setProduto(produto);
        pedidoRepository.save(pedido);

        Optional<Pedido> result = pedidoService.consultarPedido(pedido.getIdPedido());
        assertTrue(result.isPresent());
        assertEquals("Café", result.get().getProduto().getNome());
    }

    @Test
    void testListarPedidos() {
        List<Pedido> result = pedidoService.listarPedidos();
        assertFalse(result.isEmpty());
    }

    @Test
    void testAtualizarPedido() {
        Produto produto = new Produto();
        produto.setNome("Cappuccino");
        produto.setPreco(6.0);
        produto.setDescricao("Cappuccino com canela");
        produtoRepository.save(produto);

        Pedido pedido = new Pedido();
        pedido.setQuantidade(1);
        pedido.setPrecoPedido(6.0);
        pedido.setStatusPedido("PENDENTE");
        pedido.setProduto(produto);
        pedidoRepository.save(pedido);

        pedido.setStatusPedido("CONCLUÍDO");
        assertTrue(pedidoService.atualizarPedido(pedido, produto.getIdProduto()));

        Optional<Pedido> updatedPedido = pedidoRepository.findById(pedido.getIdPedido());
        assertTrue(updatedPedido.isPresent());
        assertEquals("CONCLUÍDO", updatedPedido.get().getStatusPedido());
    }
}
