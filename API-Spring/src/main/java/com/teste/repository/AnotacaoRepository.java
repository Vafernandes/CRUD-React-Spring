package com.teste.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teste.model.Anotacao;

@Repository
public interface AnotacaoRepository extends JpaRepository<Anotacao, Long>{

}
