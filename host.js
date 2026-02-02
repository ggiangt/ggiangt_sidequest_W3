// ------------------------------------------------------------
// host.js - Conversation with the Host
// ------------------------------------------------------------

function drawHost() {
  // Elegant blue-green background for the host
  background(50, 70, 80);

  // Draw stats
  drawStats();

  // Guest name
  fill(255, 220, 180);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("The Host", width / 2, 100);

  // Character description
  fill(200, 220, 230);
  textSize(18);
  text("A wealthy socialite with a perfect smile", width / 2, 150);

  // Dialogue box
  fill(40, 50, 60, 200);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, 280, 600, 120, 12);

  // Dialogue text
  fill(230, 240, 250);
  textSize(20);
  textAlign(CENTER, CENTER);
  text('"Welcome to my humble gathering!"', width / 2, 260);
  textSize(16);
  text('"I do hope you\'re enjoying yourself. Everything is simply perfect tonight."', width / 2, 300);

  // Choice buttons
  const choice1 = {
    x: width / 2,
    y: 450,
    w: 400,
    h: 60,
    label: "Compliment the party",
  };

  const choice2 = {
    x: width / 2,
    y: 540,
    w: 400,
    h: 60,
    label: "Ask about the drama last year",
  };

  drawButton(choice1);
  drawButton(choice2);

  // Show what each choice does
  fill(180, 190, 200);
  textSize(14);
  text("(trust +15, social +10)", width / 2, 490);
  text("(secrets +1, trust -5)", width / 2, 580);

  // Back hint
  fill(150, 160, 170);
  textSize(14);
  text("Press B to go back without choosing", width / 2, 700);

  // Cursor
  const over = isHover(choice1) || isHover(choice2);
  cursor(over ? HAND : ARROW);
}

function hostMousePressed() {
  const choice1 = { x: width / 2, y: 450, w: 400, h: 60 };
  const choice2 = { x: width / 2, y: 540, w: 400, h: 60 };

  if (isHover(choice1)) {
    // Compliment the party
    trust += 15;
    social += 10;
    talkedToHost = true;
    currentScreen = "party";
  } else if (isHover(choice2)) {
    // Ask about drama
    secrets += 1;
    trust -= 5;
    talkedToHost = true;
    currentScreen = "party";
  }
}

function hostKeyPressed() {
  if (key === "b" || key === "B") {
    currentScreen = "party";
  }
  if (key === "1") {
    trust += 15;
    social += 10;
    talkedToHost = true;
    currentScreen = "party";
  }
  if (key === "2") {
    secrets += 1;
    trust -= 5;
    talkedToHost = true;
    currentScreen = "party";
  }
}
