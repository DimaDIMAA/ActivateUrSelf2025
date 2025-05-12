const allQuestions = [
  {
    question: "De ce este esențială educația financiară?",
    options: [
      "Pentru a înțelege cum să gestionezi veniturile, cheltuielile și economiile.", // corect
      "Pentru a crește rapid veniturile prin investiții riscante.",
      "Pentru a putea folosi creditele bancare nelimitat.",
      "Pentru a cumpăra bunuri fără limită."
    ],
    correct: 0
  },
  {
    question: "Fondul de urgență trebuie să fie:",
    options: [
      "O sumă disponibilă rapid pentru situații neprevăzute.", // corect
      "Un cont de economii pentru vacanțe exotice.",
      "O investiție de mare risc.",
      "Un împrumut rapid."
    ],
    correct: 0
  },
  {
    question: "Cum eviți capcanele financiare?",
    options: [
      "Prin planificare atentă, informare și controlul cheltuielilor impulsive.", // corect
      "Prin utilizarea cardurilor de credit cât mai des.",
      "Prin evitarea economisirii.",
      "Prin cumpărături impulsive și investiții rapide."
    ],
    correct: 0
  },
  {
    question: "Cum îți construiești un buget lunar eficient?",
    options: [
      "Ținând cont de toate sursele de venit și de cheltuielile fixe și variabile.", // corect
      "Ținând doar cont de cheltuielile de divertisment.",
      "Estimând cheltuielile pe care le vei face în funcție de starea ta de spirit.",
      "Folosit doar veniturile ocazionale pentru economii."
    ],
    correct: 0
  },
  {
    question: "De ce este importantă diversificarea portofoliului de investiții?",
    options: [
      "Pentru a reduce riscul de pierdere a capitalului.", // corect
      "Pentru a investi doar în acțiuni dintr-o singură industrie.",
      "Pentru a economisi timp.",
      "Pentru a obține randamente mari într-un timp scurt."
    ],
    correct: 0
  },
  {
    question: "Ce reprezintă în mod corect bugetul personal?",
    options: [
      "O listă a cheltuielilor neplanificate.",
      "O estimare a tuturor veniturilor și cheltuielilor planificate într-o perioadă.", // corect
      "Un document de economii pentru vacanțe.",
      "O metodă de a ascunde cheltuielile."
    ],
    correct: 1
  },
  {
    question: "Ce este specific unui cont curent?",
    options: [
      "Oferă dobânzi mai mari decât un cont de economii.",
      "Permite operațiuni frecvente de plată și retrageri.", // corect
      "Este folosit exclusiv pentru investiții bursiere.",
      "Nu permite depuneri de numerar."
    ],
    correct: 1
  },
  {
    question: "Ce reprezintă diversificarea investițiilor?",
    options: [
      "Investiția tuturor banilor într-un singur domeniu.",
      "Distribuirea banilor în mai multe tipuri de active pentru reducerea riscului.", // corect
      "Vânzarea rapidă a tuturor investițiilor.",
      "Cumpărarea de acțiuni la o singură companie."
    ],
    correct: 1
  },
  {
    question: "Ce este dobânda compusă?",
    options: [
      "O dobândă care se aplică doar la suma inițială investită.",
      "Dobânda care se adaugă atât la capitalul inițial, cât și la dobânzile acumulate.", // corect
      "O taxă bancară obligatorie.",
      "O penalitate pentru întârzierea plății."
    ],
    correct: 1
  },
  {
    question: "Care este scopul principal al unui fond de urgență?",
    options: [
      "Să îți permită să îți îndeplinești toate dorințele imediat.",
      "Să te protejeze în fața evenimentelor neprevăzute, cum ar fi o pierdere de job.", // corect
      "Să îți plătești vacanțele.",
      "Să investești într-o casă de vacanță."
    ],
    correct: 1
  },
  {
    question: "Care este primul pas corect în construirea unui buget?",
    options: [
      "Estimarea impulsivă a banilor disponibili.",
      "Împrumutul de bani de la rude.",
      "Aflarea sumei necesare pentru cheltuieli lunare și stabilirea priorităților.", // corect
      "Tăierea tuturor cheltuielilor inutile."
    ],
    correct: 2
  },
  {
    question: "De ce este important să citești termenii și condițiile unui împrumut?",
    options: [
      "Pentru a primi un credit mai mare automat.",
      "Pentru a evita plata ratelor.",
      "Pentru a cunoaște dobânzile, penalitățile și condițiile de rambursare.", // corect
      "Pentru a obține reduceri la cumpărături."
    ],
    correct: 2
  },
  {
    question: "Ce înseamnă să trăiești după buget?",
    options: [
      "Să economisești doar la sfârșitul lunii.",
      "Să împrumuți bani pentru cheltuieli mari.",
      "Să ai un control constant asupra veniturilor și cheltuielilor tale.", // corect
      "Să economisești doar pentru vacanță."
    ],
    correct: 2
  },
  {
    question: "Cum îți planifici economiile pentru viitor?",
    options: [
      "Prin economisirea întregii sume pe care o câștigi într-o lună.",
      "Prin ignorarea cheltuielilor neprevăzute.",
      "Prin economisirea unei sume fixe în fiecare lună și ajustarea periodică a bugetului.", // corect
      "Prin împrumutarea unor sume pentru a economisi."
    ],
    correct: 2
  },
  {
    question: "Cum îți alegi investițiile în funcție de risc?",
    options: [
      "Investești doar în active cu risc mare pentru câștiguri rapide.",
      "Alegi doar acțiuni de la firme cu capital mic.", 
      "Diversifici portofoliul pentru a echilibra riscul și randamentul.",// corect
      "Te bazezi pe ce spun prietenii tăi."
    ],
    correct: 2
  },
  {
    question: "Ce metodă ajută eficient la economisire?",
    options: [
      "Așezarea tuturor economiilor la finalul lunii.",
      "Cheltuirea salariului înainte și economisirea restului.",
      "Economisirea doar la bonusuri sau prime.",
      "Stabilirea unui procent fix din venit pentru economii imediat după primirea salariului." // corect
    ],
    correct: 3
  },
  {
    question: "Care este diferența dintre un cont de economii și un cont curent?",
    options: [
      "Contul curent oferă dobânzi mari, în timp ce contul de economii nu oferă niciun fel de dobândă.",
      "Contul curent este folosit doar pentru investiții.",
      "Contul de economii permite tranzacții frecvente.",
      "Contul de economii permite economisirea banilor cu dobândă, în timp ce contul curent este pentru tranzacții zilnice." // corect
    ],
    correct: 3
  },
  {
    question: "Ce tip de dobândă oferă un cont de economii?",
    options: [
      "Dobândă fixă, stabilită la deschiderea contului.",
      "Dobândă anuală, care se aplică doar la suma depusă inițial.",
      "Nu oferă niciun fel de dobândă.",
      "Dobândă variabilă, care depinde de rata pieței." // corect
    ],
    correct: 3
  },
  {
    question: "Cum îți alegi cel mai bun tip de card bancar?",
    options: [
      "În funcție de popularitatea cardului.",
      "Alegând cel mai scump card disponibil.",
      "Alegând primul card care îți apare pe ecran.",
      "În funcție de nevoile tale financiare și de beneficiile oferite de fiecare card." // corect
    ],
    correct: 3
  },
  {
    question: "Cum funcționează un împrumut cu dobândă fixă?",
    options: [
      "Dobânda crește pe măsură ce rambursezi împrumutul.",
      "Dobânda se aplică doar pe prima sumă împrumutată.",
      "Dobânda este variabilă în funcție de piață.",
      "Dobânda rămâne constantă pe întreaga perioadă a împrumutului." // corect
    ],
    correct: 3
  }
];


let selectedQuestions = [];
let timer, timeLeft = 180;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 180;
  updateTimerDisplay();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById('submit-btn').click(); // Apasă butonul automat după 3 minute
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  document.getElementById('timer').innerText = `⏳ ${m}:${s < 10 ? '0' : ''}${s}`;
}

function loadQuiz() {
  shuffle(allQuestions);
  selectedQuestions = allQuestions.slice(0, 10);
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';
  selectedQuestions.forEach((q, i) => {
    const opts = q.options.map((opt, j) =>
      `<label id="label-${i}-${j}"><input type="radio" name="question${i}" value="${j}"> ${opt}</label><br>`
    ).join('');
    quizDiv.innerHTML += `<div class="question"><p><strong>${i + 1}. ${q.question}</strong></p>${opts}</div>`;
  });
  document.getElementById('submit-btn').disabled = false;
  startTimer();
}

function submitQuiz() {
  clearInterval(timer);
  let score = 0;
  selectedQuestions.forEach((q, i) => {
    const radios = document.getElementsByName(`question${i}`);
    let userAnswer = null;
    radios.forEach(r => r.checked && (userAnswer = +r.value));

    const correctLabel = document.getElementById(`label-${i}-${q.correct}`);
    correctLabel.style.color = 'green';
    if (userAnswer !== null) {
      if (userAnswer === q.correct) {
        score++;
        correctLabel.innerHTML += " ✅";
      } else {
        const wrongLabel = document.getElementById(`label-${i}-${userAnswer}`);
        wrongLabel.style.color = 'red';
        wrongLabel.innerHTML += " ❌";
      }
    }
  });

  const resultDiv = document.getElementById('result');
  const conclusionDiv = document.getElementById('conclusion');
  resultDiv.innerHTML = `❌ Ai obținut ${score}/10. Mai încearcă!`;
  resultDiv.style.color = 'red';
  conclusionDiv.style.display = 'none';

  if (score >= 7) {
    resultDiv.innerHTML = `✅ Felicitări! Ai trecut testul cu ${score}/10!`;
    resultDiv.style.color = 'green';
    conclusionDiv.style.display = 'block';
    
    // Apelăm funcția de artificii și sunet doar dacă utilizatorul a trecut testul
    fireworkCelebration(); 
  }

  // Salvează progresul în localStorage pentru actualizarea barei de progres
  const scor = (score / 10) * 100;
  localStorage.setItem("progres_finante", Math.round(scor));

  // Dezactivează butonul după orice rezultat
  document.getElementById('submit-btn').disabled = true;
}

function resetQuiz() {
  document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
  document.getElementById('result').innerHTML = '';
  document.getElementById('conclusion').style.display = 'none';
  loadQuiz();
}

function fireworkCelebration() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;

  // 🎵 Redare sunet cu protecție pentru erori
  const audio = new Audio('Firecracker - Multiple String.mp3');
  audio.play().catch(err => {
    console.warn("Eroare la redarea sunetului:", err);
  });

  // oprește sunetul după 3 secunde
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;
  }, 3000);

  const interval = setInterval(() => {
    if (Date.now() > animationEnd) {
      clearInterval(interval);
      return;
    }

    confetti({
      particleCount: 50,
      angle: 60 + Math.random() * 60,
      spread: 55,
      origin: {
        x: Math.random(),
        y: Math.random() * 0.5
      },
      colors: ['#bb0000', '#ffffff', '#00ff00', '#0000ff'],
    });
  }, 250);
}

// Exemplu de date de progres din backend sau localStorage
const progressData = {
    "finante": parseInt(localStorage.getItem("progres_finante")) || 0, // Progres din LocalStorage pentru "Finanțe"
    "cariera": 70, // Progres pentru "Alegerea carierei"
    "mental": 60   // Progres pentru "Mintea ta contează"
};

// Funcție pentru a actualiza lățimea barei de progres și textul procentual
function updateProgressBar(courseId, progress) {
    const progressBar = document.querySelector(`#${courseId} .progress-bar`);
    const progressText = document.querySelector(`#${courseId} .progress-text`);
    
    if (progressBar && progressText) {
        // Setează progresul la 0% la început
        progressBar.style.width = '0%';
        progressText.textContent = '0%';  // Textul va fi 0% inițial

        // După o mică întârziere, actualizează la procentul real
        setTimeout(() => {
            progressBar.style.width = `${progress}%`;  // Actualizează lățimea barei de progres
            progressText.textContent = `${progress}%`;  // Actualizează textul procentual
        }, 100);  // După 100 ms se actualizează progresul
    }
}

// Actualizarea barelor de progres la încărcarea paginii
window.onload = () => {
  // Încarcă quiz-ul
  loadQuiz();
  document.getElementById('submit-btn').addEventListener('click', submitQuiz);
  document.getElementById('reset-btn').addEventListener('click', resetQuiz);

  // Actualizare progres pentru fiecare subiect din test
  updateProgressBar("finante", progressData.finante);
  updateProgressBar("cariera", progressData.cariera);
  updateProgressBar("mental", progressData.mental);
};