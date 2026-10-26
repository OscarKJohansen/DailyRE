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
const launchDaySeed = Math.floor(Date.UTC(2026, 9, 26) / 86400000);
const caseNumber = Math.max(1, daySeed - launchDaySeed + 1);
let target = getDailyTarget(daySeed);
let guesses = [];
let infiniteMode = false;
let infiniteRound = 0;
const input = document.querySelector("#guess-input");
const suggestions = document.querySelector("#suggestions");
const list = document.querySelector("#guess-list");
const message = document.querySelector("#message");
const storageKey = `outbreak-${daySeed}`;
const resultScreen = document.querySelector("#result-screen");

function seededRandom(seed) {
  let value = seed + 0x6d2b79f5;
  return () => {
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function getDailyTarget(seed) {
  const rotation = [...characters];
  const random = seededRandom(20261026);

  for (let index = rotation.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [rotation[index], rotation[swapIndex]] = [rotation[swapIndex], rotation[index]];
  }

  return rotation[seed % rotation.length];
}

document.querySelector("#date-label").textContent = date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).toUpperCase();
document.querySelector("#case-number").textContent = `#${String(caseNumber).padStart(5, "0")}`;
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

function finishCase(won, persist = true) {
  if (persist && !infiniteMode) {
    persistGame({ won, guesses: guesses.map((guess) => guess.name) });
  }
  document.querySelector("#result-kicker").textContent = infiniteMode ? `INFINITE MODE // ROUND ${String(infiniteRound + 1).padStart(2, "0")}` : won ? "CASE CLOSED" : "CASE FILE SEALED";
  document.querySelector("#result-title").textContent = infiniteMode ? (won ? "ROUND CLEARED" : "ROUND OVER") : won ? "TARGET IDENTIFIED" : "TARGET ESCAPED";
  showPortrait();
  document.querySelector("#result-copy").textContent = won
    ? infiniteMode
      ? `${target.name} identified. Continue into another character case without affecting your daily archive.`
      : `${target.name} was the subject of today's investigation. Your evidence trail led to the correct identification.`
    : infiniteMode
      ? `${target.name} was the target. Infinite Mode ends this run, but your daily case remains untouched.`
      : `The target was ${target.name}. A new case file will be available when the archive resets tomorrow.`;
  document.querySelector("#result-attempts").textContent = String(guesses.length).padStart(2, "0");
  document.querySelector("#result-streak").textContent = infiniteMode ? String(infiniteRound + (won ? 1 : 0)).padStart(2, "0") : String(getCurrentStreak()).padStart(2, "0");
  document.querySelector("#result-rate").textContent = `${Math.round((won ? 1 : 0) * 100)}%`;
  updateStreak();
  document.querySelector("#continue-infinite").hidden = !infiniteMode || !won;
  document.querySelector("#share-result").hidden = infiniteMode;
  resultScreen.hidden = false;
  document.body.classList.add("case-complete");
}

function showPortrait() {
  const portrait = document.querySelector("#result-portrait");
  const fallback = document.querySelector("#portrait-fallback");
  const filename = target.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  portrait.alt = `${target.name} archive portrait`;
  portrait.src = `images/characters/${filename}.jpg`;
  fallback.textContent = target.initials;
  portrait.onload = () => {
    portrait.hidden = false;
    fallback.hidden = true;
  };
  portrait.onerror = () => {
    portrait.hidden = true;
    fallback.hidden = false;
  };
}

function persistGame(game) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(game));
  } catch (error) {
    console.warn("Unable to save today's case progress.", error);
  }
}

function getCurrentStreak() {
  let streak = 0;
  for (let offset = 0; offset <= daySeed; offset += 1) {
    let savedGame;
    try {
      savedGame = JSON.parse(localStorage.getItem(`outbreak-${daySeed - offset}`) || "null");
    } catch (error) {
      console.warn("Unable to read streak history.", error);
      break;
    }
    if (!savedGame?.won) break;
    streak += 1;
  }
  return streak;
}

function updateStreak() {
  document.querySelector("#streak-number").textContent = String(getCurrentStreak()).padStart(2, "0");
}

function restoreGame() {
  let savedGame;
  try {
    savedGame = JSON.parse(localStorage.getItem(storageKey) || "null");
  } catch (error) {
    console.warn("Unable to read today's saved case progress.", error);
    return;
  }
  if (!savedGame || !Array.isArray(savedGame.guesses)) return;

  const savedGuesses = savedGame.guesses
    .map((name) => characters.find((character) => character.name === name))
    .filter(Boolean);
  savedGuesses.forEach((guess) => addGuess(guess));
  guesses = savedGuesses;
  document.querySelector("#attempt-count").textContent = guesses.length;
  if (savedGame.won === true || savedGame.won === false) {
    input.disabled = true;
    document.querySelector("#submit-guess").disabled = true;
    finishCase(savedGame.won, false);
  }
}

function submitGuess() {
  suggestions.classList.remove("show");
  const guess = characters.find((character) => character.name.toLowerCase() === input.value.trim().toLowerCase());
  if (!guess) { message.textContent = "NO MATCH IN ARCHIVES — SELECT A CHARACTER FROM THE INDEX."; return; }
  if (guesses.some((item) => item.name === guess.name)) { message.textContent = "DOSSIER ALREADY REVIEWED — TRY ANOTHER NAME."; return; }
  guesses.push(guess);
  addGuess(guess);
  if (!infiniteMode) persistGame({ guesses: guesses.map((item) => item.name) });
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
}

function startInfiniteMode() {
  infiniteMode = true;
  infiniteRound = 0;
  target = getDailyTarget(daySeed + infiniteRound + 1);
  resetRound();
}

function resetRound() {
  guesses = [];
  list.innerHTML = '<div class="empty-state"><span class="crosshair">⊕</span><p>Your investigation starts here.</p><small>Submit a character to reveal evidence.</small></div>';
  input.value = "";
  input.disabled = false;
  document.querySelector("#submit-guess").disabled = false;
  document.querySelector("#attempt-count").textContent = "0";
  document.querySelector("#message").textContent = "";
  document.querySelector("#message").className = "message";
  document.querySelector(".panel-topline span:first-child").textContent = `INFINITE MODE // ROUND ${String(infiniteRound + 1).padStart(2, "0")}`;
  resultScreen.hidden = true;
  document.body.classList.remove("case-complete");
  input.focus();
}

input.addEventListener("input", renderSuggestions);
input.addEventListener("keydown", (event) => { if (event.key === "Enter") submitGuess(); if (event.key === "Escape") suggestions.classList.remove("show"); });
document.querySelector("#submit-guess").addEventListener("click", submitGuess);
document.addEventListener("click", (event) => { if (!event.target.closest(".search-wrap")) suggestions.classList.remove("show"); });
restoreGame();
updateStreak();

function updateCountdown() {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setHours(24, 0, 0, 0);
  const diff = tomorrow - now;
  const hours = String(Math.floor(diff / 3600000)).padStart(2, "0");
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
  const seconds = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
  document.querySelector("#countdown").textContent = `${hours}:${minutes}:${seconds}`;
}
updateCountdown(); setInterval(updateCountdown, 1000);
setInterval(() => {
  const currentDate = new Date();
  const currentDaySeed = Math.floor(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) / 86400000);
  if (currentDaySeed !== daySeed) window.location.reload();
}, 60000);

document.querySelector("#close-result").addEventListener("click", () => {
  resultScreen.hidden = true;
  document.body.classList.remove("case-complete");
});
document.querySelector("#continue-infinite").addEventListener("click", () => {
  infiniteRound += 1;
  target = getDailyTarget(daySeed + infiniteRound + 1);
  resetRound();
});
document.querySelector("#infinite-mode-launch").addEventListener("click", startInfiniteMode);
document.querySelector("#infinite-archive-launch").addEventListener("click", startInfiniteMode);
document.querySelector("#share-result").addEventListener("click", async () => {
  const text = `OUTBREAK // DAILY RESIDENT EVIL\nCASE #${String(caseNumber).padStart(5, "0")} ${target.name} identified in ${guesses.length}/6 attempts.`;
  try {
    await navigator.clipboard.writeText(text);
    document.querySelector("#share-result").innerHTML = "RESULT COPIED <span>✓</span>";
  } catch {
    document.querySelector("#share-result").textContent = text;
  }
});
