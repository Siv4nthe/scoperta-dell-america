/**
 * Orizzonti Sconosciuti - Logica Dinamica di Animazione
 * Sviluppato per la classe 3C Informatica
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL (Effetto comparsa fluida elementi allo scroll)
    const elementiDaAnimare = document.querySelectorAll('.scroll-reveal');
    
    const opzioniReveal = {
        threshold: 0.15,          // L'elemento si attiva quando è visibile al 15%
        rootMargin: "0px 0px -40px 0px"
    };

    const osservatoreReveal = new IntersectionObserver((voci, observer) => {
        voci.forEach(voce => {
            if (voce.isIntersecting) {
                voce.target.classList.add('revealed');
                observer.unobserve(voce.target); // Ferma l'osservazione per ottimizzare la RAM
            }
        });
    }, opzioniReveal);

    elementiDaAnimare.forEach(elemento => osservatoreReveal.observe(elemento));

    // 2. MANAGEMENT DEL TASTO SMART "TORNA IN ALTO"
    const btnBackToTop = document.getElementById("backToTop");

    if (btnBackToTop) {
        window.addEventListener("scroll", () => {
            // Appare solo se l'utente ha sceso più di 350px di pagina
            if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
                btnBackToTop.style.display = "block";
            } else {
                btnBackToTop.style.display = "none";
            }
        });

        // Click con ritorno morbido e preciso
        btnBackToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
