let continuar = 1; //creamos la variable que servira para la condicion del while
let AcumPresios = 0;
let descuento = 0;
let totalPagar = 0;

/* Inicio de Funciones */

const valorIva = (x) => x * 0.21; //obtengo el valor del IVA (21%)

//Con la siguiente funcion recibo el valor del producto cargado y devuelvo la suma de todos los productos que recibio en el ciclo while
const sumarProductos = (productos) => { 
  return (AcumPresios = AcumPresios + productos);
};

/* Con la siguiente funcion realizo el calculo del descuento que le corresponde, dependiendo del total que tiene acumualado para pagar
_Si el valor es mayor a 5000 pesos  y menor a 8000 pesos, le corresponde un descuento de 5%
_Si es mayor o igual a 8000 pesos obtiene un descuento del 10%
_Si el valor total es menor o igual a 5000, no corresponden descuentos.
*/
const calculoDescuento = (valor) => {
  if (valor > 5000 && valor < 8000) {
    return (descuento = AcumPresios * 0.05);
  } else if (valor >= 8000) {
    return (descuento = AcumPresios * 0.1);
  } else {
    return 0;
  }

};

// con la siguiente funcion realizamos el calculo del total a cobrar y con un ALERT mostramos el detalle a pagar con los valores ingresados
 const mostrarPantalla= (total,iva,descuentos,p)=>{
   totalPagar = total - descuentos + iva; //Realizamos el calculo para mostrar el prresio Final a Pagar

   return alert(
    `¡¡Termino la carga!!. \nSubTotal: ${total}\n${p}% Descuento: ${descuentos} \nValor del IVA: ${iva} \nTotal a Pagar: ${totalPagar}.`
  );
 }

 /* Fin de Funciones */

 let presio = parseFloat(prompt("ingrese presio del producto a Evaluar")); //iniciamos la carga del primer valor

while (continuar === 1) {  //inicio ciclo while mientras la variable continar tenga el valor "1", va continaur repitiendose el ciclo while
  let iva;
  let p;
  sumarProductos(presio);
//consultamos al usuario si desea continuar cargando valores de productos 
continuar = parseInt(prompt("presione 1 para cargar otro producto de los contrario ponga otro valor"));

  if (continuar != 1) { //Si el usuario responde a la consulta anterior con un "1" continuara la carga de valores de productos, sin embargo, si el valor entregado por el usuario es distinto a "1" entrmos por el IF
descuento=calculoDescuento(AcumPresios);
p=(descuento/AcumPresios)*100;
iva=valorIva(AcumPresios);
mostrarPantalla(AcumPresios,iva,descuento,p);
    
break; // Cortamos la ejecucion del programa
  }
  // iniciamos nuevamente el ciclo while
presio = parseFloat(prompt("ingrese presio del producto a Evaluar"));
}  //FIN ciclo while
