//agregamos esta nueva función
function crearParrafoTienda(textoLabel, valorMin) {
    //creamos las etiquetas <p>
    let elementoParrafo = document.createElement("p");
    //creamos las etiquetas label
    let elementoEtiqueta = document.createElement("label");
    //conectar con input
    elementoEtiqueta.setAttribute("for", textoLabel);
    //crear el input 
    let elementoInput = document.createElement("input");
    //establecer atributos input
    elementoInput.setAttribute("type", "number");
    elementoInput.setAttribute("id", textoLabel);
    elementoInput.setAttribute("min", valorMin);
    elementoInput.setAttribute("value", 0);
    //agregar label e input al parrafo 
    elementoParrafo.appendChild(elementoEtiqueta);
    elementoParrafo.appendChild(elementoInput);
    //devolver el párrafo completo
    return elementoParrafo;

}


function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);

    return miNumero;
}

function calcular() {
    //convertimos en array
    let ventas = [];

    ventas[0] = extraerNumeroDesdeElemento("ventasTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventasTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventasTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventasTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventasTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventasTienda6");

    //utilizamos funciones para calcular venta mayor, menor y total.
    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    let mensajeSalida = "Total Ventas: " + totalVentas + "\n" + "Venta Mayor: " + ventaMayor + "\n" + "Venta Menor: " + ventaMenor;
    let elementoSalida = document.getElementById("parrafoSalida");

    elementoSalida.textContent = mensajeSalida;

}
function sumarTotal(array) {
    let total = 0;
    for (let venta of array) {
        total += venta;
    }
    return total;
}

function calcularMayor(array) {
    let mayor = array[0];
    for (let venta of array) {
        if (venta > mayor) {
            mayor = venta;
        }
    }
    return mayor;
}

function calcularMenor(array) {
    let menor = array[0];
    for (let venta of array) {
        if (venta < menor) {
            menor = venta;
        }
    }
    return menor;
}

