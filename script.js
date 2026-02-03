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

    // Format untuk jQuery Bracket
    const teamPairs = [];
    for (let i = 0; i < teams.length; i += 2) {
      teamPairs.push([teams[i], teams[i + 1]]);
    }

    $('#bracket').bracket({
      init: {
        teams: teamPairs,
        results: []
      }
    });
  });
});
