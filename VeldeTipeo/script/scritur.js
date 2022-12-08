// palabras contenidas pre-cargadas
var listado_palabras = ["PERRO", "GATO", "AVION","COMPUTADORA","ALBERTO","LUPITA","CONEJO","GATO","TELEVISION",
"BANDERA","CABALLO","BURRO","TELEFONO","PLANETA","HONOR","RESPETO","BARCO","MEMORIA","OSO","PEZ",
"VENTANA","SILLA","CAMA","PUERTA","PELOTA","MARCOS","SALIDA","BIENVENIDO","MEMORAMA","CABELLO","ETHERNET","MEXICO",
"ZAPATO","DANIELA","KILO","PELUCHE","CANCION","DINAMITA","LENTES","GLOBO","CAMISETA","PANTALLA","DOCTOR","INGENIERO",
"SECRETARIA","CONTABILIDAD","TAVOS","PIZZA","CAJA","ARBOL","FLOR","RANA","ROBOT","ANTIVIRUS","MONEDA","CABLE","PAPEL",
"ESTRELLA","GALAXIA","RUEDA"];

var acertadas = 0;
var timer, indice;
var tiempo = 60;

function comenzarJuego() {
    //se deja visible la pantalla  y se despues se oculta  la segunda ventana 
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "block";
    document.getElementById("final").style.display = "none";

    //cursor en input
    document.getElementById("palabra_ingresada").focus();
    //se carga la palabra
    cargarPalabra();

    //tiempo - cada segundo al al funcion restar tiempo este es el contador de tiempo
    timer = setInterval('restarTiempo()', 1000);
}

//----------funcion de carga de palabras random
function cargarPalabra(){
    //genera la posicion de forma aleatoria
    indice = Math.round(Math.random()*(listado_palabras.length-1));
    document.getElementById("palabra").innerHTML = listado_palabras[
    indice];

    //se elimina la posicion  ya mostrada
    listado_palabras.splice(indice,1);
}

//------funcion que compara la palabra  ingresada con la palabra mostrada
function comparar(){
    var palabra_mostrada = document.getElementById("palabra").innerHTML;
    var palabra_tecleada = document.getElementById("palabra_ingresada").value;
//se convierte toda la palabra tecleada a MAYUSC
palabra_tecleada = palabra_tecleada.toUpperCase();

if(palabra_mostrada==palabra_tecleada){
    acertadas++;
    document.getElementById("palabra_ingresada").value="";
agregarNodo(palabra_tecleada);
cargarPalabra();  //carga otra palabra    
    }

}
function agregarNodo(palabra){
    var span = document.createElement('span');
    span.innerHTML = palabra;
    document.getElementById("registro").appendChild(span);
}
//-------------------funcion contadora de tiempo
function restarTiempo(){
    tiempo--;
    document.getElementById("tiempo").innerHTML = tiempo;
    if(tiempo == 0){
        //se detiene el tiempo
        clearInterval(timer);
        document.getElementById("juego").style.display = "none";
        document.getElementById("final").style.display = "block";
        document.getElementById("cantidad_final").innerHTML = acertadas;
        
        }
}
