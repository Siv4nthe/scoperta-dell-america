# scoperta-dell-america
pcto sulle scoperte dell'america: Santoro; Gennaro; Vitale; Olivero.
Funzionalità del progetto
1. Dark Mode / Light Mode

Il sito permette di cambiare tema:

modalità chiara
modalità scura

Funziona tramite:

CSS Variables
JavaScript
localStorage

Il tema scelto rimane salvato anche dopo aver chiuso il browser.

2. Loader iniziale

All’apertura compare una schermata di caricamento con:

animazione della bussola
effetto fade-out finale

Serve per migliorare l’esperienza utente.

3. Navbar sticky

La barra di navigazione:

rimane fissa in alto
segue l’utente durante lo scroll

Migliora la navigazione del sito.

4. Smooth Scroll

Quando si clicca un link interno:

la pagina scorre lentamente
il movimento è fluido

Implementato con:

scroll-behavior: smooth;
5. Scroll Reveal Animation

Gli elementi appaiono mentre scorri la pagina.

Tecnologia usata:

IntersectionObserver
classi CSS dinamiche

Effetto:

fade-in
movimento graduale
6. Pulsante “Torna Su”

Quando l’utente scende nella pagina:

compare un bottone
cliccandolo si torna in alto

Con animazione smooth.

7. Hero dinamici

Ogni navigatore ha:

immagine dedicata
overlay scuro
titolo personalizzato
8. Design Responsive

Il sito si adatta a:

PC
tablet
smartphone

Usando:

Flexbox
media queries
layout fluidi
Struttura del progetto
Cartelle e file principali
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
│   ├── immagini
│   └── icone
│
└── README.md
Ruolo dei file
File	Funzione
index.html	homepage
pagine navigatori	contenuti storici
style.css	stile generale
navigatori.css	stili specifici
main.js	interazioni dinamiche
assets/	immagini e risorse
Come funziona il progetto
1. Caricamento iniziale

Quando il sito si apre:

HTML costruisce la pagina
CSS applica grafica e layout
JS attiva le funzionalità dinamiche
2. Attivazione tema

JavaScript:

controlla il tema salvato
applica dark/light mode
aggiorna il bottone
3. Loader

Durante il caricamento:

il loader copre la pagina
a caricamento completato scompare
4. Scroll dinamico

Durante lo scroll:

gli elementi vengono osservati
quando entrano nello schermo:
parte animazione
compare contenuto
5. Gestione eventi

JavaScript usa:

addEventListener()

per ascoltare:

click
scroll
caricamento pagina
Architettura tecnica

Il progetto segue il modello:

Separazione delle responsabilità
Tecnologia	Responsabilità
HTML	struttura
CSS	grafica
JS	comportamento

Questa è una pratica professionale molto importante.

Tecnologie utilizzate
HTML5

Usato per:

struttura semantica
sezioni
contenuti
CSS3

Usato per:

layout
animazioni
responsive design
dark mode

Tecniche moderne:

CSS Variables
Flexbox
transitions
keyframes
JavaScript Vanilla

Senza framework.

Usato per:

gestione DOM
eventi
localStorage
animazioni dinamiche
Uso di GitHub
Cos’è GitHub

GitHub è una piattaforma online usata per:

salvare codice
collaborare
versionare progetti
Git vs GitHub
Git	GitHub
sistema di versionamento	piattaforma online
lavora in locale	lavora nel cloud
Come viene usato nel progetto
1. Repository

Il progetto viene salvato in un repository:

git init
2. Salvataggio modifiche

Ogni modifica può essere salvata con:

git add .
git commit -m "descrizione"
3. Backup online

Con:

git push

il progetto viene caricato su GitHub.

Vantaggi di GitHub
Cronologia modifiche

Puoi vedere:

chi ha modificato
quando
cosa è cambiato
Recupero versioni

Se qualcosa si rompe:

puoi tornare indietro
Collaborazione

Più persone possono lavorare insieme.

Hosting del sito

Con GitHub Pages il sito può essere pubblicato online gratuitamente.

Workflow tipico del progetto
Fase 1 — sviluppo
scrittura HTML
creazione CSS
aggiunta JS
Fase 2 — test

Controllo:

responsive
animazioni
bug
Fase 3 — commit Git

Salvataggio modifiche:

git commit
Fase 4 — pubblicazione

Upload su GitHub:

git push
Aspetti moderni del progetto

Il progetto usa concetti abbastanza avanzati:

dark mode persistente
observer API
CSS variables
responsive design
DOM dinamico
localStorage
animazioni fluide
Possibili miglioramenti futuri
Tecnici
ottimizzazione immagini
lazy loading
accessibilità
SEO
Grafici
animazioni avanzate
transizioni 3D
effetti parallax
Funzionali
ricerca interna
timeline interattiva
quiz storico
mappe esplorazioni
