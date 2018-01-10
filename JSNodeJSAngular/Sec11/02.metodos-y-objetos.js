var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    //método algoritmo asociado a un objeto, que indica la capacidad de lo que puede hacer. la unica diferencia entre método y función, es que los métodos son las funciones de una clase.
    Automovil.prototype.mostrar = function () {
        return "Hola soy un " + this.marca + ", modelo " + this.modelo;
    };
    return Automovil;
}());
var carro = new Automovil();
carro.marca = "Toyota";
carro.modelo = "2015";
console.log(carro.mostrar());
var carro2 = new Automovil();
carro.marca = "Mazda";
carro.modelo = "2010";
console.log(carro.mostrar());
