// ------------------------------------------------------------
// win.js - Good Ending Screen
// ------------------------------------------------------------

function drawWin() {
  // Elegant gold/green success background
  background(60, 80, 60);

  // Decorative elements
  fill(100, 130, 100, 100);
  noStroke();
  ellipse(200, 200, 300, 300);
  ellipse(600, 600, 250, 250);

  // Title
  fill(255, 230, 150);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("A Perfect Evening", width / 2, 180);

  // Success message box
  fill(40, 50, 40, 200);
  rectMode(CENTER);
  rect(width / 2, 350, 550, 200, 15);

  // Success text
  fill(220, 255, 220);
  textSize(22);
  text("You uncovered the party's secrets", width / 2, 290);
  text("while maintaining everyone's trust!", width / 2, 320);

  // Stats summary
  fill(180, 220, 180);
  textSize(18);
  text("Final Stats:", width / 2, 370);
  text("Secrets: " + secrets + "  |  Trust: " + trust + "  |  Social: " + social, width / 2, 400);

  // Ending description
  fill(200, 230, 200);
  textSize(16);
  text("The host invites you to their next exclusive gathering.", width / 2, 480);
  text("You've become the talk of high society.", width / 2, 510);

  // Restart instruction
  fill(180, 200, 180);
  textSize(18);
  text("Press R to play again", width / 2, 600);
}

function winMousePressed() {
  resetGame();
}

function winKeyPressed() {
  if (key === "r" || key === "R") {
    resetGame();
  }
}
