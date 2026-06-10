
/*SECCION DE SERVICIOS BEGIN */
const btnCore = document.getElementById("btnCore");
const btnEcommerce = document.getElementById("btnEcommerce");

const coreSolutions = document.getElementById("coreSolutions");
const ecommerceSolutions = document.getElementById("ecommerceSolutions");

btnCore.addEventListener("click", () => {
    coreSolutions.classList.remove("hidden");
    ecommerceSolutions.classList.add("hidden");
});

btnEcommerce.addEventListener("click", () => {
    ecommerceSolutions.classList.remove("hidden");
    coreSolutions.classList.add("hidden");
});

/***SECCION DE SERVICIOS END */