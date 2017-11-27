// CONDICIONES

var a = 16;
var b = 15;

if (a > b) {
  console.log("a mayor que b");
} else if (a == b) {
  console.log("a igual que b");
} else {
  console.log("a menor que b");
}

// CAMBIOS

var dia = 'viernes';

switch (dia) {
  case 'sabado':
    console.log("es sabado");
    break;
  case 'domingo':
    console.log("es domingo");
    break;
  case 'lunes':
    console.log("es lunes");
    break;
  case 'martes':
    console.log("es martes");
    break;
  default:
    console.log("¿que día es?");
}
