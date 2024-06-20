package com.sa.coffebrew.repository;

import com.sa.coffebrew.entity.Produto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
    List<Produto> findByTipo(String tipo);
}
