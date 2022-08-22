'use strict'

document.getElementById("infoToCopy").style.display = "none";

var btnEncrypt = document.getElementById('btn-encrypt');
var btnDecrypt = document.getElementById('btn-decrypt');
var btnCopy = document.getElementById('btn-copy');
var inputText = document.getElementById('input-text');
var textEncrypted = document.getElementById('text-encrypted');

btnEncrypt.addEventListener('click', ()=>{
    textEncrypted.innerHTML= '';

    document.getElementById("infoToCopy").style.display = "";
    document.getElementById("infoToHide").style.display = "none";

    let encrypt = inputText.value
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    textEncrypted.innerHTML= encrypt;   
});

btnDecrypt.addEventListener('click', ()=>{
    textEncrypted.innerHTML= '';

    let decrypt = inputText.value
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    textEncrypted.innerHTML= decrypt;

    
});

btnCopy.addEventListener('click', ()=>{

 /* Copy the text inside the text field */
navigator.clipboard.writeText(textEncrypted.textContent);

/* Alert the copied text */
alert("Texto copiado: " + textEncrypted.textContent);
});

