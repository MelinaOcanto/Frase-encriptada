let frase= prompt("Ingresar una frase");
let fraseEncriptada ="";


for (let i=0; i<frase.length; i++){
    let caracter = frase[i];
    let codigo = frase.charCodeAt(i); //devuelve un numero indicando el valor de la hoja de codigos en latin
                                    //segun caracter correspondiente al indice. 

    if (codigo >= 65 && codigo <= 122) {
     caracter = String.fromCharCode(codigo + 1);  // devuelve una cadena creada mediante el uso de una
     //secuencia de valores Unicode especializada. (codificacion estandar de caracteres)
    }
                                
    fraseEncriptada += caracter;
}
                                
alert(`De tu frase se ha creado esta frase encriptada: ${fraseEncriptada}`);
    

   

