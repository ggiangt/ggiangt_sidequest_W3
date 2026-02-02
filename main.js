// ------------------------------------------------------------
// main.js = the "router" (traffic controller) for the whole game
// ------------------------------------------------------------
//
// This project has multiple screens (start, party, host, chef, critic, win, lose).
// Each screen lives in its own file and defines:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input

// ------------------------------
// Global game state
// ------------------------------
let currentScreen = "start"; // "start" | "party" | "host" | "chef" | "critic" | "win" | "lose"

// ------------------------------
// Player Stats
// ------------------------------
let secrets = 0;    // Number of secrets uncovered (starts at 0)
let trust = 50;     // How much guests trust you (starts at 50)
let social = 50;    // Your social standing (starts at 50)

// Track which guests have been talked to
let talkedToHost = false;
let talkedToChef = false;
let talkedToCritic = false;

// ------------------------------
// Reset game function
// ------------------------------
function resetGame() {
  secrets = 0;
  trust = 50;
  social = 50;
  talkedToHost = false;
  talkedToChef = false;
  talkedToCritic = false;
  currentScreen = "start";
}

// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame
// ------------------------------
function draw() {
  if (currentScreen === "start") drawStart();
  else if (currentScreen === "party") drawParty();
  else if (currentScreen === "host") drawHost();
  else if (currentScreen === "chef") drawChef();
  else if (currentScreen === "critic") drawCritic();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
function mousePressed() {
  if (currentScreen === "start") startMousePressed();
  else if (currentScreen === "party") partyMousePressed();
  else if (currentScreen === "host") hostMousePressed();
  else if (currentScreen === "chef") chefMousePressed();
  else if (currentScreen === "critic") criticMousePressed();
  else if (currentScreen === "win") winMousePressed?.();
  else if (currentScreen === "lose") loseMousePressed?.();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
function keyPressed() {
  if (currentScreen === "start") startKeyPressed();
  else if (currentScreen === "party") partyKeyPressed?.();
  else if (currentScreen === "host") hostKeyPressed?.();
  else if (currentScreen === "chef") chefKeyPressed?.();
  else if (currentScreen === "critic") criticKeyPressed?.();
  else if (currentScreen === "win") winKeyPressed?.();
  else if (currentScreen === "lose") loseKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
// Checks whether the mouse is inside a rectangle (centered mode)
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}

// ------------------------------------------------------------
// Shared helper function: drawStats()
// ------------------------------------------------------------
// Displays player stats in the top-left corner
function drawStats() {
  push();
  fill(255, 255, 255, 200);
  noStroke();
  rect(10, 10, 115, 90, 10);

  fill(40);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Secrets: " + secrets, 20, 20);
  text("Trust: " + trust, 20, 45);
  text("Social: " + social, 20, 70);
  pop();
}

// ------------------------------------------------------------
// Shared helper function: drawButton()
// ------------------------------------------------------------
// Draws a button with hover effect
function drawButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(255, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(255, 180, 120);
  } else {
    fill(255, 240, 210, 210);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(220, 220, 220);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(40, 60, 70);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------------------------------------
// Check ending conditions
// ------------------------------------------------------------
function checkEnding() {
  // Good ending: secrets >= 2 AND trust >= 45
  if (secrets >= 2 && trust >= 45) {
    currentScreen = "win";
  } else {
    currentScreen = "lose";
  }
}
