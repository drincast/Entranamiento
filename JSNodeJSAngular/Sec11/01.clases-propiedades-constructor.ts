//clase modelo para crear objetos que comparten un mismo comportamiento, estado e identidad

class Propiedades{
  //propiedades, caracteristicas que puede tener un objetos
  public texto: string;
  public numero: number;
  public boleana: boolean;
  public arreglo: Array<any>;
  public cualquiera: any;

  //constructor, para inicializar los atributos/propiedades de la clase
  constructor(){
    this.texto = "Palabra";
    console.log("texto", this.texto);
    this.numero = 5;
    console.log("numero", this.numero);
    this.boleana = true;
    console.log("boleana", this.boleana);
    this.arreglo = ["texto1", 0, true];
    console.log("arreglo", this.arreglo);
    this.cualquiera = {"propiedad1":"valor1",
                      "propiedad2":"valor2",
                      "propiedad3":"valor3"};
    console.log("cualquiera", this.cualquiera);
  }
}

let objeto = new Propiedades();
