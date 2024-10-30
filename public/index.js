// const sr = ScrollReveal();

// sr.reveal('#lanav', {
//     origin : 'top',
//     duration : 1000,
// });

const navscrol = document.getElementById("navscrol");
const icone_btn = document.getElementById("btn_icone");
const closemenu = document.getElementById("closemenu");
const menu = document.getElementById("menu");


// pour le modal
const open_modals = document.querySelectorAll(".open_modal");
const modal = document.querySelectorAll(".mymodal");
const close_modals = document.querySelectorAll(".close_modal");
const body = document.querySelector("body")

// open modal
open_modals.forEach(button => {
    button.addEventListener('click', () =>{
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        body.classList.add('overflow-hidden');
    });
});

// close modal
close_modals.forEach(closebutton => {
    closebutton.addEventListener('click', () => {
        const modal = closebutton.closest('.mymodal');
        modal.classList.add('hidden');
        body.classList.remove('overflow-hidden');
    });
});


// pour le scroll
// window.addEventListener("scroll", ()=>{
//     if (window.scrollY >= 50) {
//         navscrol.classList.add("bg-slate-900");
//     }else{
//         navscrol.classList.remove("bg-slate-900");
//     }
// });

icone_btn.addEventListener('click', function(){
    menu.classList.remove("max-lg:hidden");
    menu.classList.remove("max-md:hidden");

}); 

closemenu.addEventListener('click', () => {
    menu.classList.add('max-lg:hidden');
    menu.classList.add("max-md:hidden");
});

// close menu lg 

function closeMenulg() {
    document.getElementById("menu").classList.add("max-lg:hidden");
}
