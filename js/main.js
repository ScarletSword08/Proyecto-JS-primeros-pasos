let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");

const alertas = () => {

if (categoria.value == "")  {
    alert("Seleccione una categoría");
    categoria.focus();
    return
}

if (categoria.value != "Seleccionar") {
    const result = totalPagar(cantidad, cantidad);
    document.getElementById("total").textContent = result;
    alert("Operación completada con éxito  Monto Total " + result)
}

}


function totalPagar (cantidad, categoria) {
    let precioTicket = 200;
    let totalTicket = (cantidad.value) * precioTicket;

    if (cantidad.value > 0){
        totalTicket = totalTicket - (totalTicket * (descuentoEstudiante/100));
        return totalTicket
    }
    
}




botonResumen.addEventListener("click", alertas)
botonBorrar.addEventListener("click", resettotalPagar)


/*Profe solo hace un cálculo porque no tengo timepo de sentarme a leer JS (preparando parciales a mas no poder).
Seguire practicando en mis ratos libres hasta que salga jaja.*/