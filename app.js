'use strict'

const buttonAuto = document.getElementById("auto");
const carrosel = document.querySelector(".carrosel");

buttonAuto.addEventListener("click", () => {
    carrosel.classList.add("rodando");
});