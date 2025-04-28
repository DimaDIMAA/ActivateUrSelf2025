document.addEventListener("DOMContentLoaded", () => {
    const lectii = document.querySelectorAll('.lectie');
    const quizButton = document.getElementById('quizButton');
    const progressText = document.getElementById('progress');
  
    // Preia progresul sau initializează-l
    let lectiiCitite = JSON.parse(localStorage.getItem('lectiiCitite')) || [];
  
    function actualizeazaVizual() {
      lectii.forEach(lectie => {
        const id = lectie.getAttribute('data-id');
        if (lectiiCitite.includes(id)) {
          lectie.classList.add('citita');
        }
      });
  
      // Actualizare progres: Ex: "3/6 lecții citite"
      progressText.textContent = `${lectiiCitite.length}/${lectii.length} lecții citite`;
  
      if (lectiiCitite.length === lectii.length) {
        quizButton.disabled = false;
        quizButton.classList.add('active');
      }
    }
  
    lectii.forEach(lectie => {
      lectie.addEventListener('click', () => {
        const id = lectie.getAttribute('data-id');
        if (!lectiiCitite.includes(id)) {
          lectiiCitite.push(id);
          localStorage.setItem('lectiiCitite', JSON.stringify(lectiiCitite));
        }
      });
    });
  
    actualizeazaVizual();
  
    quizButton.addEventListener('click', () => {
      if (!quizButton.disabled) {
        window.location.href = "quiz_bani.html"; // Trimite către pagina de test
      }
    });
  });
  