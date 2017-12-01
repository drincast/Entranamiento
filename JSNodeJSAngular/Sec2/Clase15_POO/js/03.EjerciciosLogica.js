var a = {
  A: 0,
  B: 0,
  C: 0,
  D: 0,

  resultado: function() {
    if (a.C > a.B &&
      a.D > a.C &&
      a.D < a.A) {
      return true;
    }

    return false;
  },

  intervalo: setInterval(function() {
    a.A = Math.ceil(Math.random() * 4);
    a.B = Math.ceil(Math.random() * 4)
    a.C = Math.ceil(Math.random() * 4)
    a.D = Math.ceil(Math.random() * 4)

    if (a.resultado()) {
      clearInterval(a.intervalo);
      console.log("------- EJECICIO DE ATLETAS ----------");
      console.log("atleta A: " + a.A);
      console.log("atleta B: " + a.B);
      console.log("atleta C: " + a.C);
      console.log("atleta D: " + a.D);
      console.log("\n");
    }
  }, 10)
}

function Caballo(edad, velocidad, tonoColor) {
  this.edad = edad;
  this.velocidad = velocidad;
  this.tonoColor = tonoColor;
}

var b = {
  //Mac     edad:4     velocidad:4      tono:4
  //Smith   edad:1     velocidad:2      tono:1
  //Jack    edad:3     velocidad:1      tono:2
  //Willy   edad:2    velocidad:3      tono:3
  //Mac mas viejo
  //Jack mas lento
  //Smith mas claro
  Mac: new Caballo(0, 0, 0),
  Smith: new Caballo(0, 0, 0),
  Jack: new Caballo(0, 0, 0),
  Willy: new Caballo(0, 0, 0),

  resultado: function() {
    if (b.Mac.tonoColor > b.Smith.tonoColor &&
      b.Mac.velocidad > b.Jack.velocidad &&
      b.Mac.edad > b.Jack.edad &&
      b.Willy.velocidad > b.Jack.velocidad &&
      b.Mac.edad > b.Willy.edad &&
      b.Mac.edad > b.Smith.edad &&
      b.Willy.tonoColor > b.Smith.tonoColor &&
      b.Smith.velocidad > b.Jack.velocidad &&
      b.Jack.tonoColor > b.Smith.tonoColor) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function() {
    b.Mac.tonoColor = Math.ceil(Math.random() * 4);
    b.Mac.edad = Math.ceil(Math.random() * 4);
    b.Mac.velocidad = Math.ceil(Math.random() * 4);

    b.Smith.tonoColor = Math.ceil(Math.random() * 4);
    b.Smith.edad = Math.ceil(Math.random() * 4);
    b.Smith.velocidad = Math.ceil(Math.random() * 4);

    b.Jack.tonoColor = Math.ceil(Math.random() * 4);
    b.Jack.edad = Math.ceil(Math.random() * 4);
    b.Jack.velocidad = Math.ceil(Math.random() * 4);

    b.Willy.tonoColor = Math.ceil(Math.random() * 4);
    b.Willy.edad = Math.ceil(Math.random() * 4);
    b.Willy.velocidad = Math.ceil(Math.random() * 4);

    if (b.resultado()) {
      clearInterval(b.intervalo);
      console.log("------- EJECICIO CABALLOS ----------");
      console.log("Caballo de Mac: ", b.Mac);
      console.log("Caballo de Smith: ", b.Smith);
      console.log("Caballo de Jack: ", b.Jack);
      console.log("Caballo de Willy: ", b.Willy);
      console.log("\n");
    }
  }, 1)
}

var c = {
  // galgo: 1,
  // dogo: 4,
  // alano: 2,
  // podenco: 3,
  galgo: 0,
  dogo: 0,
  alano: 0,
  podenco: 0,

  resultado: function() {
    // if (c.galgo < c.podenco &&
    //   c.galgo < c.alano &&
    //   c.alano < c.dogo &&
    //   c.podenco < c.dogo) {
    //   return true;
    // }

    if (c.podenco > c.galgo &&
      c.alano > c.galgo &&
      c.alano < c.dogo &&
      c.dogo > c.podenco) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function() {
    c.galgo = Math.ceil(Math.random() * 4);
    c.dogo = Math.ceil(Math.random() * 4);
    c.alano = Math.ceil(Math.random() * 4);
    c.podenco = Math.ceil(Math.random() * 4);

    if (c.resultado()) {
      clearInterval(c.intervalo);
      console.log("------- EJECICIO PERROS ----------");
      console.log("galgo: " + c.galgo);
      console.log("dogo: " + c.dogo);
      console.log("alano: " + c.alano);
      console.log("podenco: " + c.podenco);
      console.log("\n");
    }
  }, 1)
}

var d = {
  //Alejandro, Benito -tren
  //Andres, Dario -avión
  //Carlos, Tomas -coche

  alejandro: 0,
  benito: 0,
  andres: 0,
  dario: 0,
  carlos: 0,
  tomas: 0,

  resultado: function() {
    if (d.alejandro === d.benito &&
      d.alejandro !== d.andres &&
      d.alejandro !== d.carlos &&
      d.andres !== d.carlos &&
      d.dario !== d.alejandro &&
      d.dario !== d.carlos &&
      d.tomas !== d.alejandro &&
      d.tomas !== d.andres) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function() {
    d.alejandro = Math.ceil(Math.random() * 3);
    d.benito = Math.ceil(Math.random() * 3);
    d.andres = Math.ceil(Math.random() * 3);
    d.dario = Math.ceil(Math.random() * 3);
    d.carlos = Math.ceil(Math.random() * 3);
    d.tomas = Math.ceil(Math.random() * 3);

    if (d.resultado()) {
      clearInterval(d.intervalo);
      console.log("------- EJECICIO TRANSPORTE ----------");
      console.log("alejando: " + d.alejandro);
      console.log("benito: " + d.benito);
      console.log("andres: " + d.andres);
      console.log("dario: " + d.dario);
      console.log("carlos: " + d.carlos);
      console.log("tomas: " + d.tomas);
      console.log("\n");
    }
  }, 1)
}

var e = {
  //angela < rosa
  //celia > rosa
  //angela > | < celia
  //angela < celia

  angela: 0,
  rosa: 0,
  celia: 0,

  resultado: function() {
    if (e.angela < e.rosa &&
      e.celia > e.rosa &&
      e.angela < e.celia) {
      return true;
    }
    return false;
  },

  intervalo: setInterval(function() {
    e.angela = Math.ceil(Math.random() * 3);
    e.rosa = Math.ceil(Math.random() * 3);
    e.celia = Math.ceil(Math.random() * 3);

    if (e.resultado()) {
      clearInterval(e.intervalo);
      console.log("------- EJECICIO VOZ ----------");
      console.log("angela: ", e.angela);
      console.log("rosa: ", e.rosa);
      console.log("celia: ", e.celia);
      console.log("\n");
    }
  }, 1)
}
