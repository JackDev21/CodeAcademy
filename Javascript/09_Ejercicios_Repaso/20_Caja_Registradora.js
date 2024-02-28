/* Diseña una función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.

cid es un arreglo 2D que enumera las monedas disponibles.

La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.

Devuelve {status: "INSUFFICIENT_FUNDS", change: []} si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.

Devuelve {status: "CLOSED", change: [...]} si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.

En cualquier otro caso, devuelve {status: "OPEN", change: [...]}, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

Unidad Monetaria	Importe
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
A continuación, un ejemplo del efectivo en caja en formato de arreglo:

Freecodecamp Ejercicio 5 JavaScript Algorithms and Data Structures
*/


function checkCashRegister(price, cash, cid) {
  // Define el valor de cada unidad monetaria en un objeto
  const UNIT_AMOUNT = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.10,
    "QUARTER": 0.25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  };

  // Calcula el cambio necesario restando el precio del efectivo recibido
  let changeDue = cash - price;

  // Prepara un arreglo para almacenar el cambio a devolver
  let changeArray = [];

  // Calcula el total de efectivo disponible en la caja registradora
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  // Redondea a dos decimales para evitar problemas de precisión
  totalCid = totalCid.toFixed(2);

  // Comprueba si el efectivo en la caja es menor que el cambio debido
  if (Number(totalCid) < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  // Comprueba si el efectivo en la caja es igual al cambio debido
  else if (Number(totalCid) === changeDue) {
    return { status: "CLOSED", change: cid };
  }
  else {
    // Invierte el arreglo cid para empezar a dar cambio con el billete de mayor denominación
    cid = cid.reverse();

    // Itera sobre cada denominación de dinero
    for (let elem of cid) {
      let temp = [elem[0], 0];
      // Mientras el cambio debido sea mayor o igual a la denominación, y haya dinero de esa denominación
      while (changeDue >= UNIT_AMOUNT[elem[0]] && elem[1] > 0) {
        // Añade la denominación al cambio a devolver
        temp[1] += UNIT_AMOUNT[elem[0]];
        // Resta la denominación de la caja registradora
        elem[1] -= UNIT_AMOUNT[elem[0]];
        // Resta la denominación del cambio debido
        changeDue -= UNIT_AMOUNT[elem[0]];
        // Redondea a dos decimales para evitar problemas de precisión
        changeDue = changeDue.toFixed(2);
      }
      // Si se ha añadido dinero al cambio a devolver, lo añade al arreglo del cambio
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }

  // Si después de intentar dar todo el cambio aún queda cambio debido, devuelve INSUFFICIENT_FUNDS
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Si se ha podido dar cambio, devuelve OPEN y el cambio a devolver
  return { status: "OPEN", change: changeArray };
}