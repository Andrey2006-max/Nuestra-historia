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


// ==========================
// Botón Te Amo ❤️
// ==========================

document.getElementById("amor").addEventListener("click",()=>{

    for(let i=0;i<150;i++){

        setTimeout(crearCorazon,i*60);

    }

    setTimeout(()=>{

        alert(
        "❤️ Feliz Aniversario María Isabel ❤️\n\n" +
        "Gracias por cada momento juntos.\n\n" +
        "Gracias por tu amor, tu paciencia y tus sonrisas.\n\n" +
        "Quiero seguir creando recuerdos contigo.\n\n" +
        "Te amo muchísimo ❤️\n\n" +
        "Con amor,\nAlan ❤️"
        );

    },3000);

});


// ==========================
// Pétalos de rosa 🌹
// ==========================

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.innerHTML = "🌹";

    petalo.style.position = "fixed";
    petalo.style.top = "-20px";
    petalo.style.left = Math.random()*100 + "vw";
    petalo.style.fontSize = (15 + Math.random()*20) + "px";
    petalo.style.zIndex = "9999";
    petalo.style.pointerEvents = "none";

    document.body.appendChild(petalo);

    let y = -20;

    const caer = setInterval(()=>{

        y += 3;

        petalo.style.top = y + "px";

        petalo.style.transform =
        "rotate(" + y + "deg)";

        if(y > window.innerHeight){

            clearInterval(caer);
            petalo.remove();

        }

    },30);

}


setInterval(crearPetalo,800);
// ==========================
// Álbum de fotos ❤️📸
// ==========================

function abrirFoto(imagen){

    console.log("Foto abierta");

    const visor = document.getElementById("visor");
    const fotoGrande = document.getElementById("fotoGrande");

    if(visor && fotoGrande){

        fotoGrande.src = imagen.src;

        visor.style.display = "flex";

    }else{

        console.log("No existe el visor");

    }

}


function cerrarFoto(){

    const visor = document.getElementById("visor");

    if(visor){

        visor.style.display = "none";

    }

}