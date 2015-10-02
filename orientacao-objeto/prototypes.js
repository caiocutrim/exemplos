function MyClass() {
	
}

MyClass.prototype.method = function(){
	return "Hello, world!";
}


function MySubClass(){
	MyClass.call(this);
}

MySubClass.prototype = Object.create(MyClass.prototype);

MySubClass.prototype.constructor = MySubClass;

MySubClass.prototype.method = function(){
	MyClass.prototype.method.call(this);
} 


var myClass = new MyClass();
var mySubClass = new MySubClass();


console.log(myClass.method());

console.log(mySubClass.method());
