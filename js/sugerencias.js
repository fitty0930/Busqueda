document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    let textbuscar = document.getElementById("buscar");
    textbuscar.onkeyup = function () {
        buscar();
    }

    let textresaltar = document.getElementById("resaltar");
    textresaltar.onkeyup = function () {
        resaltar();
    }



    function buscar() {
        let valorabuscar = document.getElementById('buscar').value.toLowerCase().trim();
        let tabla_tr = document.getElementsByTagName("tbody")[0].rows;
        for (let i = 0; i < tabla_tr.length; i++) {
            let tr = tabla_tr[i];
            let textotr = tr.innerText.toLowerCase();
            tr.className = (textotr.indexOf(valorabuscar) != -1) ? "mostrar" : "ocultar";
            // operador ternario
        }
    }

    function resaltar() {
        let valoraresaltar = document.getElementById('resaltar').value.toLowerCase().trim();
        let tabla_tr = document.getElementsByTagName("tbody")[0].rows;
        if (valoraresaltar != "") {
            for (let i = 0; i < tabla_tr.length; i++) {
                let tr = tabla_tr[i];
                let textotr = tr.innerText.toLowerCase();
                tr.className = (textotr.indexOf(valoraresaltar) != -1) ? "resaltado" : "noresaltado";
                // operador ternario
            }
        } else {
            for (let i = 0; i < tabla_tr.length; i++) {
                let tr = tabla_tr[i];
                tr.classList.remove("resaltado");
            }
        }
    }

});