const missQuestions = [
  "Mă influențează cu ușurință părerile altora.",
  "Pot fi influențat de o reclamă bună.",
  "Când cineva strănută sau tușește, am de regulă tendința să fac și eu la fel.",
  "Dacă-mi imaginez o băutură răcoritoare, mi se face sete.",
  "Un vânzător bun mă poate face să-mi doresc produsul lor.",
  "Folosesc multe sfaturi practice din reviste sau de la TV.",
  "Dacă un produs e frumos afișat, îmi doresc de regulă să mi-l cumpăr.",
  "Dacă văd pe cineva că tremură, simt și eu un fior.",
  "Am adoptat stilul anumitor vedete.",
  "Când ceilalți îmi spun cum se simt, observ adesea că mă simt la fel ca ei.",
  "Când iau o decizie, urmez adesea sfaturile altora.",
  "Când citesc descrieri ale unor feluri gustoase de mâncare, îmi plouă în gură.",
  "Am preluat multe idei bune de la alții.",
  "Îmi schimb frecvent părerea după ce vorbesc cu alții.",
  "După ce văd o reclamă la o cremă, am uneori senzația că am pielea uscată.",
  "Am descoperit multe dintre lucrurile care îmi plac prin intermediul prietenilor.",
  "Sunt la curent cu moda.",
  "Dacă mă gândesc la ceva înfricoșător, îmi bate inima mai repede.",
  "Am preluat multe dintre obiceiurile prietenilor mei.",
  "Dacă mi se spune că nu arăt bine, încep să mă simt bolnav.",
  "E important să mă simt integrat."
];

let currentPage = 0;
const questionsPerPage = 7;
const responses = new Array(missQuestions.length).fill(null);

const questionList = document.getElementById("question-list");
const nextButton = document.getElementById("next-button");
const stepIndicator = document.getElementById("current-step");

function renderPage() {
  questionList.innerHTML = "";

  const start = currentPage * questionsPerPage;
  const end = start + questionsPerPage;
  const questionsToShow = missQuestions.slice(start, end);

  stepIndicator.textContent = currentPage + 1;

  questionsToShow.forEach((question, index) => {
    const globalIndex = start + index;
    const container = document.createElement("div");
    container.className = "question";

    const title = document.createElement("p");
    title.textContent = question;
    container.appendChild(title);

    const options = document.createElement("div");
    options.className = "options";

    for (let i = 1; i <= 5; i++) {
      const option = document.createElement("div");
      option.className = "option";
      option.dataset.value = i;
      option.textContent = i;

      if (responses[globalIndex] === i) {
        option.classList.add("selected");
      }

      option.addEventListener("click", () => {
        responses[globalIndex] = i;

        const errorMsg = document.getElementById("error-message");
        if (errorMsg) errorMsg.remove();

        container.classList.remove("error");

        const allOptions = container.querySelectorAll(".option");
        allOptions.forEach(opt => opt.classList.remove("selected"));
        option.classList.add("selected");
      });

      options.appendChild(option);
    }

    container.appendChild(options);
    questionList.appendChild(container);
  });

  nextButton.textContent =
    ((currentPage + 1) * questionsPerPage >= missQuestions.length)
      ? "Finalizează testul"
      : "Continuă";
}

nextButton.addEventListener("click", () => {
  const start = currentPage * questionsPerPage;
  const end = start + questionsPerPage;

  const questionDivs = document.querySelectorAll(".question");

  let incompleteIndices = [];
  for (let i = start; i < Math.min(end, missQuestions.length); i++) {
    if (responses[i] === null) incompleteIndices.push(i - start);
  }

  questionDivs.forEach(div => div.classList.remove("error"));

  const oldError = document.getElementById("error-message");
  if (oldError) oldError.remove();

  if (incompleteIndices.length > 0) {
    incompleteIndices.forEach(idx => {
      if (questionDivs[idx]) questionDivs[idx].classList.add("error");
    });

    const errorMsg = document.createElement("p");
    errorMsg.id = "error-message";
    errorMsg.classList.add("error-message");
    errorMsg.textContent = "Te rugăm să răspunzi la toate afirmațiile înainte de a continua.";

    questionList.after(errorMsg);

    return;
  }

  if ((currentPage + 1) * questionsPerPage >= missQuestions.length) {
    const totalScore = responses.reduce((sum, val) => sum + val, 0);
    let interpretation = "";

    if (totalScore <= 40) {
      interpretation = "Ești foarte dur(ă). Nu, înseamnă nu.";
    } else if (totalScore <= 60) {
      interpretation = "Ai încredere în tine, dar ești deschis(ă) la părerile altora.";
    } else if (totalScore <= 75) {
      interpretation = "De multe ori accepți ideile sau propunerile altora.";
    } else {
      interpretation = "Te răzgândești ușor și ești influențat(ă) de ce spun sau fac ceilalți.";
    }
    // Ascunde elementele de test
    document.querySelector(".question-list").style.display = "none";
    document.querySelector(".scale-legend").style.display = "none";
    document.getElementById("quiz-instruction").style.display = "none";
    nextButton.style.display = "none";
    document.querySelector("header p").style.display = "none";

    // Creează containerul rezultatului cu animația fade-in
    const resultContainer = document.createElement("div");
    resultContainer.className = "result-container fade-in";  // <--- animatia aici
    resultContainer.innerHTML = `
      <h2>Rezultatul tău</h2>
      <p><strong>Scor total:</strong> ${totalScore} / 105</p>
      <p><strong>Interpretare:</strong> ${interpretation}</p>
      <div class="score-legend-box">
          <h3>📊 Ghid de interpretare a scorului:</h3>
          <table class="score-table">
          <thead>
              <tr>
              <th>Scor total</th>
              <th>Ce înseamnă</th>
              </tr>
          </thead>
          <tbody>
              <tr><td>21 – 40</td><td>Foarte rezistent la influență</td></tr>
              <tr><td>41 – 60</td><td>Destul de echilibrat</td></tr>
              <tr><td>61 – 75</td><td>Influențabil moderat</td></tr>
              <tr><td>76 – 105</td><td>Foarte influențabil</td></tr>
          </tbody>
          </table>
      </div>
      <button onclick="location.reload()">Refă testul</button>
    `;
    document.querySelector("main").appendChild(resultContainer);
  } else {
    currentPage++;
    renderPage();  // Fără animație la schimbarea paginii
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

renderPage();
