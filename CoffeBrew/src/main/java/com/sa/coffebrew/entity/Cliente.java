package com.sa.coffebrew.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Set;

@Table(name = "clientes")
@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long idCliente; 
    
    @Column(nullable = false)
    private Long celular;
    
    @Column(nullable = false)
    private Long fone;
    
    @Column(nullable = false)
    private String email;
    
    @OneToMany(mappedBy = "cliente", fetch = FetchType.LAZY, orphanRemoval = true, cascade = CascadeType.ALL)
    @JsonManagedReference
    private Set<Comanda> comandas;

    public Long getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Long idCliente) {
        this.idCliente = idCliente;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
    }

    public Long getFone() {
        return fone;
    }

    public void setFone(Long fone) {
        this.fone = fone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Comanda> getComandas() {
        return comandas;
    }

    public void setComandas(Set<Comanda> comandas) {
        this.comandas = comandas;
    }
}
