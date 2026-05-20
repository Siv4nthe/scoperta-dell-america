/**
 * Orizzonti Sconosciuti - Engine Logico Avanzato v2.0
 * Gestione Tema Dinamico Senza Modifica HTML & Scroll Effects
 */

// Eseguiamo il controllo del tema prima del caricamento completo della pagina per evitare flash bianchi fastidiosi
(function() {
    const savedTheme = localStorage.getItem("orizzonti-theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
})();

window.addEventListener("load", () => {
    // DISATTIVAZIONE CINEMATIC LOADER
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 600);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // INIEZIONE INTELLIGENTE DEL PULSANTE CAMBIO TEMA NELLA NAVBAR
    const navbar = document.querySelector("nav");
    if (navbar) {
        const toggleBtn = document.createElement("button");
        toggleBtn.className = "theme-toggle-btn";
        toggleBtn.setAttribute("aria-label", "Cambia tema visivo");
        
        // Imposta l'icona corretta all'avvio
        const currentTheme = document.documentElement.getAttribute("data-theme");
        toggleBtn.innerHTML = currentTheme === "dark" ? "☀️ Chiaro" : "🌙 Scuro";
        
        // Aggiunge il pulsante alla fine dei link di navigazione esistenti
        navbar.appendChild(toggleBtn);

        // Listener logico per lo switch del tema
        toggleBtn.addEventListener("click", () => {
            const activeTheme = document.documentElement.getAttribute("data-theme");
            
            if (activeTheme === "dark") {
                document.documentElement.setAttribute("data-theme", "light");
                localStorage.setItem("orizzonti-theme", "light");
                toggleBtn.innerHTML = "🌙 Scuro";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("orizzonti-theme", "dark");
                toggleBtn.innerHTML = "☀️ Chiaro";
            }
        });
    }
    
    // SCROLL REVEAL FLUIDO (Intersection Observer API)
    const elementiReveal = document.querySelectorAll('.scroll-reveal');
    
    const configurazioneReveal = {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
    };

    const osservatorePagine = new IntersectionObserver((voci, observer) => {
        voci.forEach(voce => {
            if (voce.isIntersecting) {
                voce.target.classList.add('revealed');
                observer.unobserve(voce.target); // Rilascia memoria
            }
        });
    }, configurazioneReveal);

    elementiReveal.forEach(el => osservatorePagine.observe(el));

    // BOTTONE TIMONE / RITORNO IN ALTO
    const bottoneTimone = document.getElementById("backToTop");
    if (bottoneTimone) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
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
