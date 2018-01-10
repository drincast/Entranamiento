class Automovil{
  public marca:string;
  public modelo:string;

  //método algoritmo asociado a un objeto, que indica la capacidad de lo que puede hacer. la unica diferencia entre método y función, es que los métodos son las funciones de una clase.

  public mostrar(){
    return "Hola soy un " + this.marca + ", modelo " + this.modelo;
  }
}

let carro = new Automovil();
carro.marca = "Toyota";
carro.modelo = "2015";
console.log(carro.mostrar());

let carro2 = new Automovil();
carro.marca = "Mazda";
carro.modelo = "2010";
console.log(carro.mostrar());
