// JS for quiz page
document.addEventListener("DOMContentLoaded", () => {
  const quizForm = document.getElementById("quiz-form");
  const submitBtn = document.getElementById("submit-btn");
  const retakeBtn = document.getElementById("retake-btn");
  const scoreDiv = document.getElementById("score");

  let selectedQuestions = [];

  // Function to shuffle and pick random questions
  function getRandomQuestions() {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }

  // Function to render the quiz
  function renderQuiz() {
    quizForm.innerHTML = ""; // Clear previous quiz
    scoreDiv.innerHTML = ""; // Clear previous score
    selectedQuestions = getRandomQuestions();

    selectedQuestions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionLabel = document.createElement("label");
      questionLabel.textContent = `${index + 1}. ${q.question}`;
      questionDiv.appendChild(questionLabel);

      q.options.forEach((option) => {
        const optionDiv = document.createElement("div");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = `q${index}`;
        radioInput.value = option;

        const optionLabel = document.createElement("label");
        optionLabel.textContent = option;

        optionDiv.appendChild(radioInput);
        optionDiv.appendChild(optionLabel);
        questionDiv.appendChild(optionDiv);
      });

      quizForm.appendChild(questionDiv);
    });
  }

  // Function to check answers
  function checkAnswers() {
    let correctCount = 0;

    selectedQuestions.forEach((q, index) => {
      const selectedOption = quizForm[`q${index}`].value;
      const questionDiv = quizForm.children[index];

      if (selectedOption === q.answer) {
        correctCount++;
        questionDiv.style.backgroundColor = "lightgreen"; // Highlight correct
      } else {
        questionDiv.style.backgroundColor = "#8B0000"; // Highlight wrong
      }

    });

    
    // Update the score display
    scoreDiv.textContent = `Ճիշտ Պատասխաններ: ${correctCount}/${selectedQuestions.length}`;
    submitBtn.style.display = "none";
    retakeBtn.style.display = "inline-block";
  }

  // Event listeners
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkAnswers();
  });

  retakeBtn.addEventListener("click", () => {
    submitBtn.style.display = "inline-block";
    retakeBtn.style.display = "none";
    renderQuiz();
  });

  // Initial render
  renderQuiz();
});