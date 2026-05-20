/**
 * Orizzonti Sconosciuti - Engine Logico Avanzato
 * Sviluppato per 3C Informatica
 */

window.addEventListener("load", () => {
    // 1. DISATTIVAZIONE CINEMATIC LOADER
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800); // Mantiene il loader visibile per meno di un secondo per dare impatto visivo
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 2. SCROLL REVEAL (Intersection Observer API)
    const elementiReveal = document.querySelectorAll('.scroll-reveal');
    
    const configurazioneReveal = {
        threshold: 0.1,          // L'elemento si attiva appena entra del 10% nello schermo
        rootMargin: "0px 0px -30px 0px"
    };

    const osservatorePagine = new IntersectionObserver((voci, observer) => {
        voci.forEach(voce => {
            if (voce.isIntersecting) {
                voce.target.classList.add('revealed');
                observer.unobserve(voce.target); // Libera memoria RAM
            }
        });
    }, configurazioneReveal);

    elementiReveal.forEach(el => osservatorePagine.observe(el));

    // 3. LOGICA PULSANTE SMART "TORNA IN ALTO" (SMOOTH SCROLL)
    const bottoneTimone = document.getElementById("backToTop");

    if (bottoneTimone) {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                bottoneTimone.style.display = "block";
            } else {
                bottoneTimone.style.display = "none";
            }
        });

        bottoneTimone.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
