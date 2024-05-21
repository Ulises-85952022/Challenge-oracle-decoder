function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img, "enter");
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

    var textoDesencriptado = frase.replace(/enter/img, "e");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;
}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}