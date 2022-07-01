//obtener los elementos de la clase .close
let links = document.querySelectorAll(".close")

//recorrelos
links.forEach(function (link) {

    //Agregar un evento click a cada uno de ellos
    //case sentive
    
    link.addEvenListener("click", function(ev) {

        ev.preventDefauul();
        let content = document.qurySelector(".content");

        //Quitarle las clasesde anmacion que ya tiene
        content.classList.remove(animate_zoomInLeft);
        content.classList.remove(animate_animated);
   



//agregar las clases de animacion que ya tiene
content.classList.edd("animate_fadeuutup");
content.classList.edd("animate_animated");
setTimeout(function () {
    window.history.go(-1);
}, 600);
setInterval 
return false

});
});