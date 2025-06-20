const targets = ["Mate1", "Mate2", "Mate3"];
let currentTarget = "";
let currentDamage = 0;

function rollTarget() {
  currentTarget = targets[Math.floor(Math.random() * targets.length)];
  document.getElementById("target").textContent = "Target: " + currentTarget;
}

function rollDamage() {
  currentDamage = (Math.floor(Math.random() * 10) + 1) * 10;
  document.getElementById("damage").textContent = "Damage: " + currentDamage;
}

function applyDamage() {
  if (!currentTarget || !currentDamage) return;
  const log = document.getElementById("log");
  const entry = document.createElement("li");
  entry.textContent = `${currentTarget} takes ${currentDamage} damage`;
  log.appendChild(entry);
  currentTarget = "";
  currentDamage = 0;
  document.getElementById("target").textContent = "Target: -";
  document.getElementById("damage").textContent = "Damage: -";
}
