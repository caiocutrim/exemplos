"use strict";
//this, closures
class Animal{
	contructor(tamanho, cor){
		this.tamanho = tamanho;
		this.cor = cor;
	}
}


class Cachorro extends Animal{
	contructor(barulho, nome){
		this.barulho = barulho;
		this.nome = nome;
	}
}


var cachorro = new Cachorro()
cachorro.nome = "Snoop";
cachorro.tamanho = 30;
cachorro.barulho = "miau";
cachorro.cor = "preta";
console.log(cachorro);

