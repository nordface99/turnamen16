document.addEventListener("DOMContentLoaded", () => {
  const teamForm = document.getElementById("teamForm");
  const teamInputs = document.getElementById("teamInputs");
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

  teamForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const teams = Array.from(teamInputs.querySelectorAll("input")).map(input => input.value);
    teamForm.style.display = "none";
    bracketContainer.style.display = "block";
    generateRound(teams, 1);
  });

  function generateRound(teams, round) {
    bracket.innerHTML = `<h3>Round ${round}</h3>`;
    const nextRound = [];

    for (let i = 0; i < teams.length; i += 2) {
      const match = document.createElement("div");
      match.className = "match";

      const team1 = document.createElement("span");
      team1.textContent = teams[i];
      team1.addEventListener("click", () => {
        nextRound.push(teams[i]);
        checkRoundCompletion();
      });

      const team2 = document.createElement("span");
      team2.textContent = teams[i+1];
      team2.addEventListener("click", () => {
        nextRound.push(teams[i+1]);
        checkRoundCompletion();
      });

      match.appendChild(team1);
      match.appendChild(team2);
      bracket.appendChild(match);
    }

    function checkRoundCompletion() {
      if (nextRound.length === teams.length / 2) {
        if (nextRound.length === 1) {
          bracket.innerHTML += `<h2>🏆 Pemenang: ${nextRound[0]}</h2>`;
        } else {
          generateRound(nextRound, round + 1);
        }
      }
    }
  }
});
