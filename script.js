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
    generateBracket(teams);
  });

  function generateBracket(teams) {
    for (let i = 0; i < teams.length; i += 2) {
      const match = document.createElement("div");
      match.className = "match";
      match.innerHTML = `<strong>${teams[i]}</strong> vs <strong>${teams[i+1]}</strong>`;
      bracket.appendChild(match);
    }
  }
});
