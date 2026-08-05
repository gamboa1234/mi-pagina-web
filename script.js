// ================= MODO OSCURO =================

const cuerpo = document.querySelector("body");
const botonModo = document.querySelector("#btn-tema");

let esDeDia = false;

function alternarModo() {

    cuerpo.classList.toggle("claro");

    esDeDia = !esDeDia;

    if(esDeDia){
        botonModo.textContent = "🌙 Modo Noche";
    }else{
        botonModo.textContent = "☀️ Modo Día";
    }

}

botonModo.addEventListener("click", alternarModo);



// ================= VALIDAR FORMULARIO =================

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    let correcto = true;


    const nombre = document.querySelector("#nombre");
    const correo = document.querySelector("#correo");
    const mensaje = document.querySelector("#mensaje");


    const errorNombre = document.querySelector("#error-nombre");
    const errorCorreo = document.querySelector("#error-correo");
    const errorMensaje = document.querySelector("#error-mensaje");


    // Ocultar errores anteriores

    errorNombre.classList.add("oculto");
    errorCorreo.classList.add("oculto");
    errorMensaje.classList.add("oculto");


    // Validar nombre

    if(nombre.value.trim() === ""){

        errorNombre.textContent = "Ingrese su nombre";
        errorNombre.classList.remove("oculto");
        errorNombre.classList.add("error");

        correcto = false;

    }


    // Validar correo

    if(correo.value.trim() === ""){

        errorCorreo.textContent = "Ingrese su correo electrónico";
        errorCorreo.classList.remove("oculto");
        errorCorreo.classList.add("error");

        correcto = false;

    }


    // Validar mensaje

    if(mensaje.value.trim() === ""){

        errorMensaje.textContent = "Escriba su pedido";
        errorMensaje.classList.remove("oculto");
        errorMensaje.classList.add("error");

        correcto = false;

    }



    // Si todo está correcto

    if(correcto){

        alert("Pedido enviado correctamente");

        formulario.reset();

    }


});
