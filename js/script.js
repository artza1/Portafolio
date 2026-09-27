const modal = document.querySelector("#modal");
const modalTitulo = document.querySelector("#h3-modal");
const modalDescripcion = document.querySelector("#p-modal");
const cerrar = document.querySelector("#cerrar-modal");
const Mimg =  document.querySelector("#img-modal")
const modalContenido = document.querySelector(".contenido-modal")
const tecmodal = document.querySelector("#tech-modal")


const btnVM = document.querySelectorAll(".btnVM")
btnVM.forEach(function(boton){
    boton.addEventListener("click", function(event){
        
        const nombre=event.currentTarget.parentElement.parentElement.querySelector("h3").textContent
        console.log(nombre)
        const descripcion=  event.currentTarget.parentElement.parentElement.querySelector("p").textContent
        console.log(descripcion)
        const img= event.currentTarget.parentElement.parentElement.querySelector("img")
        const imagen= img.getAttribute("src")

        const imagenes = [];

        if (nombre == "Fakestore"){
            imagenes.push(
                "assets/img/proyecto1.webp",
                "assets/img/proyecto1.1.webp",
                "assets/img/proyecto1.2.webp",
                "assets/img/proyecto1.3.webp"
            )}else if(nombre == "SpaceX"){
                imagenes.push(
                    "assets/img/proyecto2.webp",
                    "assets/img/proyecto2.1.webp",
                    "assets/img/proyecto2.2.webp",
                    "assets/img/proyecto2.3.webp",
                )
            }else{
                imagenes.push("assets/img/proyecto3.webp",)
            }

            let imagenActual = 0;

            const anterior = document.getElementById("anterior");
            const siguiente = document.getElementById("siguiente");

            siguiente.addEventListener("click", function() {
                imagenActual++;
                if (imagenActual >= imagenes.length) {
                    imagenActual = 0;
                }
                Mimg.src = imagenes[imagenActual];
            });



            anterior.addEventListener("click", function() {
                imagenActual--;
                if (imagenActual < 0) {
                    imagenActual = imagenes.length - 1;
                }
                Mimg.src = imagenes[imagenActual];
            });
        modalTitulo.textContent=nombre
        modalDescripcion.textContent=descripcion
        Mimg.setAttribute('src', imagen)

        modal.style.display = "flex"

    })
})

modal.addEventListener("click", (e)=>{
    if(!modalContenido.contains(e.target)){
        modal.style.display ="none"
    }
})
cerrar.addEventListener("click", function(){
    modal.style.display ="none"
})




