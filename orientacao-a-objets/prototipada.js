var Retangulo = {};

Retangulo.create = function(altura, largura){

		var self = Object.create(this);
		self.altura = altura;
		self.largura = largura;
		return self;
}

Retangulo.area = function(){
	return " o resultado é "+this.altura * this.largura;
}

var rect = Retangulo.create(10, 10);
console.log(rect.area());

var Quadrado = Object.create(Retangulo);

Quadrado.create = function(side){
	return Retangulo.create.call(this, side, side);
};

var quad = Quadrado.create(5);
console.log(quad.area());
