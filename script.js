const characters = [
  { name: "Jill Valentine", initials: "JV", era: "Classic", role: "Agent", affiliation: "S.T.A.R.S.", debut: 1996 },
  { name: "Chris Redfield", initials: "CR", era: "Classic", role: "Agent", affiliation: "B.S.A.A.", debut: 1996 },
  { name: "Leon S. Kennedy", initials: "LK", era: "Modern", role: "Agent", affiliation: "D.S.O.", debut: 1998 },
  { name: "Claire Redfield", initials: "CL", era: "Classic", role: "Survivor", affiliation: "TerraSave", debut: 1998 },
  { name: "Ada Wong", initials: "AW", era: "Classic", role: "Spy", affiliation: "Unknown", debut: 1998 },
  { name: "Albert Wesker", initials: "AW", era: "Classic", role: "Villain", affiliation: "Umbrella", debut: 1996 },
  { name: "Rebecca Chambers", initials: "RC", era: "Classic", role: "Medic", affiliation: "S.T.A.R.S.", debut: 1996 },
  { name: "Barry Burton", initials: "BB", era: "Classic", role: "Agent", affiliation: "BSAA", debut: 1996 },
  { name: "Ethan Winters", initials: "EW", era: "Modern", role: "Survivor", affiliation: "Civilian", debut: 2017 },
  { name: "HUNK", initials: "HK", era: "Classic", role: "Agent", affiliation: "Umbrella", debut: 1998 },
  { name: "Carlos Oliveira", initials: "CO", era: "Classic", role: "Mercenary", affiliation: "U.B.C.S.", debut: 1999 },
  { name: "Sherry Birkin", initials: "SB", era: "Classic", role: "Survivor", affiliation: "D.S.O.", debut: 1998 },
  { name: "Mia Winters", initials: "MW", era: "Modern", role: "Spy", affiliation: "The Connections", debut: 2017 },
  { name: "Sheva Alomar", initials: "SA", era: "Modern", role: "Agent", affiliation: "B.S.A.A.", debut: 2009 },
  { name: "Joseph Kendo", initials: "JK", era: "Classic", role: "Civilian", affiliation: "Kendo", debut: 1998 },
  { name: "Lady Dimitrescu", initials: "LD", era: "Modern", role: "Villain", affiliation: "Castle Dimitrescu", debut: 2021 },
  { name: "Luis Sera", initials: "LS", era: "Modern", role: "Scientist", affiliation: "Los Iluminados", debut: 2005 },
  { name: "Moira Burton", initials: "MB", era: "Modern", role: "Survivor", affiliation: "TerraSave", debut: 2015 },
  { name: "Bela Dimitrescu", initials: "BD", era: "Modern", role: "Villain", affiliation: "Castle Dimitrescu", debut: 2021 },
  { name: "Zoe Baker", initials: "ZB", era: "Modern", role: "Survivor", affiliation: "Civilian", debut: 2017 },
  { name: "Jack Baker", initials: "JB", era: "Modern", role: "Villain", affiliation: "The Bakers", debut: 2017 },
  { name: "Rose Winters", initials: "RW", era: "Modern", role: "Survivor", affiliation: "Civilian", debut: 2021 },
  { name: "Piers Nivans", initials: "PN", era: "Modern", role: "Agent", affiliation: "B.S.A.A.", debut: 2012 },
  { name: "William Birkin", initials: "WB", era: "Classic", role: "Scientist", affiliation: "Umbrella", debut: 1998 },
  { name: "Alexia Ashford", initials: "AA", era: "Classic", role: "Villain", affiliation: "Umbrella", debut: 2000 },
  { name: "Steve Burnside", initials: "SB", era: "Classic", role: "Survivor", affiliation: "Civilian", debut: 2000 },
  { name: "Manuela Hidalgo", initials: "MH", era: "Modern", role: "Survivor", affiliation: "Civilian", debut: 2009 },
  { name: "Ramon Salazar", initials: "RS", era: "Modern", role: "Villain", affiliation: "Los Iluminados", debut: 2005 },
  { name: "Jack Krauser", initials: "JK", era: "Modern", role: "Villain", affiliation: "Los Iluminados", debut: 2005 },
  { name: "Osmund Saddler", initials: "OS", era: "Modern", role: "Villain", affiliation: "Los Iluminados", debut: 2005 },
  { name: "Nicole Tomlinson", initials: "NT", era: "Modern", role: "Agent", affiliation: "D.S.O.", debut: 2023 },
  { name: "Dr. Carla Radames", initials: "CR", era: "Modern", role: "Scientist", affiliation: "Neo-Umbrella", debut: 2012 },
  { name: "Fong Ling", initials: "FL", era: "Classic", role: "Spy", affiliation: "Chinese Govt.", debut: 2003 },
  { name: "Ark Thompson", initials: "AT", era: "Classic", role: "Agent", affiliation: "Private", debut: 2000 },
  { name: "Billy Coen", initials: "BC", era: "Classic", role: "Survivor", affiliation: "U.S. Army", debut: 2002 },
  { name: "Enrico Marini", initials: "EM", era: "Classic", role: "Agent", affiliation: "S.T.A.R.S.", debut: 1996 },
  { name: "Brad Vickers", initials: "BV", era: "Classic", role: "Pilot", affiliation: "S.T.A.R.S.", debut: 1996 },
  { name: "Marvin Branagh", initials: "MB", era: "Classic", role: "Agent", affiliation: "R.P.D.", debut: 1998 },
  { name: "Katherine Warren", initials: "KW", era: "Classic", role: "Civilian", affiliation: "Raccoon City", debut: 1998 },
];

const date = new Date();
const daySeed = Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
const target = characters[(daySeed * 7) % characters.length];
let guesses = [];
const input = document.querySelector("#guess-input");
const suggestions = document.querySelector("#suggestions");
const list = document.querySelector("#guess-list");
const message = document.querySelector("#message");
const storageKey = `outbreak-${daySeed}`;
const resultScreen = document.querySelector("#result-screen");

document.querySelector("#date-label").textContent = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
document.querySelector("#case-number").textContent = `#${String(daySeed % 1000).padStart(5, "0")}`;
document.querySelector("#remaining-count").textContent = characters.length;
document.querySelector("#archive-count").textContent = characters.length;
document.querySelector("#archive-count-total").textContent = characters.length;

function renderSuggestions() {
  const query = input.value.trim().toLowerCase();
  if (!query) { suggestions.classList.remove("show"); return; }
  const matches = characters.filter((character) => character.name.toLowerCase().includes(query) && !guesses.some((guess) => guess.name === character.name)).slice(0, 5);
  suggestions.innerHTML = matches.map((character) => `<div class="suggestion" role="option" data-name="${character.name}">${character.name}</div>`).join("");
  suggestions.classList.toggle("show", matches.length > 0);
  suggestions.querySelectorAll(".suggestion").forEach((item) => item.addEventListener("click", () => selectCharacter(item.dataset.name)));
}

function selectCharacter(name) {
  input.value = name;
  suggestions.classList.remove("show");
  input.focus();
}

function proximity(value, expected) {
  if (value === expected) return "match";
  if (value.includes(expected) || expected.includes(value)) return "near";
  return "wrong";
}

function addGuess(guess) {
  const fields = ["era", "role", "affiliation", "debut"];
  const result = guess.name === target.name;
  const cells = fields.map((field) => {
    const state = field === "debut"
      ? (guess.debut === target.debut ? "match" : Math.abs(guess.debut - target.debut) <= 5 ? "near" : "wrong")
      : proximity(guess[field], target[field]);
    const arrow = field === "debut" && state !== "match" ? (guess.debut < target.debut ? " ↑" : " ↓") : "";
    return `<span class="${state}">${guess[field]}${arrow}</span>`;
  }).join("");
  const row = document.createElement("div");
  row.className = "guess-grid guess-row";
  row.innerHTML = `<span class="character"><span class="avatar">${guess.initials}</span>${guess.name}</span>${cells}<span class="result ${result ? "match" : ""}">${result ? "✓" : "×"}</span>`;
  list.querySelector(".empty-state")?.remove();
  list.prepend(row);
}

function submitGuess() {
  suggestions.classList.remove("show");
  const guess = characters.find((character) => character.name.toLowerCase() === input.value.trim().toLowerCase());
  if (!guess) { message.textContent = "NO MATCH IN ARCHIVES — SELECT A CHARACTER FROM THE INDEX."; return; }
  if (guesses.some((item) => item.name === guess.name)) { message.textContent = "DOSSIER ALREADY REVIEWED — TRY ANOTHER NAME."; return; }
  guesses.push(guess);
  addGuess(guess);
  document.querySelector("#attempt-count").textContent = guesses.length;
  input.value = "";
  if (guess.name === target.name) {
    message.textContent = `CASE CLOSED — ${target.name.toUpperCase()} IDENTIFIED IN ${guesses.length} ${guesses.length === 1 ? "ATTEMPT" : "ATTEMPTS"}.`;
    message.className = "message success";
    input.disabled = true;
    document.querySelector("#submit-guess").disabled = true;
    finishCase(true);
  } else if (guesses.length >= 6) {
    message.textContent = `CASE FILE SEALED — THE TARGET WAS ${target.name.toUpperCase()}.`;
    input.disabled = true;
    document.querySelector("#submit-guess").disabled = true;
    finishCase(false);
  } else {
    message.textContent = "EVIDENCE LOGGED — THE TRAIL CONTINUES.";
  }

  function finishCase(won) {
    localStorage.setItem(storageKey, JSON.stringify({ won, attempts: guesses.length }));
    document.querySelector("#result-kicker").textContent = won ? "CASE CLOSED" : "CASE FILE SEALED";
    document.querySelector("#result-title").textContent = won ? "TARGET IDENTIFIED" : "TARGET ESCAPED";
    document.querySelector("#result-copy").textContent = won
      ? `${target.name} was the subject of today's investigation. Your evidence trail led to the correct identification.`
      : `The target was ${target.name}. A new case file will be available when the archive resets tomorrow.`;
    document.querySelector("#result-attempts").textContent = String(guesses.length).padStart(2, "0");
    document.querySelector("#result-streak").textContent = won ? "08" : "07";
    document.querySelector("#result-rate").textContent = `${Math.round((won ? 1 : 0) * 100)}%`;
    resultScreen.hidden = false;
    document.body.classList.add("case-complete");
  }
}

input.addEventListener("input", renderSuggestions);
input.addEventListener("keydown", (event) => { if (event.key === "Enter") submitGuess(); if (event.key === "Escape") suggestions.classList.remove("show"); });
document.querySelector("#submit-guess").addEventListener("click", submitGuess);
document.addEventListener("click", (event) => { if (!event.target.closest(".search-wrap")) suggestions.classList.remove("show"); });

function updateCountdown() {
  const tomorrow = new Date(date); tomorrow.setDate(date.getDate() + 1); const diff = tomorrow - new Date();
  const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  document.querySelector("#countdown").textContent = `${hours}:${minutes}:${seconds}`;
}
updateCountdown(); setInterval(updateCountdown, 1000);

document.querySelector("#close-result").addEventListener("click", () => {
  resultScreen.hidden = true;
  document.body.classList.remove("case-complete");
});
document.querySelector("#share-result").addEventListener("click", async () => {
  const text = `OUTBREAK // DAILY RESIDENT EVIL\nCASE #${String(daySeed % 1000).padStart(5, "0")} ${target.name} identified in ${guesses.length}/6 attempts.`;
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector("#share-result").innerHTML = "RESULT COPIED <span>✓</span>";
  } catch {
    document.querySelector("#share-result").textContent = text;
  }
});
