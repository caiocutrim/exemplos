var Humano = {
	nome: "Caio",
	sobrenome: "Pablo",
	altura: 1.80,
	peso: 83,
	sayName: function(){
		return this.nome + " "+ this.sobrenome;
	}

}


setInterval(function(){
  console.log(Humano.sayName());
}, 1000);//1000 milesegundos
