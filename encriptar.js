const textArea=document.querySelector(".text-area");
const mensaje=document.querySelector(".mensaje");

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
    /*const regex=/^[a-zA-Z0-9]*$/;*/
}

function btnEncriptar(){
    if (validarTexto(textArea.value)) {
        const textoEncriptado=encriptar(textArea.value)
        mensaje.value=textoEncriptado;
        textArea.value="";
        mensaje.style.backgroundImage="none";
    } else {
        alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.");
    }
}


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function encriptar(stringEncriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;   
}

function btnDesencriptar(){
if (validarTexto(textArea.value)) {
    const textoEncriptado=desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value=""; 
} else {
    alert("El texto contiene caracteres no permitidos. Solo se permiten letras minúsculas y sin acentos.");
 }     
}

function desencriptar(stringDesencriptada){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }   
    }
    return stringDesencriptada
}

document.getElementById('btnCopiar').addEventListener('click',async function(){
    //Selecciona el texto en el campo de entrada
    var inputTexto=document.getElementById('inputTexto');
 
    try{
        //Copia el text al portapapeles utilizando la API moderna
        await navigator.clipboard.writeText(inputTexto.value);
      
        //pega el texto copiado en otro campo de entrada
        var inputDestino=document.getElementById('inputDestino');
        inputDestino.value=inputTexto.value;
        inputTexto.value=""
     
        //Opcional: Notificacion de exito
       // alert('Copiando texto!');            
    }catch(err){
        //Manejo de errores
        console.error('Error al copiar el texto: ', err);
    }    
});
