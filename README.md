README — Progetto PTO: Le Scoperte dell’America
Autori

Santoro · Gennaro · Vitale · Olivero

🌍 Le Scoperte dell’America

Sito web storico dedicato ai grandi navigatori che hanno contribuito alla scoperta e all’esplorazione del Nuovo Mondo.

Il progetto è stato realizzato utilizzando tecnologie web moderne come HTML5, CSS3 e JavaScript Vanilla, con particolare attenzione a:

design moderno
animazioni fluide
esperienza utente
responsive design
organizzazione professionale del codice
✨ Funzionalità del Progetto
🌙 Dark Mode / Light Mode

Il sito permette di cambiare tema tra:

modalità chiara
modalità scura
Tecnologie utilizzate
CSS Variables
JavaScript
localStorage

Il tema scelto viene salvato automaticamente e rimane attivo anche dopo aver chiuso il browser.

🧭 Loader iniziale

All’apertura del sito compare una schermata di caricamento con:

animazione della bussola
effetto fade-out finale

Questa funzione migliora l’esperienza utente e rende il caricamento più moderno e dinamico.

📌 Navbar Sticky

La barra di navigazione rimane sempre visibile durante lo scroll della pagina.

Vantaggi
navigazione più comoda
accesso rapido alle sezioni
migliore usabilità
🎯 Smooth Scroll

Quando l’utente clicca un link interno, la pagina scorre in modo fluido e graduale.

Implementazione
scroll-behavior: smooth;
✨ Scroll Reveal Animation

Gli elementi compaiono gradualmente durante lo scroll della pagina.

Tecnologie utilizzate
IntersectionObserver API
classi CSS dinamiche
Effetti visivi
fade-in
movimento graduale
comparsa animata dei contenuti
⬆️ Pulsante “Torna Su”

Quando l’utente scende nella pagina compare un pulsante che permette di tornare rapidamente all’inizio del sito.

Caratteristiche
comparsa automatica
scroll animato
maggiore comodità di navigazione
🖼️ Hero Dinamici

Ogni navigatore possiede una sezione hero personalizzata con:

immagine dedicata
overlay scuro
titolo dinamico
descrizione storica

Navigatori presenti:

Cristoforo Colombo
Amerigo Vespucci
Ferdinando Magellano
Giovanni Caboto
📱 Design Responsive

Il sito si adatta automaticamente a:

PC
tablet
smartphone
Tecniche utilizzate
Flexbox
media queries
layout fluidi
📂 Struttura del Progetto
progetto/
│
├── index.html
├── colombo.html
├── vespucci.html
├── magellano.html
├── caboto.html
│
├── css/
│   ├── style.css
│   └── navigatori.css
│
├── js/
│   └── main.js
│
├── assets/
│   ├── immagini/
│   └── icone/
│
└── README.md
📄 Ruolo dei File
File	Funzione
index.html	Homepage principale
pagine navigatori	Contenuti storici dedicati
style.css	Stile generale del sito
navigatori.css	Stili specifici delle pagine
main.js	Funzionalità dinamiche
assets/	Immagini e risorse grafiche
⚙️ Come Funziona il Progetto
1️⃣ Caricamento iniziale

Quando il sito viene aperto:

HTML costruisce la struttura della pagina
CSS applica grafica e layout
JavaScript attiva le funzionalità dinamiche
2️⃣ Gestione del Tema

JavaScript:

controlla il tema salvato
applica dark/light mode
aggiorna il pulsante del tema
3️⃣ Loader

Durante il caricamento:

il loader copre temporaneamente la pagina
una volta completato il caricamento scompare con animazione
4️⃣ Scroll Dinamico

Durante lo scroll:

gli elementi vengono osservati
quando entrano nello schermo:
parte l’animazione
compare il contenuto
5️⃣ Gestione Eventi

JavaScript utilizza:

addEventListener()

per gestire:

click
scroll
caricamento pagina
interazioni utente
🏗️ Architettura Tecnica

Il progetto segue il principio della:

Separazione delle responsabilità
Tecnologia	Responsabilità
HTML	Struttura
CSS	Grafica
JavaScript	Comportamento

Questa organizzazione è una pratica molto importante nello sviluppo web moderno.

💻 Tecnologie Utilizzate
HTML5

Utilizzato per:

struttura semantica
organizzazione contenuti
sezioni del sito
CSS3

Utilizzato per:

layout responsive
animazioni
dark mode
effetti grafici
Tecniche moderne usate
CSS Variables
Flexbox
transitions
keyframes
media queries
JavaScript Vanilla

Il progetto non utilizza framework esterni.

JavaScript viene usato per:

gestione DOM
eventi
localStorage
animazioni dinamiche
interazioni utente
🐙 Uso di GitHub
Cos’è GitHub

GitHub è una piattaforma online utilizzata per:

salvare codice
collaborare
versionare progetti
pubblicare siti web
🔄 Git vs GitHub
Git	GitHub
Sistema di versionamento	Piattaforma online
Lavora in locale	Lavora nel cloud
Gestisce modifiche	Condivide progetti
🚀 Come viene usato nel progetto
1️⃣ Creazione Repository
git init
2️⃣ Salvataggio modifiche
git add .
git commit -m "descrizione modifica"
3️⃣ Backup Online
git push

Il progetto viene caricato online su GitHub.

✅ Vantaggi di GitHub
📜 Cronologia modifiche

Permette di vedere:

chi ha modificato
quando
cosa è stato cambiato
🔙 Recupero versioni

Se qualcosa si rompe:

è possibile tornare a versioni precedenti
👥 Collaborazione

Più persone possono lavorare contemporaneamente sullo stesso progetto.

🌐 Hosting gratuito

Con GitHub Pages il sito può essere pubblicato online gratuitamente.

🔄 Workflow del Progetto
Fase 1 — Sviluppo
scrittura HTML
creazione CSS
aggiunta JavaScript
Fase 2 — Test

Controllo di:

responsive design
animazioni
bug
compatibilità
Fase 3 — Commit Git
git commit

Salvataggio delle modifiche.

Fase 4 — Pubblicazione
git push

Upload del progetto su GitHub.

🚀 Aspetti Moderni del Progetto

Il sito utilizza tecnologie e concetti avanzati come:

dark mode persistente
IntersectionObserver API
CSS Variables
responsive design
DOM dinamico
localStorage
animazioni fluide
🔮 Possibili Miglioramenti Futuri
Tecnici
ottimizzazione immagini
lazy loading
accessibilità avanzata
SEO
Grafici
animazioni 3D
effetti parallax
timeline animate
Funzionali
ricerca interna
quiz storico
mappe interattive
timeline delle esplorazioni
📚 Conclusione

Questo progetto rappresenta un esempio di sito web moderno sviluppato con tecnologie front-end fondamentali.

Oltre ai contenuti storici sulle scoperte dell’America, il sito dimostra l’utilizzo pratico di:

sviluppo responsive
animazioni web
gestione dinamica del DOM
versionamento con GitHub
organizzazione professionale del codice

Un progetto pensato per unire:
