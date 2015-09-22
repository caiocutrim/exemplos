
 function helloWorld(){
 	 return "Hello, world!";
 }

 console.log(helloWorld());



 // funções que não retornam valor são chamadas em javascript de funções void ou funções vazias;
 var Pessoa = function(nome){
 	this.nome = nome;
   return this.nome;
 }


 console.log(Pessoa("Paulo Tiba"));

