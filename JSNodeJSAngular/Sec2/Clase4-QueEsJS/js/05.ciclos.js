// CICLOS


for (var i = 0; i < 5; i++) {
  console.log('i', i);
}


var n = 1;

while (n <= 5) {
  console.log('n', n);
  n++;
}

var p = 1;
do {
  console.log('p', p);
  p++
} while (p <= 5)

var cajas = document.querySelectorAll(".cajas");
var numBColor = 10;
for (var i = 0; i < cajas.length; i++) {
  cajas[i].style.width = "50px";
  cajas[i].style.height = "50px";
  cajas[i].style.background = "#ff" + numBColor.toString() + "ff";
  cajas[i].style.marginRight = "5px";
  cajas[i].style.marginTop = "5px";
  cajas[i].style.display = "inline-block";

  numBColor = numBColor + 20;
}
