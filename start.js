// ------------------------------------------------------------
// start.js - The Dinner Party start screen
// ------------------------------------------------------------

function drawStart() {
  // Dark elegant background for dinner party theme
  background(45, 35, 55);

  // Title
  fill(255, 220, 180);
  textSize(52);
  textAlign(CENTER, CENTER);
  text("The Dinner Party", width / 2, 180);

  // Subtitle
  fill(200, 180, 160);
  textSize(20);
  text("Uncover secrets. Build trust. Survive the night.", width / 2, 240);

  // Instructions
  fill(180, 160, 140);
  textSize(18);
  text("Press ENTER to begin", width / 2, 500);

  // Start button
  const startBtn = {
    x: width / 2,
    y: 380,
    w: 200,
    h: 70,
    label: "BEGIN",
  };

  drawButton(startBtn);

  // Cursor feedback
  cursor(isHover(startBtn) ? HAND : ARROW);
}

function startMousePressed() {
  const startBtn = { x: width / 2, y: 380, w: 200, h: 70 };

  if (isHover(startBtn)) {
    // Reset stats when starting new game
    secrets = 0;
    trust = 50;
    social = 50;
    talkedToHost = false;
    talkedToChef = false;
    talkedToCritic = false;
    currentScreen = "party";
  }
}

function startKeyPressed() {
  if (keyCode === ENTER) {
    // Reset stats when starting new game
    secrets = 0;
    trust = 50;
    social = 50;
    talkedToHost = false;
    talkedToChef = false;
    talkedToCritic = false;
    currentScreen = "party";
  }
}
