const articulo = document.getElementById('article-encriptado');
const templateImage = document.getElementById('template-imagen').content;
const  templateText =document.getElementById('template-texto').content;
const fragment  = document.createDocumentFragment();
//botones
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');

//TextArea
const textArea = document.getElementById('texto');

// mostrar el template

document.addEventListener('DOMContentLoaded',()=>{
    textArea.value="";
    noTexto();
})

function noTexto(){
    var clone = templateImage.cloneNode(true);
    fragment.appendChild(clone);
    articulo.appendChild(fragment)
}

//Mostrar texto encriptado
btnEncriptar.addEventListener('click',()=>{    
    
    if(encriptar()==''){
        articulo.textContent='';
        noTexto()
        //console.log("Sin Texto")
    }else{
        articulo.textContent='';
        templateText.querySelector('textarea').value=encriptar();   
        clone = templateText.cloneNode(true);
        fragment.appendChild(clone);    
        articulo.appendChild(fragment);      
        
        // console.log('Mostrando texto encriptado'); 
    }         
})

articulo.addEventListener('click',(e)=>{
    btnCopiar(e);
})

const btnCopiar = e =>{
    if(e.target.classList.contains('boton')){
        let contenido =document.getElementById('t-encriptado');
        contenido.select();
        document.execCommand('copy');
    }    
}

btnDesencriptar.addEventListener('click',()=>{
    if (desencriptar()==""){
        articulo.textContent='';
        noTexto()
    }else{
        articulo.textContent='';
        templateText.querySelector('textarea').value=desencriptar();   
        clone = templateText.cloneNode(true);
        fragment.appendChild(clone);    
        articulo.appendChild(fragment);      
        
        // console.log('Mostrando texto desencriptado');
    }    
})

//funcion para encriptar
function encriptar(){
    let contenido =textArea.value;
    let textoEncriptado='';
    textoEncriptado = contenido.replace(/e/igm,'enter');
    textoEncriptado = textoEncriptado.replace(/i/igm,'imes');
    textoEncriptado = textoEncriptado.replace(/a/igm,'ai');
    textoEncriptado = textoEncriptado.replace(/o/igm,'ober');
    textoEncriptado = textoEncriptado.replace(/u/igm,'ufat');
    
    // console.log(textoEncriptado);
    return textoEncriptado;
}

function desencriptar(){
    let contenido =textArea.value;
    let textoDesencriptado='';
    textoDesencriptado = contenido.replace(/enter/igm,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/igm,'i');
    textoDesencriptado = textoDesencriptado.replace(/ai/igm,'a');
    textoDesencriptado = textoDesencriptado.replace(/ober/igm,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/igm,'u');
    //console.log(textoDesencriptado);
    return textoDesencriptado;
}


