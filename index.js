// TAREA
// Cuando empieza el programa la maquina te da un color
// Tengo que tocar ese color
// vuelve a dar otro color
//
// Repetir la misma secuencia que hace la maquina

const $empezar = document.querySelector("#button-start");
const $boxColors = document.querySelectorAll("#box");
const $reset = document.querySelector("#reset");
const $resultado = document.querySelector("#resultado");

$empezar.onclick = function () {
  resetearJuego();
  guardarColores();
  guardarNumerosRandom();
  coloresRandom(guardarNumerosRandom());
};
// let numBox = guardarNumerosRandom();
// let num = 0;
// numBox = numBox[0] + 1;
// num = numBox + 1;
// console.log(numBox);

$reset.onclick = function () {
  resetearJuego();
  contador = 0;
};

function resetearJuego() {
  for (let i = 0; i < $boxColors.length; i++) {
    $boxColors[i].className = `box box-${i + 1}`;
  }
}

function guardarColores() {
  let boxes = [];
  for (let i = 0; i < $boxColors.length; i++) {
    boxes.push($boxColors[i]);
  }
  return boxes;
}

function guardarNumerosRandom() {
  let boxes = guardarColores();
  let valor = 0;
  let random = 0;
  let valorRandom = 0;
  let valoresRandom = [];
  for (let i = 0; i < boxes.length; i++) {
    valor = boxes.length;
    random = Math.random(valor);
    random = random * valor;
    valorRandom = Math.floor(random);
    valoresRandom.push(valorRandom);
  }
  return valoresRandom;
}

function coloresRandom(coloresRandom) {
  let boxes = guardarColores();
  let resultado = 0;
  let total = 0;
  let colors = [];
  for (let i = 0; i < coloresRandom.length; i++) {
    colors.push(coloresRandom[i]);
    (function (i) {
      setTimeout(function () {
        resetearJuego();
        let colorBox = coloresRandom[i] + 1;
        // console.log(colorBox);
        // console.log(boxes)
        if (coloresRandom[i] !== resultado) {
          resultado = 0;
          resultado = coloresRandom[i];
          boxes[coloresRandom[i]].className = `box-${colorBox} box-selected`;
        } else if (total == [coloresRandom[i]]) {
          boxes[coloresRandom[i]].className = `box-${colorBox} box-third`;
        } else if (resultado == [coloresRandom[i]]) {
          total = resultado;
          boxes[coloresRandom[i]].className = `box-${colorBox} box-shadow`;
        }
        repetirColores(coloresRandom[i], colorBox, colors, boxes);
      }, i * 2000);
    })(i);
  }
}

let contador = 0;
function repetirColores(coloresRandom, colorBox, colors, boxes) {
  document.querySelector(`.box-${colorBox}`).onclick = function () {
    console.log(contador);
    if (colors[contador] === coloresRandom) {
      console.log(contador);
      if (contador === 3) {
        let text = document.createElement("p");
        text.textContent = "Correcto";
        $resultado.appendChild(text);
        alert("correcto");
      }
    } else {
      let text = document.createElement("p");
      text.textContent = "Incorrecto";
      $resultado.appendChild(text);
      alert("incorrecto");
    }
    contador++;
  };
}
// }

// for (var i = 1; i <= 3; i++) {
//   (function(index) {
//       setTimeout(function() { alert(index); }, i * 1000);
//   })(i);
// }

// g = $boxColors.length;
// x = Math.random(g);
// console.log(x);
// console.log(x);
// g = Math.round(x);

// console.log(g);
// console.log($boxColors[g]);
// x = x * ($boxColors.length - 1);
// setTimeout(function () {
//   $boxColors[Math.round(x)].className = `box-${g} box-selected`;
// }, 2000);

// $empezar.onclick();

// return g;
