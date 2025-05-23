// Domenii carieră
const domenii = [
  "IT & Programare", "Medicină", "Psihologie", "Business & Management",//0
  "Marketing & Vânzări", "Drept & Justiție", "Educație & Pedagogie", "Inginerie",//4
  "Construcții & Urbanism", "Arte Vizuale", "Design & Modă", "Film & Teatru",//8
  "Muzică", "Sport & Kinetoterapie", "Jurnalism & Comunicare", "Turism & Ospitalitate",//12
  "Știință & Cercetare", "Mediu & Ecologie", "Politică & Administrație",//16
  "Agricultură & Alimentație", "Armată & Securitate", "Transport & Logistică",//19
  "Estetică & Îngrijire Personală", "Gastronomie & Bucătărie",//22
  "Comunicare digitală & Media", "Servicii Sociale", "Energie & Resurse", "Industrie & Producție"//24
];

// Întrebări și domeniile cu punctajele acordate dacă se răspunde "Da"
const intrebari = [
  { text: "Îți place să rezolvi probleme logice sau să scrii cod?", domenii: [{id:0, puncte:2}] },
  { text: "Te pasionează biologia sau ai visat să ajuți oameni bolnavi?", domenii: [{id:1, puncte:2}] },
  { text: "Îți place să asculți și să înțelegi oamenii în profunzime?", domenii: [{id:2, puncte:2}] },
  { text: "Ești interesat(ă) de afaceri, organizare și leadership?", domenii: [{id:3, puncte:2}] },
  { text: "Îți place să convingi oamenii sau să creezi reclame?", domenii: [{id:4, puncte:2}] },
  { text: "Te atrage ideea de justiție și vrei să aperi dreptatea?", domenii: [{id:5, puncte:2}] },
  { text: "Îți place să predai sau să explici lucruri altora?", domenii: [{id:6, puncte:2}] },
  { text: "Îți place să înțelegi cum funcționează mașinile sau dispozitivele?", domenii: [{id:7, puncte:2}] },
  { text: "Ești interesat(ă) de arhitectură sau urbanism?", domenii: [{id:8, puncte:2}] },
  { text: "Ai talent la desen sau îți place să creezi artă?", domenii: [{id:9, puncte:2}] },
  { text: "Te atrage lumea modei sau designul vestimentar?", domenii: [{id:10, puncte:2}] },
  { text: "Îți place să joci teatru sau să regizezi filme?", domenii: [{id:11, puncte:2}] },
  { text: "Ai o pasiune pentru muzică sau cânți la un instrument?", domenii: [{id:12, puncte:2}] },
  { text: "Faci sport des sau îți place anatomia mișcării?", domenii: [{id:13, puncte:2}] },
  { text: "Îți place să scrii, să vorbești sau să faci reportaje?", domenii: [{id:14, puncte:2}] },
  { text: "Îți place să călătorești și să lucrezi cu oameni?", domenii: [{id:15, puncte:2}] },
  { text: "Ești curios despre știință, experimente și cercetare?", domenii: [{id:16, puncte:2}] },
  { text: "Îți pasă de mediu și vrei să-l protejezi?", domenii: [{id:17, puncte:2}] },
  { text: "Te interesează viața publică și cum funcționează politica?", domenii: [{id:18, puncte:2}] },
  { text: "Ai legătură cu natura sau agricultura?", domenii: [{id:19, puncte:2}] },
  { text: "Îți plac regulile și ideea de a proteja oamenii?", domenii: [{id:20, puncte:2}] },
  { text: "Ești interesat(ă) de transporturi sau logistică?", domenii: [{id:21, puncte:2}] },
  { text: "Te pasionează îngrijirea personală, frumusețea sau makeupul?", domenii: [{id:22, puncte:2}] },
  { text: "Îți place să gătești sau să creezi rețete?", domenii: [{id:23, puncte:2}] },
  { text: "Te atrage crearea de conținut digital sau social media?", domenii: [{id:24, puncte:2}] },
  { text: "Vrei să ajuți persoane aflate în dificultate?", domenii: [{id:25, puncte:2}] },
  { text: "Te pasionează energia regenerabilă sau resursele naturale?", domenii: [{id:26, puncte:2}] },
  { text: "Îți place munca practică și mediul industrial?", domenii: [{id:27, puncte:2}] },
  { text: "Îți place să dezvolți software sau să programezi aplicații?", domenii: [{id:0, puncte:2}] },
  { text: "Ești interesat(ă) să studiezi și să tratezi boli complexe?", domenii: [{id:1, puncte:2}] },
  { text: "Îți place să înțelegi comportamentul uman și emoțiile?", domenii: [{id:2, puncte:2}] },
  { text: "Te atrage ideea de a conduce proiecte și echipe?", domenii: [{id:3, puncte:2}] },
  { text: "Îți place să creezi campanii de marketing eficiente?", domenii: [{id:4, puncte:2}] },
  { text: "Ești interesat(ă) de legi și cum se aplică ele?", domenii: [{id:5, puncte:2}] },
  { text: "Îți place să predai și să inspiri elevii sau studenții?", domenii: [{id:6, puncte:2}] },
  { text: "Ești fascinat(ă) de mecanică și inginerie?", domenii: [{id:7, puncte:2}] },
  { text: "Îți place să proiectezi clădiri sau spații urbane?", domenii: [{id:8, puncte:2}] },
  { text: "Ai talent să creezi opere de artă vizuală?", domenii: [{id:9, puncte:2}] },
  { text: "Te pasionează designul vestimentar și moda?", domenii: [{id:10, puncte:2}] },
  { text: "Îți place să fii pe scenă sau să regizezi piese de teatru?", domenii: [{id:11, puncte:2}] },
  { text: "Ești pasionat(ă) de muzică și interpretare?", domenii: [{id:12, puncte:2}] },
  { text: "Practici sport regulat sau te interesează kinetoterapia?", domenii: [{id:13, puncte:2}] },
  { text: "Îți place să scrii articole sau să comunici știri?", domenii: [{id:14, puncte:2}] },
  { text: "Îți place să organizezi evenimente turistice sau să lucrezi în domeniul ospitalității?", domenii: [{id:15, puncte:2}] },
  { text: "Ești curios(ă) să explorezi știința și cercetarea?", domenii: [{id:16, puncte:2}] },
  { text: "Te preocupă protejarea mediului înconjurător?", domenii: [{id:17, puncte:2}] },
  { text: "Ești interesat(ă) de politica locală și guvernare?", domenii: [{id:18, puncte:2}] },
  { text: "Ai experiență sau interes în agricultură și alimentație?", domenii: [{id:19, puncte:2}] },
  { text: "Îți place să menții ordinea și siguranța publică?", domenii: [{id:20, puncte:2}] },
  { text: "Ești pasionat(ă) de transporturi și logistică?", domenii: [{id:21, puncte:2}] },
  { text: "Îți place să oferi servicii de înfrumusețare și îngrijire?", domenii: [{id:22, puncte:2}] },
  { text: "Ești interesat(ă) să gătești și să creezi rețete delicioase?", domenii: [{id:23, puncte:2}] },
  { text: "Îți place să gestionezi conținut digital și social media?", domenii: [{id:24, puncte:2}] },
  { text: "Îți dorești să ajuți oamenii în situații dificile?", domenii: [{id:25, puncte:2}] },
  { text: "Ești pasionat(ă) de energia regenerabilă și resurse naturale?", domenii: [{id:26, puncte:2}] },
  { text: "Îți place să lucrezi în industrie și producție?", domenii: [{id:27, puncte:2}] },
  // mai multe întrebări cu domenii multiple și punctaje diferite (exemplu):
  { text: "Îți place să lucrezi cu software, tehnologie și inovație?", domenii: [{id:0, puncte:2}, {id:7, puncte:1}, {id:16, puncte:1}] }, // IT, Inginerie, Știință
  { text: "Ești pasionat de sănătate, psihologie și ajutor social?", domenii: [{id:1, puncte:2}, {id:2, puncte:1}, {id:25, puncte:1}] }, // Medicină, Psihologie, Servicii Sociale
  { text: "Îți place să coordonezi echipe și să faci marketing?", domenii: [{id:3, puncte:1}, {id:4, puncte:2}] }, // Business, Marketing
  { text: "Te interesează dreptul, justiția și administrația publică?", domenii: [{id:5, puncte:1}, {id:18, puncte:2}] }, // Drept, Politică
  { text: "Îți place să predai și să inspiri în domeniul educației?", domenii: [{id:6, puncte:2}, {id:14, puncte:1}] }, // Educație, Comunicare
  { text: "Ești interesat de arhitectură, construcții și urbanism?", domenii: [{id:8, puncte:2}, {id:21, puncte:1}] }, // Construcții, Transport
  { text: "Ai pasiune pentru arte vizuale, design și modă?", domenii: [{id:9, puncte:1}, {id:10, puncte:2}] }, // Arte Vizuale, Design & Modă
  { text: "Îți place teatrul, filmul și comunicarea?", domenii: [{id:11, puncte:2}, {id:24, puncte:1}] }, // Film & Teatru, Comunicare digitală
  { text: "Ești pasionat de muzică, sport și kinetoterapie?", domenii: [{id:12, puncte:1}, {id:13, puncte:2}] }, // Muzică, Sport
  { text: "Ți-ar plăcea să organizezi excursii, sejururi sau activități turistice?", domenii: [{id:15, puncte:2}, {id:23, puncte:1}] }, // Turism, Gastronomie
  { text: "Ești interesat de știință, mediu și energie?", domenii: [{id:16, puncte:1}, {id:17, puncte:2}, {id:26, puncte:1}] }, // Știință, Mediu, Energie
  { text: "Te pasionează agricultura, industria și producția?", domenii: [{id:19, puncte:2}, {id:27, puncte:1}] }, // Agricultură, Industrie
  { text: "Îți place să lucrezi cu securitatea și protecția?", domenii: [{id:20, puncte:2}, {id:21, puncte:1}] }, // Armată & Securitate, Transport
  { text: "Ești pasionat de înfrumusețare, gastronomie și media?", domenii: [{id:22, puncte:1}, {id:23, puncte:1}, {id:24, puncte:1}] }, // Estetică, Gastronomie, Comunicare digitală
  { text: "Îți place să ajuți în situații sociale și în politici?", domenii: [{id:18, puncte:1}, {id:25, puncte:2}] }, // Politică, Servicii Sociale
  { text: "Îți place să analizezi date și să lucrezi cu algoritmi avansați?", domenii: [{id:0, puncte:1}, {id:16, puncte:1}] }, // IT & Știință
  { text: "Te interesează să ajuți oamenii să-și gestioneze emoțiile și problemele personale?", domenii: [{id:2, puncte:1}, {id:25, puncte:1}] }, // Psihologie & Servicii Sociale
  { text: "Îți place să creezi strategii pentru dezvoltarea unei afaceri?", domenii: [{id:3, puncte:1}, {id:4, puncte:1}] }, // Business & Marketing
  { text: "Ești atras(ă) de redactarea documentelor oficiale și legislație?", domenii: [{id:5, puncte:1}, {id:18, puncte:1}] }, // Drept & Politică
  { text: "Îți place să dezvolți programe educaționale sau să organizezi cursuri?", domenii: [{id:6, puncte:1}, {id:14, puncte:1}] }, // Educație & Comunicare
  { text: "Ești interesat(ă) de noile tehnologii în construcții și materiale?", domenii: [{id:7, puncte:1}, {id:8, puncte:1}] }, // Inginerie & Construcții
  { text: "Îți place să experimentezi cu tehnici artistice noi și stiluri diverse?", domenii: [{id:9, puncte:1}, {id:11, puncte:1}] }, // Arte Vizuale & Film
  { text: "Ești atras(ă) de producția muzicală și organizarea evenimentelor muzicale?", domenii: [{id:12, puncte:1}, {id:15, puncte:1}] }, // Muzică & Turism (ospitalitate la evenimente)
  { text: "Practici activități sportive și ești interesat(ă) de sănătate fizică?", domenii: [{id:13, puncte:1}, {id:1, puncte:1}] }, // Sport & Medicină
  { text: "Îți place să analizezi impactul industriei asupra mediului și să propui soluții?", domenii: [{id:17, puncte:1}, {id:27, puncte:1}] }, // Mediu & Industrie
  { text: "Ești interesat(ă) de organizarea traficului și eficientizarea transporturilor?", domenii: [{id:21, puncte:1}, {id:18, puncte:1}] }, // Transport & Politică
  { text: "Îți place să creezi conținut digital și să dezvolți comunități online?", domenii: [{id:24, puncte:1}, {id:14, puncte:1}] }, // Comunicare digitală & Comunicare
  { text: "Ai interes în prepararea mâncărurilor tradiționale și inovative?", domenii: [{id:23, puncte:1}, {id:15, puncte:1}] }, // Gastronomie & Turism
  { text: "Îți place să oferi sfaturi pentru aspectul fizic și îngrijirea personală?", domenii: [{id:22, puncte:1}, {id:25, puncte:1}] }, // Estetică & Servicii Sociale
  { text: "Te implici în activități care ajută comunitatea sau persoanele în dificultate?", domenii: [{id:2, puncte:2}, {id:26, puncte:1}] },
  { text: "Ești pasionat de organizarea de evenimente și turism?", domenii: [{id:3, puncte:2}, {id:17, puncte:1}] },
  { text: "Îți place să scrii cod sau să dezvolți aplicații digitale?", domenii: [{id:4, puncte:2}, {id:16, puncte:1}] },
  { text: "Ai interes să ajuți pacienții și să înveți despre corpul uman?", domenii: [{id:5, puncte:2}, {id:10, puncte:1}] },
  { text: "Te atrage promovarea produselor și marketingul creativ?", domenii: [{id:6, puncte:2}, {id:19, puncte:1}] },
  { text: "Îți place să predai sau să organizezi cursuri și traininguri?", domenii: [{id:7, puncte:2}, {id:11, puncte:1}] },
  { text: "Ești interesat să proiectezi clădiri sau să studiezi urbanismul?", domenii: [{id:8, puncte:2}, {id:23, puncte:1}] },
  { text: "Ai o pasiune pentru film, teatru sau artele spectacolului?", domenii: [{id:9, puncte:2}, {id:24, puncte:1}] },
  { text: "Te implici în activități sportive și îți place să înțelegi mișcarea corpului?", domenii: [{id:10, puncte:2}, {id:5, puncte:1}] },
  { text: "Îți place să investighezi și să faci cercetări științifice?", domenii: [{id:12, puncte:2}, {id:20, puncte:1}] },
  { text: "Ești interesat să protejezi mediul și natura?", domenii: [{id:13, puncte:2}, {id:27, puncte:1}] },
  { text: "Te preocupă ordinea publică și siguranța comunității?", domenii: [{id:14, puncte:2}, {id:18, puncte:1}] },
  { text: "Îți place să optimizezi procesele tehnologice și să contribui la protecția mediului?", domenii: [{id:26, puncte:2}, {id:17, puncte:1}] },
  { text: "Te pasionează ingineria industrială și metodele de producție eficiente?", domenii: [{id:27, puncte:2}, {id:7, puncte:1}] },
  { text: "Îți place să creezi rețete noi și să lucrezi în domeniul ospitalității?", domenii: [{id:23, puncte:2}, {id:15, puncte:1}] },
  { text: "Ești interesat(ă) de cercetare științifică și de dezvoltarea tehnologiilor verzi?", domenii: [{id:16, puncte:2}, {id:26, puncte:1}] },
  { text: "Te atrage domeniul protecției și securității publice, precum și organizarea transporturilor?", domenii: [{id:20, puncte:2}, {id:21, puncte:1}] },
  { text: "Ești interesat să ajuți oamenii să înțeleagă mai bine lumea și să îi sprijini emoțional?", domenii: [{id:2, puncte:1}, {id:6, puncte:1}] },
  { text: "Îți place să organizezi evenimente și să comunici mesaje captivante?", domenii: [{id:14, puncte:1}, {id:24, puncte:1}] },
  { text: "Îți place să creezi și să interpretezi muzică sau să participi la evenimente culturale?", domenii: [{id:12, puncte:1}, {id:11, puncte:1}] },
  { text: "Îți place să proiectezi spații funcționale și să folosești tehnologie modernă?", domenii: [{id:8, puncte:1}, {id:7, puncte:1}] },
  { text: "Te atrage ideea de a lucra în domeniul sănătății și de a ajuta fizic pacienții?", domenii: [{id:1, puncte:1}, {id:13, puncte:1}] },
  { text: "Îți place să folosești creativitatea în design vestimentar și artă vizuală?", domenii: [{id:10, puncte:1}, {id:9, puncte:1}] },//asdasd
  { text: "Îți place să scrii cod și să creezi aplicații software?", domenii: [{id: 0, puncte: 2}] },
  { text: "Îți place să rezolvi probleme tehnice și să găsești soluții inovatoare în domeniul tehnologiei?", domenii: [{id: 25, puncte: 1}] },
  { text: "Îți place să combini o alimentație sănătoasă cu o rutină regulată de îngrijire a pielii?", domenii: [{id:22, puncte:1}, {id:5, puncte:1}] },
  { text: "Te interesează atât tendințele de modă cât și cele de machiaj pentru a-ți exprima personalitatea?", domenii: [{id:22, puncte:1}, {id:3, puncte:1}] },
  { text: "Practici sport regulat și acorzi atenție îngrijirii corpului pentru a te menține în formă?", domenii: [{id:22, puncte:1}, {id:9, puncte:1}] },
  { text: "Ești interesat/ă atât de produse cosmetice naturale cât și de metode alternative de relaxare și îngrijire?", domenii: [{id:19, puncte:1}, {id:12, puncte:1}] },
  { text: "Ești interesat(ă) de metodele sustenabile de cultivare a culturilor agricole?", domenii: [{id:19, puncte:2}] },
  { text: "Te interesează atât sănătatea oamenilor, cât și modul în care bunurile esențiale ajung rapid la destinație?", domenii: [{id:1, puncte:1}, {id:21, puncte:1}] },
  { text: "Ai răbdare să planifici și să gestionezi situații critice, fie în spitale, fie în transport?", domenii: [{id:1, puncte:1}, {id:21, puncte:1}] },
  {
  text: "Îți place să creezi strategii digitale și să dezvolți soluții tehnologice care să stimuleze vânzările și să comunice eficient cu publicul?",
  domenii: [
    {id: 24, puncte: 1},  // Comunicare digitală & Media
    {id: 0, puncte: 1},  // IT & Programare
    {id: 3, puncte: 1},  // Business & Management
    {id: 4, puncte: 1}   // Marketing & Vânzări
  ]
},
{
  text: "Îți place să explorezi și să promovezi experiențe culturale sau turistice, respectând în același timp mediul și siguranța comunităților?",
  domenii: [
    {id: 11, puncte: 1},  // Film & Teatru
    {id: 15, puncte: 1},  // Turism & Ospitalitate
    {id: 17, puncte: 1},  // Mediu & Ecologie
    {id: 20, puncte: 1}   // Armată & Securitate
  ]
},
{
  text: "Îți place să oferi servicii de îngrijire și să contribui la sănătatea și bunăstarea oamenilor, folosind în același timp resurse eficiente și tehnologii moderne?",
  domenii: [
    {id: 22, puncte: 1},   // Estetică & Îngrijire Personală
    {id: 26, puncte: 1},  // Energie & Resurse
    {id: 27, puncte: 1}   // Industrie & Producție
  ]
},
{text: "Te pasionează să înțelegi gândurile și emoțiile oamenilor pentru a-i ajuta să-și depășească dificultățile?",domenii: [{id: 2, puncte: 1}] },

]
const perPagina = 5;
let paginaCurenta = 0;
const raspunsuri = [];
const scoruri = Array(intrebari.length).fill(0);

// Elemente din DOM
const groupDiv = document.getElementById("question-group");
const progressBarFill = document.getElementById("progress-bar-fill");
const progressPercent = document.getElementById("progress-percent");
const progressStep = document.getElementById("progress-step");
const resultSection = document.getElementById("result-section");
const quizContainer = document.querySelector(".quiz-container");
const resultList = document.getElementById("result-list");
const retryBtn = document.getElementById("retry-btn");

function afiseazaPagina() {
  groupDiv.innerHTML = "";

  const start = paginaCurenta * perPagina;
  const end = Math.min(start + perPagina, intrebari.length);
  const procent = Math.round((start / intrebari.length) * 100);
  const totalPagini = Math.ceil(intrebari.length / perPagina);

  progressBarFill.style.width = `${procent}%`;
  progressPercent.textContent = `${procent}%`;
  progressStep.textContent = `Pas ${paginaCurenta + 1} din ${totalPagini}`;

  for (let i = start; i < end; i++) {
    const intrebare = intrebari[i];
    const block = document.createElement("div");
    block.className = "question-block";

    const p = document.createElement("p");
    p.textContent = intrebare.text;
    block.appendChild(p);

    const scale = document.createElement("div");
    scale.className = "likert-scale";

    [0.2, 0.4, 0.6, 0.8, 1.0].forEach(val => {
      const opt = document.createElement("div");
      opt.className = "likert-option";
      opt.dataset.index = i;
      opt.dataset.val = val;

      const circle = document.createElement("div");
      circle.className = "circle";
      opt.appendChild(circle);

      if (raspunsuri[i] === val) {
        opt.classList.add("selected");
      }

      opt.addEventListener("click", () => {
        raspunsuri[i] = val;
        afiseazaPagina();

        // Scroll către butonul Continuă
        setTimeout(() => {
          const btn = document.querySelector(".btn-next");
          if (btn) btn.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      });

      scale.appendChild(opt);
    });

    block.appendChild(scale);
    groupDiv.appendChild(block);
  }

  // ⚠️ Mesaj de avertizare
  const warning = document.createElement("p");
  warning.id = "warning-message";
  warning.style.color = "#b00020";
  warning.style.fontSize = "0.9rem";
  warning.style.textAlign = "center";
  warning.style.marginTop = "20px";
  warning.style.display = "none";
  warning.textContent = "Te rugăm să răspunzi la toate afirmațiile înainte de a continua.";
  groupDiv.appendChild(warning);

  // Buton Continuă
  const btn = document.createElement("button");
  btn.textContent = paginaCurenta === Math.floor(intrebari.length / perPagina)
    ? "Vezi rezultatele"
    : "Continuă";
  btn.className = "btn-next";
  btn.onclick = urmatoareaPagina;
  groupDiv.appendChild(btn);
}

function urmatoareaPagina() {
  const start = paginaCurenta * perPagina;
  const end = Math.min(start + perPagina, intrebari.length);
  let toateCompletate = true;

  for (let i = start; i < end; i++) {
    const bloc = groupDiv.querySelector(`.question-block:nth-child(${(i - start) + 1})`);
    const raspuns = raspunsuri[i];

    if (!raspuns) {
      toateCompletate = false;
      bloc.classList.add("error");
    } else {
      bloc.classList.remove("error");
    }
  }

  const warning = document.getElementById("warning-message");

  if (!toateCompletate) {
    warning.style.display = "block";
    return;
  } else {
    warning.style.display = "none";
  }

  paginaCurenta++;
  if (paginaCurenta * perPagina >= intrebari.length) {
    finalizeazaTestul();
  } else {
    afiseazaPagina();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function finalizeazaTestul() {
  quizContainer.style.display = "none";
  resultSection.style.display = "block";

  raspunsuri.forEach((val, i) => {
    intrebari[i].domenii.forEach(d => {
      scoruri[d.id] += d.puncte * val;
    });
  });

  const rezultate = domenii.map((nume, idx) => ({ nume, scor: scoruri[idx].toFixed(2) }))
    .sort((a, b) => b.scor - a.scor);

  resultList.innerHTML = "";
  rezultate.forEach(r => {
    const p = document.createElement("p");
    p.textContent = `${r.nume}: ${r.scor} puncte`;
    resultList.appendChild(p);
  });
}

function reseteazaTestul() {
  paginaCurenta = 0;
  scoruri.fill(0);
  raspunsuri.length = 0;
  quizContainer.style.display = "block";
  resultSection.style.display = "none";
  afiseazaPagina();
}

retryBtn.addEventListener("click", reseteazaTestul);
afiseazaPagina();
