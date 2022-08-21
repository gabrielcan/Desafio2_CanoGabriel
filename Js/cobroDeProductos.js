let presio = parseFloat(prompt("ingrese presio del producto a Evaluar"));
let continuar = 1;
let AcumPresios = 0;
let descuento = 0;
let totalPagar = 0;

const valorIva = (x) => x * 0.21;
const sumarProductos = (productos) => {
  return (AcumPresios = AcumPresios + productos);
};

const calculoDescuento = (valor) => {

  if (valor > 5000 && valor < 8000) {
    return (descuento = AcumPresios * 0.05);
  } else if (valor >= 8000) {
    return (descuento = AcumPresios * 0.1);
  } else {
    return 0;
  }

};
 const mostrarPantalla= (total,iva,descuentos,p)=>{
   totalPagar = total - descuentos + iva; //Realizamos el calculo para mostrar el prresio Final a Pagar

   return alert(
    `¡¡Termino la carga!!. \nSubTotal: ${total}\n${p}% Descuento: ${descuentos} \nValor del IVA: ${iva} \nTotal a Pagar: ${totalPagar}.`
  );
 }

while (continuar === 1) {
  let iva;
  let p;
  sumarProductos(presio);

  continuar = parseInt(
    prompt("presione 1 para cargar otro producto de los contrario ponga otro valor"));

  if (continuar != 1) {

descuento=calculoDescuento(AcumPresios);
p=(descuento/AcumPresios)*100;
iva=valorIva(AcumPresios);
mostrarPantalla(AcumPresios,iva,descuento,p);
    
break; // Cortamos la ejecucion del programa
  }

  presio = parseFloat(prompt("ingrese presio del producto a Evaluar"));
}
