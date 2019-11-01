package com.teste.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teste.model.Anotacao;
import com.teste.repository.AnotacaoRepository;

@RestController
@CrossOrigin(value = "*")
public class AnotacaoController {

	@Autowired
	private AnotacaoRepository anotacaoRepository;
	
	@RequestMapping("/anotacoes")
	public List<Anotacao> listar(){
		return anotacaoRepository.findAll();
	}
	
	@PostMapping("/anotacao")
	public void cadastrarCurso(@RequestBody Anotacao anotacao) {
		anotacaoRepository.save(anotacao);
	}
	
	@DeleteMapping("/anotacao/{id}")
	public void delete(@PathVariable(value = "id") Long id) {
		anotacaoRepository.deleteById(id);
	}
	
	@GetMapping("anotacao/{id}")
	public Optional<Anotacao> retornaAnotacaoEspecifica(@PathVariable(value = "id") Long id) {
		return anotacaoRepository.findById(id);
	}
	
	@PutMapping("/anotacao/{id}")
	public Optional<Object> atualizarCurso(@PathVariable(value = "id") Long id, @RequestBody Anotacao novaAnotacao) {
		
		return anotacaoRepository.findById(id)
				.map(anotacao -> {
					anotacao.setDescricao(novaAnotacao.getDescricao());
					return anotacaoRepository.save(anotacao);
				});
				
				
	}
	
}
