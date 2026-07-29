// ===============================
// Nuestra Historia ❤️
// Alan & María Isabel
// ===============================

// Fecha de inicio de la relación
const fechaInicio = new Date("2022-07-24T00:00:00");

// Elementos del contador
const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// Actualizar contador
function actualizarContador() {

    const ahora = new Date();

    const diferencia = ahora - fechaInicio;

    const totalSegundos = Math.floor(diferencia / 1000);

    const d = Math.floor(totalSegundos / 86400);
    const h = Math.floor((totalSegundos % 86400) / 3600);
    const m = Math.floor((totalSegundos % 3600) / 60);
    const s = totalSegundos % 60;

    dias.textContent = d;
    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

}

setInterval(actualizarContador,1000);

actualizarContador();


// Botón comenzar con música 🎵
function irHistoria(){

    const musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    document.getElementById("historia").scrollIntoView({
        behavior:"smooth"
    });

}


// ==========================
// Lluvia de corazones
// ==========================

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.innerHTML="❤️";

    corazon.style.position="fixed";
    corazon.style.left=Math.random()*100+"vw";
    corazon.style.top="-30px";
    corazon.style.fontSize=(20+Math.random()*25)+"px";
    corazon.style.pointerEvents="none";
    corazon.style.zIndex="9999";

    document.body.appendChild(corazon);

    let y=-30;

    const caer=setInterval(()=>{

        y+=4;

        corazon.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(caer);

            corazon.remove();

        }

    },20);

}


// Botón Te Amo
document.getElementById("amor").addEventListener("click",()=>{

    for(let i=0;i<150;i++){

        setTimeout(crearCorazon,i*60);

    }

    setTimeout(()=>{

        alert("❤️ Feliz Aniversario ❤️\n\nMaría Isabel...\n\nGracias por hacer mi vida más feliz.\n\nTe amo infinitamente.\n\nCon amor,\nAlan ❤️");

    },3000);

});
// ==========================
// Música de nuestra historia 🎵
// ==========================

function irHistoria(){

    const musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    document.getElementById("historia").scrollIntoView({
        behavior:"smooth"
    });

}
