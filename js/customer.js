/*
    Desenvolvido por: SuporteTecWeb
*/

//Criado o efeito do menu
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

//Menu responsivo
function toggle(){
    var header = document.querySelector("header");
    header.classList.toggle("active");
}