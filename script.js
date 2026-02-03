document.addEventListener("DOMContentLoaded", () => {
  const teamForm = document.getElementById("teamForm");
  const teamInputs = document.getElementById("teamInputs");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const bracketContainer = document.getElementById("bracketContainer");
  const bracket = document.getElementById("bracket");

  // Generate 16 input fields
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Tim ${i + 1}`;
    input.required = true;
    teamInputs.appendChild(input);
  }

  // Shuffle button
  shuffleBtn.addEventListener("click", () => {
    const inputs = Array.from(teamInputs.querySelectorAll("input"));
    const values = inputs.map(input => input.value);
    const shuffled = values.sort(() => Math.random() - 0.5);
    inputs.forEach((input, i) => input.value = shuffled[i]);
  });

  // Confirm button
  teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teams = Array.from(teamInputs.querySelectorAll("input")).map(input => input.value);
    teamForm.style.display = "none";
    bracketContainer.style.display = "block";
    generateRound(teams, 1);
  });

  function generateRound(teams, round) {
    bracket.innerHTML += `<h3>Round ${round}</h3>`;
    const nextRound = [];
    let matchCount = teams.length / 2;
    let selectedCount = 0;

    for (let i = 0; i < teams.length; i += 2) {
      const match = document.createElement("div");
      match.className = "match";

      const team1 = document.createElement("span");
      team1.textContent = teams[i];
      const team2 = document.createElement("span");
      team2.textContent = teams[i + 1];

      const selectWinner = (winner, loser) => {
        if (team1.classList.contains("selected") || team2.classList.contains("selected")) return;
        winner.classList.add("selected");
        loser.classList.add("disabled");
        nextRound.push(winner.textContent);
        selectedCount++;
        if (selectedCount === matchCount) {
          setTimeout(() => {
            if (nextRound.length === 1) {
              bracket.innerHTML += `<h2>🏆 Pemenang: ${nextRound[0]}</h2>`;
            } else {
              generateRound(nextRound, round + 1);
            }
          }, 500);
        }
      };

      team1.addEventListener("click", () => selectWinner(team1, team2));
      team2.addEventListener("click", () => selectWinner(team2, team1));

      match.appendChild(team1);
      match.appendChild(team2);
      bracket.appendChild(match);
    }
  }
});
