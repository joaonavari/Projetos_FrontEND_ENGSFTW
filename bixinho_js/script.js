const bicho = document.getElementById("bicho");
const btn = document.getElementById("btn");

const estados = {
    normal: "gonbicho.png",
    clicado: "gonbichoC.png",
    alimentado: "gonbichoF.png",
    fome30: "gonbichoB.png",
    fome60: "gonbichoM.png",
}

let contador = 0;
let intervalo = null;
let time_Click = null;
let time_Out = null;


function init_cont (){
    if(intervalo) clearInterval(intervalo);

    intervalo = setInterval( ()=> {
        contador++;
        console.log("Tempo:", contador);

        if (contador == 10){
            bicho.src = estados.fome30
        }
        if (contador == 20){
            bicho.src = estados.fome60
        }
        
    }, 1000);
}

function alimentar(){
    bicho.crc = estados.comendo;
    contador = 0; 
    console.log("Comendo");

    if (time_Click) clearInterval(setTimeout)

        time_Click = setTimeout(()=>{
            bicho.src = estados.alimentado;
                
            time_Out = setTimeout(() => {
                    bicho.src = estados.normal;
                }, 2000);
        }, 1000);
}

init_cont();
