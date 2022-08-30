'use strict'

var btnEncrypt = document.getElementById('btn-encrypt');
var btnDecrypt = document.getElementById('btn-decrypt');
var btnCopy = document.getElementById('btn-copy');
var inputText = document.getElementById('input-text');
var textEncrypted = document.getElementById('text-encrypted');

document.getElementById("infoToCopy").style.display = "none";

btnEncrypt.addEventListener('click', ()=>{

    let encrypt = inputText.value
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");

    if (checkText(encrypt) == '2' || checkText(encrypt) == '1') {
        alert('Solo letras minuscilas y sin acentos');
   } else {

    document.getElementById("infoToCopy").style.display = "";
    document.getElementById("infoToHide").style.display = "none";

    textEncrypted.innerHTML= encrypt;   

   }

   if(inputText.value.length == 0 ){
    document.getElementById("infoToCopy").style.display = "none";
    document.getElementById("infoToHide").style.display = "";
   }

});

btnDecrypt.addEventListener('click', ()=>{

    let decrypt = inputText.value
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");


    if (checkText(decrypt) == '2' || checkText(decrypt) == '1' ) {
        alert('Solo letras minuscilas y sin acentos');
   } else {

    document.getElementById("infoToCopy").style.display = "";
    document.getElementById("infoToHide").style.display = "none";
    
    textEncrypted.innerHTML= decrypt;
   }

   if(inputText.value.length == 0 ){
    document.getElementById("infoToCopy").style.display = "none";
    document.getElementById("infoToHide").style.display = "";
   }git 
   

});

btnCopy.addEventListener('click', ()=>{
    navigator.clipboard.writeText(textEncrypted.textContent);
    alert("Texto copiado: " + textEncrypted.textContent);
});

function checkText(words) {
    words = String(words).trim();
    const regxs = {
      "lower": /^[a-z0-9 ]+$/,
      "upper": /^[A-Z0-9 ]+$/,
      "upperLower": /^[A-Za-z0-9 ]+$/
    }
   
    if (regxs.lower.test(words)) return '0';
    if (regxs.upper.test(words)) return '1';
    if (regxs.upperLower.test(words)) return '2';
    return -1;
  }