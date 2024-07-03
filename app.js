//let titulo = document.querySelector('h1');//obtengo el valor del h1 en html y lo almaceno en la variable titulo 
//titulo.innerHTML = 'juego de numero secreto'; 

// let parrafo = document.querySelector('p'); //captura la etqueta de p en html 
// parrafo.innerHTML='Escoge un numero del 1 al 10'; //asignamos un valor en esa etiqueta 

let numeroSecreto= 0;
let Intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){ //este es una funcion que auotmatiza el proceso anterior 
    let ElementoHTML = document.querySelector(elemento);//obtengo el valor del h1 en html y lo almaceno en la variable titulo 
    ElementoHTML.innerHTML = texto; 
    return; 
}


function verificarIntento(){ //funcion que se crea cuando agregamos el nombre de la funcion en el button de htmml
   let numeroDeUsuario= parseInt(document.getElementById('valorDeUsuario').value); //guarda el numero ingresado por el usuario
   //el === es cuando compara los dos datos si es el mismo valor y el mismo tipo de dato 
   //console.log(numeroDeUsuario);  //retorna un True o false si los numeroso son iguales o diferentes 
   //console.log(Intentos);

   if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p', `Acertaste el nùmero en ${Intentos} ${(Intentos===1) ? 'vez' : 'veces'}`);//operadores ternarios
    document.getElementById('reiniciar').removeAttribute('disabled'); //se elemina el atributo disabled del boton nuevo juego

   }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','EL numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        Intentos++;
        limpiarCaja();
   }
   return
}

function limpiarCaja(){ //limpia la caja del input cuando el usuario falla en el intento
    document.querySelector('#valorDeUsuario').value=""; 
}

function GenerarnumeroSecreto() { //funcion recursiva
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; //metodo que crea un numero secreto al azar y retorna un tipo de dato number
    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados); //para visualizar el arreglo 

    //preguntamos si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length ==numeroMaximo){ //validador para que no se cree un bucle cuando se completen todos los numeros
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')

    }else{
            //si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){ //lo que hace el metodo include recorre toda la lista y revisa si el numero ya existe 
        return GenerarnumeroSecreto();  //Genera recursivamente ese mismo metodo para generar otro metodo
 
    }else{
        listaNumerosSorteados.push(numeroGenerado); 
        return numeroGenerado; 
      }
    }
}

function condicionesInicales(){
 asignarTextoElemento('h1', "Juego del numero secreto"); //aqui se pasan como parametros los valores que queremos para la funcion
 asignarTextoElemento('p', `Escoge un numero del 1 al ${numeroMaximo}`);
 numeroSecreto = GenerarnumeroSecreto();
 Intentos=1;
}

function reiniciarJuego(){
    //reiniciar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    condicionesInicales();
     document.querySelector('#reiniciar').setAttribute('disabled','true'); //MIentras no haya ganado desactiva el boton reinicia el juego

}

// function numeroMayor(numero1, numero2){
//     if(numero1>numero2){
//         return numero1;
//     }else{
//         return numero2;
//     }

// }


//aqui mando a llamar a los metodos para que se muestren
//console.log(numeroMayor(100, 200));
condicionesInicales();

//ctrl + F es para buscar;  ctrl + K + C
