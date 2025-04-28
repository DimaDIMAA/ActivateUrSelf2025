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
      "Să ai un control constant asupra veniturilor și cheltuielilor tale.", // corect
      "Să împrumuți bani pentru cheltuieli mari.",
      "Să economisești doar pentru vacanță."
    ],
    correct: 2
  },
  {
    question: "Cum îți planifici economiile pentru viitor?",
    options: [
      "Prin economisirea unei sume fixe în fiecare lună și ajustarea periodică a bugetului.", // corect
      "Prin economisirea întregii sume pe care o câștigi într-o lună.",
      "Prin ignorarea cheltuielilor neprevăzute.",
      "Prin împrumutarea unor sume pentru a economisi."
    ],
    correct: 2
  },
  {
    question: "Cum îți alegi investițiile în funcție de risc?",
    options: [
      "Diversifici portofoliul pentru a echilibra riscul și randamentul.",
      "Investești doar în active cu risc mare pentru câștiguri rapide.",
      "Alegi doar acțiuni de la firme cu capital mic.", // corect
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
      "Contul de economii permite economisirea banilor cu dobândă, în timp ce contul curent este pentru tranzacții zilnice.",
      "Contul curent oferă dobânzi mari, în timp ce contul de economii nu oferă niciun fel de dobândă.",
      "Contul curent este folosit doar pentru investiții.",
      "Contul de economii permite tranzacții frecvente." // corect
    ],
    correct: 3
  },
  {
    question: "Ce tip de dobândă oferă un cont de economii?",
    options: [
      "Dobândă fixă, stabilită la deschiderea contului.",
      "Dobândă variabilă, care depinde de rata pieței.",
      "Dobândă anuală, care se aplică doar la suma depusă inițial.",
      "Nu oferă niciun fel de dobândă." // corect
    ],
    correct: 3
  },
  {
    question: "Cum îți alegi cel mai bun tip de card bancar?",
    options: [
      "În funcție de nevoile tale financiare și de beneficiile oferite de fiecare card.",
      "În funcție de popularitatea cardului.",
      "Alegând cel mai scump card disponibil.",
      "Alegând primul card care îți apare pe ecran." // corect
    ],
    correct: 3
  },
  {
    question: "Cum funcționează un împrumut cu dobândă fixă?",
    options: [
      "Dobânda rămâne constantă pe întreaga perioadă a împrumutului.",
      "Dobânda crește pe măsură ce rambursezi împrumutul.",
      "Dobânda se aplică doar pe prima sumă împrumutată.",
      "Dobânda este variabilă în funcție de piață." // corect
    ],
    correct: 3
  }
];


let selectedQuestions = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuiz() {
  shuffle(allQuestions);
  selectedQuestions = allQuestions.slice(0, 10);
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';
  selectedQuestions.forEach((q, index) => {
      let optionsHTML = '';
      q.options.forEach((option, i) => {
          optionsHTML += `
              <label>
                  <input type="radio" name="question${index}" value="${i}"> ${option}
              </label><br>
          `;
      });
      quizDiv.innerHTML += `
          <div class="question">
              <p><strong>${index + 1}. ${q.question}</strong></p>
              ${optionsHTML}
          </div>
      `;
  });

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.disabled = false;
  submitBtn.style.backgroundColor = '';
  submitBtn.style.cursor = 'pointer';
}

function submitQuiz() {
  let score = 0;
  selectedQuestions.forEach((q, index) => {
      const radios = document.getElementsByName(`question${index}`);
      radios.forEach(radio => {
          if (radio.checked && parseInt(radio.value) === q.correct) {
              score++;
          }
      });
  });

  const resultDiv = document.getElementById('result');
  const submitBtn = document.getElementById('submit-btn');

  if (score >= 7) {
      resultDiv.innerHTML = `✅ Felicitări! Ai trecut testul cu ${score}/10!`;
      resultDiv.style.color = 'green';
  } else {
      resultDiv.innerHTML = `
          ❌ Ai obținut ${score}/10. Mai încearcă!<br>
          <button id="retry-btn">Refă testul</button>
      `;
      resultDiv.style.color = 'red';

      submitBtn.disabled = true;
      submitBtn.style.backgroundColor = 'grey';
      submitBtn.style.cursor = 'not-allowed';

      document.getElementById('retry-btn').addEventListener('click', () => {
          loadQuiz();
          resultDiv.innerHTML = '';
      });
  }
}

window.onload = () => {
  loadQuiz();
  document.getElementById('submit-btn').addEventListener('click', submitQuiz);
};
