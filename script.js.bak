    document.addEventListener("DOMContentLoaded", () => {
  const teamForm = document.getElementById("teamForm");
  const teamInputs = document.getElementById("teamInputs");
  const shuffleBtn = document.getElementById("shuffleBtn");
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
    teamForm.style.display = "none";
    bracketContainer.style.display = "block";
    createBracket(teams);
  });

  function createBracket(teams) {
    const rounds = [teams];
    for (let i = 1; i <= 3; i++) {
      rounds.push(Array(rounds[i - 1].length / 2).fill("?"));
    }

    renderRound(rounds[0], "round1", 0, rounds);
    renderRound(rounds[1], "round2", 1, rounds);
    renderRound(rounds[2], "semifinal", 2, rounds);
    renderRound(rounds[3], "final", 3, rounds);
  }

  function renderRound(teams, containerId, roundIndex, rounds) {
    const container = document.getElementById(containerId);
    container.innerHTML = `<h3>${container.querySelector("h3").textContent}</h3>`;
    for (let i = 0; i < teams.length; i += 2) {
      const match = document.createElement("div");
      match.className = "match";

      const team1 = document.createElement("div");
      team1.textContent = teams[i];
      team1.className = teams[i] === "?" ? "placeholder" : "";
      team1.addEventListener("click", () => selectWinner(team1.textContent, roundIndex, i / 2, rounds));

      const team2 = document.createElement("div");
      team2.textContent = teams[i + 1];
      team2.className = teams[i + 1] === "?" ? "placeholder" : "";
      team2.addEventListener("click", () => selectWinner(team2.textContent, roundIndex, i / 2, rounds));

      match.appendChild(team1);
      match.appendChild(team2);
      container.appendChild(match);
    }
  }

  function selectWinner(winner, roundIndex, matchIndex, rounds) {
    if (winner === "?") return;
    rounds[roundIndex + 1][matchIndex] = winner;
    const nextRoundId = ["round2", "semifinal", "final"][roundIndex];
    renderRound(rounds[roundIndex + 1], nextRoundId, roundIndex + 1, rounds);

    if (roundIndex === 2) {
      const finalContainer = document.getElementById("final");
      finalContainer.innerHTML += `<h2>🏆 Pemenang: ${winner}</h2>`;
    }
  }
});
