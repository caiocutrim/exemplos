
var Pessoa = {};

Pessoa.create = function(nome, endereco){
	this.nome = nome;
	this.endereco = endereco;
};

Pessoa.exibirDescricao = function(){
	return " nome : "+ this.nome + " endereco :" + this.endereco;
};


var Professor = Object.create(Pessoa);

Professor.create = function(nomeProfessor, enderecoProfessor, materia, turno){

	Pessoa.create.call(this, nomeProfessor, enderecoProfessor);
	this.materia = materia;
	this.turno = turno;
};
Professor.exibirDadosProfessor = function(){

	return Pessoa.exibirDescricao.call(this) +' '+ ' materia '+ this.materia + " turno " + this.turno;
}

var caio = Professor;

caio.create("Caio", "rua doutor francisco coelho", "javascript", "noturno");

console.log(caio.exibirDescricao());
console.log(caio.exibirDadosProfessor());

var suissa = Pessoa;

suissa.create("Jean Carlo Nascimento", "Alguma rua de ponta da grossa");

console.log(suissa.exibirDescricao());
