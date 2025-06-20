const targets = ["Mate1", "Mate2", "Mate3"];
let currentTarget = "";
let currentDamage = 0;

function rollAndApply() {
  const target = targets[Math.floor(Math.random() * targets.length)];
  const damage = (Math.floor(Math.random() * 10) + 1) * 10;
  const log = document.getElementById("log");
  const entry = document.createElement("li");
  entry.textContent = `${target} takes ${damage} damage`;
  log.appendChild(entry);
}
