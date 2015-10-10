function Pessoa(nome, endereco){
	this.nome = nome;
	this.endereco = endereco;
}


function PessoaFisica(cpf, identidade){
	this.cpf = cpf;
	this.identidade = identidade;
}

PessoaFisica.prototype = new Pessoa("John", "rua 1");

PessoaFisica.prototype.relatorio = function(){
	return "nome "+ this.nome + " endereço "+ this.endereco + " cpf "+ this.cpf+ " indentidade " + this.identidade;
}

var pessoaFisica = new PessoaFisica("12348739147", "10834781740137810");
console.log(pessoaFisica.relatorio());
