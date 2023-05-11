function Automovil(modelo, color, anio, titular) {
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

auto1 = new Automovil("Ford", "Rojo", 2018, "Juan");
auto2 = new Automovil("Chevrolet", "Azul", 2019, "Pedro");
auto3 = new Automovil("Fiat", "Verde", 2020, "Maria");

Automovil.prototype.venderAutomovil = function (nuevoTitular) {
    this.titular = nuevoTitular;
};

Automovil.prototype.verAuto = function () {
    return("Modelo: " + this.modelo + " Color: " + this.color + " Año: " + this.anio + " Titular: " + this.titular);
}

Automovil.prototype.encender = function(){
    alert("El auto esta encendido");
}



let automoviles = [auto1, auto2, auto3];
function mostrarAutomoviles(){
let lista = document.getElementById("listaAutomoviles");
 for(auto of automoviles){
    let li = document.createElement("li");
    li.innerHTML = auto.verAuto();
    lista.appendChild(li);
 }

}
