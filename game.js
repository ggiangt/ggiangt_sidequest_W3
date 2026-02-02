// ------------------------------------------------------------
// game.js - The Party Room (hub screen)
// ------------------------------------------------------------
// This is the main hub where players choose which guest to talk to

function drawParty() {
  // Warm party room background
  background(80, 60, 70);

  // Draw stats in top corner
  drawStats();

  // Title
  fill(255, 230, 200);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("The Dinner Party", width / 2, 100);

  // Instruction
  fill(220, 200, 180);
  textSize(24);
  text("Choose who to talk to:", width / 2, 160);

  // Guest buttons
  const hostBtn = {
    x: width / 2,
    y: 280,
    w: 280,
    h: 70,
    label: talkedToHost ? "Talk to the Host (done)" : "Talk to the Host",
  };

  const chefBtn = {
    x: width / 2,
    y: 380,
    w: 280,
    h: 70,
    label: talkedToChef ? "Talk to the Chef (done)" : "Talk to the Chef",
  };

  const criticBtn = {
    x: width / 2,
    y: 480,
    w: 280,
    h: 70,
    label: talkedToCritic ? "Talk to the Critic (done)" : "Talk to the Critic",
  };

  const finishBtn = {
    x: width / 2,
    y: 600,
    w: 220,
    h: 60,
    label: "Finish Party",
  };

  drawButton(hostBtn);
  drawButton(chefBtn);
  drawButton(criticBtn);
  drawFinishButton(finishBtn);

  // Show progress hint
  const guestsTalked = (talkedToHost ? 1 : 0) + (talkedToChef ? 1 : 0) + (talkedToCritic ? 1 : 0);
  fill(180, 160, 140);
  textSize(16);
  text("Guests talked to: " + guestsTalked + "/3", width / 2, 680);

  // Cursor feedback
  const over = isHover(hostBtn) || isHover(chefBtn) || isHover(criticBtn) || isHover(finishBtn);
  cursor(over ? HAND : ARROW);
}

// Special button style for finish button
function drawFinishButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();

  if (hover) {
    fill(150, 200, 150, 220);
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(120, 180, 120);
  } else {
    fill(180, 220, 180, 210);
    drawingContext.shadowBlur = 8;
    drawingContext.shadowColor = color(150, 200, 150);
  }

  rect(x, y, w, h, 14);
  drawingContext.shadowBlur = 0;

  fill(40, 60, 40);
  textSize(22);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function partyMousePressed() {
  const hostBtn = { x: width / 2, y: 280, w: 280, h: 70 };
  const chefBtn = { x: width / 2, y: 380, w: 280, h: 70 };
  const criticBtn = { x: width / 2, y: 480, w: 280, h: 70 };
  const finishBtn = { x: width / 2, y: 600, w: 220, h: 60 };

  if (isHover(hostBtn)) {
    currentScreen = "host";
  } else if (isHover(chefBtn)) {
    currentScreen = "chef";
  } else if (isHover(criticBtn)) {
    currentScreen = "critic";
  } else if (isHover(finishBtn)) {
    checkEnding();
  }
}

function partyKeyPressed() {
  // Number keys for quick selection
  if (key === "1") currentScreen = "host";
  if (key === "2") currentScreen = "chef";
  if (key === "3") currentScreen = "critic";
  if (keyCode === ENTER) checkEnding();
}
