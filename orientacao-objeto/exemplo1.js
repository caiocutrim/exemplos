var avo = {
	get: function fn(){
		return this.val;
	},
	val: 42
}

var filho = Object.create(filho);
child.val = 3.14159;

var neto = Object.create(neto);

console.log(avo.get()); 
console.log(filho.get());
console.log(neto.get());
