const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar")
const aviso = document.querySelector(".texto-aviso");
const respuestas = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "El campo de texto no debe de estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== text){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    
    }

    else if (texto  !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "El texto debe de ser solo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    }

    respuestas.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
})

/*Desenciptor*/

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "El campo de texto no debe de estar vacio";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== text){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "No debe tener acentos y caracteres especiales";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    
    }

    else if (texto  !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeiht = "800"
        aviso.textContent = "El texto debe de ser solo en minuscula";

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    }

    respuestas.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
});

/*Boton copiat*/
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuestas;
    copiar.select();
    document.execCommand("copy");

});
