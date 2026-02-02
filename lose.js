// ------------------------------------------------------------
// lose.js - Bad Ending Screen
// ------------------------------------------------------------

function drawLose() {
  // Dark, somber background
  background(70, 50, 55);

  // Decorative elements
  fill(90, 60, 65, 100);
  noStroke();
  ellipse(150, 650, 250, 250);
  ellipse(650, 150, 200, 200);

  // Title
  fill(255, 180, 180);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("An Awkward Exit", width / 2, 180);

  // Failure message box
  fill(50, 35, 40, 200);
  rectMode(CENTER);
  rect(width / 2, 350, 550, 200, 15);

  // Determine what went wrong
  let failReason = "";
  if (secrets < 2 && trust < 45) {
    failReason = "You didn't uncover enough secrets and lost the guests' trust.";
  } else if (secrets < 2) {
    failReason = "You played it too safe and didn't learn any real secrets.";
  } else {
    failReason = "Your prying cost you the trust of the other guests.";
  }

  // Failure text
  fill(255, 200, 200);
  textSize(22);
  text("The party didn't go as planned...", width / 2, 290);

  fill(220, 180, 180);
  textSize(18);
  text(failReason, width / 2, 330);

  // Stats summary
  fill(200, 160, 160);
  textSize(18);
  text("Final Stats:", width / 2, 370);
  text("Secrets: " + secrets + "  |  Trust: " + trust + "  |  Social: " + social, width / 2, 400);

  // Ending description
  fill(180, 150, 155);
  textSize(16);
  text("You leave early, feeling like an outsider.", width / 2, 480);
  text("Maybe next time you'll strike the right balance.", width / 2, 510);

  // Goal hint
  fill(200, 180, 180);
  textSize(14);
  text("(Goal: secrets >= 2 AND trust >= 45)", width / 2, 560);

  // Restart instruction
  fill(200, 170, 175);
  textSize(18);
  text("Press R to try again", width / 2, 620);
}

function loseMousePressed() {
  resetGame();
}

function loseKeyPressed() {
  if (key === "r" || key === "R") {
    resetGame();
  }
}
