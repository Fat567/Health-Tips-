// DAILY TIP
const tips = [
  "Wash your hands for 20 seconds regularly.",
  "Eat fruits and veggies daily.",
  "Drink enough water (6-8 glasses).",
  "Get 7–9 hours of sleep each night."
];
document.getElementById("dailyTip").textContent = tips[Math.floor(Math.random() * tips.length)];

// MYTH VS FACT
const mythData = [
  {
    myth: "You can catch a cold by being cold.",
    fact: "Colds are caused by viruses, not cold temperatures."
  },
  {
    myth: "Vaccines cause autism.",
    fact: "There is no scientific evidence linking vaccines to autism."
  },
  {
    myth: "Only dirty water spreads cholera.",
    fact: "Contaminated food can also spread cholera."
  }
];

let currentMyth = 0;

function showMyth(index) {
  document.getElementById("myth").textContent = "Myth: " + mythData[index].myth;
  document.getElementById("fact").textContent = "Fact: " + mythData[index].fact;
}
function nextMyth() {
  currentMyth = (currentMyth + 1) % mythData.length;
  showMyth(currentMyth);
}
function prevMyth() {
  currentMyth = (currentMyth - 1 + mythData.length) % mythData.length;
  showMyth(currentMyth);
}
showMyth(currentMyth);

// QUIZ
const questions = [
  {
    q: "How long should you wash your hands?",
    options: ["5s", "10s", "20s", "60s"],
    answer: "20s"
  },
  {
    q: "Which is a good protein source?",
    options: ["Candy", "Beans", "Fizzy drinks", "Oil"],
    answer: "Beans"
  },
  {
    q: "Mental health is about?",
    options: ["Fitness only", "Money", "Emotions and mind", "None"],
    answer: "Emotions and mind"
  }
];

let quizIndex = 0;
let quizScore = 0;

function loadQuestion() {
  const q = questions[quizIndex];
  document.getElementById("question").textContent = q.q;
  document.getElementById("options").innerHTML = q.options.map(opt =>
    `<label><input type="radio" name="option" value="${opt}"> ${opt}</label>`
  ).join("");
  document.getElementById("result").textContent = "";
}

function submitAnswer() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Please select an answer.");
    return;
  }
  if (selected.value === questions[quizIndex].answer) {
    quizScore++;
  }
  quizIndex++;
  if (quizIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("quizBox").innerHTML = `<h3>Your Score: ${quizScore}/${questions.length}</h3>`;
  }
}

loadQuestion();
