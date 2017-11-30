window.onload = function() { //indica que se esjecute cuando ya se ha cargado el body
  var arreglo01 = new Array("pera", "manzana", "mandarina", "banano");
  var arreglo02 = new Array("naranja", "fresa", "uva");
  var arreglo03 = Array.concat(arreglo01, arreglo02);
  console.log(arreglo03);
  console.log("pos fresa: " + arreglo03.indexOf("fresa"));
  console.log("pos fresa, concatenado array: " + arreglo03.concat(arreglo03).lastIndexOf(
    "fresa"));
  console.log("pos fresa, concatenado array: " + arreglo03.concat(arreglo03).indexOf(
    "fresa"));
  console.log("Array.join " + arreglo03.join('\\'));
  console.log("Array.pop " + arreglo03.pop());
  console.log(arreglo03);
  console.log("Array.push " + arreglo03.push("uva2", "piña"));
  console.log(arreglo03);
  console.log("Array.reverse " + arreglo03.reverse());

  console.log("prueva de Array shift");
  console.log(arreglo03);
  console.log("Array.shift: " + arreglo03.shift());

  console.log("Array.slice(1, 4): " + arreglo03.slice(1, 4));
  console.log("Array.sort(): " + arreglo03.sort());

  console.log("Array.splice(3, 0, 'manza01', 'manza02'): " + arreglo03.splice(
    3, 0, 'manza01', 'manza02'));
  console.log(arreglo03);

  console.log("Array.splice(3, 2): " + arreglo03.splice(3, 2));
  console.log(arreglo03);

  console.log("Array.unshift('manza01', 'manza02'): " + arreglo03.unshift(
    'manza01', 'manza02'));

  console.log("Array.valueOf(): " + arreglo03.valueOf());
}
