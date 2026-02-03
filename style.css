document.addEventListener("DOMContentLoaded", () => {
  const teamForm = document.getElementById("teamForm");
  const teamInputs = document.getElementById("teamInputs");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const scoreFormContainer = document.getElementById("scoreFormContainer");
  const scoreForm = document.getElementById("scoreForm");
  const bracketContainer = document.getElementById("bracketContainer");

  // Buat 16 input tim
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Tim ${i + 1}`;
    input.required = true;
    teamInputs.appendChild(input);
  }

  // Tombol Shuffle
  shuffleBtn.addEventListener("click", () => {
    const inputs = Array.from(teamInputs.querySelectorAll("input"));
    const values = inputs.map(input => input.value);
    const shuffled = values.sort(() => Math.random() - 0.5);
    inputs.forEach((input, i) => input.value = shuffled[i]);
  });

  // Tombol Confirm
  teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teams = Array.from(teamInputs.querySelectorAll("input")).map(input => input.value);
    const teamPairs = [];
    for (let i = 0; i < teams.length; i += 2) {
      teamPairs.push([teams[i], teams[i + 1]]);
    }

    teamForm.style.display = "none";
    scoreFormContainer.style.display = "block";

    // Buat form skor
    scoreForm.innerHTML = "";
    const scoreInputs = [];

    teamPairs.forEach((pair, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <label>${pair[0]}: <input type="number" min="0" required></label>
        <label>${pair[1]}: <input type="number" min="0" required></label>
      `;
      scoreForm.appendChild(div);
      scoreInputs.push(div.querySelectorAll("input"));
    });

    const submitScores = document.createElement("button");
    submitScores.textContent = "Submit Skor";
    scoreForm.appendChild(submitScores);

    scoreForm.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const results = scoreInputs.map(pair => [
        parseInt(pair[0].value),
        parseInt(pair[1].value)
      ]);

      scoreFormContainer.style.display = "none";
      bracketContainer.style.display = "block";

      $('#bracket').bracket({
        init: {
          teams: teamPairs,
          results: [results]
        }
      });
    });
  });
});
