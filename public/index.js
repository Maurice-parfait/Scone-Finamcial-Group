// // scrollTrigger
// // Assurez-vous que le DOM est complètement chargé
// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     // Fonction pour déclencher l'animation
//     const animateElement = (element) => {
//         gsap.fromTo(element, 
//             {
//                 opacity: 0,  // Opacité initiale
//                 y: 50,        // Décalage vertical initial
//             }, 
//             {
//                 opacity: 1,   // Opacité finale
//                 y: 0,         // Position finale
//                 duration: 1,  // Durée de l'animation
//                 overwrite: "auto" // Écraser les animations précédentes
//             }
//         );
//     };

//     // Configuration de ScrollTrigger
//     ScrollTrigger.create({
//         trigger: '.bienvenu', // L'élément qui déclenche l'animation
//         start: 'top 80%', // Début de l'animation
//         onEnter: () => animateElement('.bienvenu'), // Déclenche l'animation lorsque l'élément entre dans la vue
//         onEnterBack: () => animateElement('.bienvenu'), // Déclenche l'animation lorsque l'élément entre à nouveau dans la vue en défilant vers le haut
//         toggleActions: 'play none none reverse', // Actions de toggle, optionnel ici
//         duration: 1,
//     });

//     ScrollTrigger.create({
//         trigger: '.untexte', // L'élément qui déclenche l'animation
//         start: 'top 90%', // Début de l'animation
//         onEnter: () => animateElement('.untexte'), // Déclenche l'animation lorsque l'élément entre dans la vue
//         onEnterBack: () => animateElement('.untexte'), // Déclenche l'animation lorsque l'élément entre à nouveau dans la vue en défilant vers le haut
//         toggleActions: 'play none none reverse', // Actions de toggle, optionnel ici
//         duration: 2,

//     });

//     ScrollTrigger.create({
//         trigger: '.scone', // L'élément qui déclenche l'animation
//         start: 'top 80%', // Début de l'animation
//         onEnter: () => animateElement('.scone'), // Déclenche l'animation lorsque l'élément entre dans la vue
//         onEnterBack: () => animateElement('.scone'), // Déclenche l'animation lorsque l'élément entre à nouveau dans la vue en défilant vers le haut
//         toggleActions: 'play none none reverse', // Actions de toggle, optionnel ici
//         duration: 3,
//     });
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

// Sélectionnez tous les éléments <li> avec la classe "link"
document.querySelectorAll('#navscrol .link').forEach(item => {
    item.addEventListener('click', () => {
        document.getElementById('menu').classList.add('max-lg:hidden');
    });
});
