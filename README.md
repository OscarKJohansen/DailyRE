# OUTBREAK // Daily Resident Evil

A daily Resident Evil character guessing game. Search the character archive, submit up to six guesses, and use the evidence columns to identify the target.

## Run locally

Open `index.html` in a browser. No build step or package installation is required.

## Included

- Deterministic daily target selected from the character archive
- 39 indexed Resident Evil characters
- Search suggestions and keyboard submission
- Era, role, affiliation, and debut-year feedback
- Case-complete results screen with attempts, streak, accuracy, and share result
- Previous case archive cards
- Responsive layout for mobile and desktop

The character data is intentionally stored locally in `script.js` so the game works on GitHub Pages and does not depend on an external API becoming unavailable. The archive can later be moved to a JSON endpoint or a server-backed admin system without changing the game UI.
