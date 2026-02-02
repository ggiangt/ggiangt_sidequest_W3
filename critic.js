// ------------------------------------------------------------
// critic.js - Conversation with the Critic
// ------------------------------------------------------------

function drawCritic() {
  // Cool purple background for the mysterious critic
  background(60, 45, 75);

  // Draw stats
  drawStats();

  // Guest name
  fill(255, 220, 180);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("The Critic", width / 2, 100);

  // Character description
  fill(220, 200, 230);
  textSize(18);
  text("A sharp-tongued reviewer who knows everyone's business", width / 2, 150);

  // Dialogue box
  fill(50, 40, 60, 200);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, 280, 600, 120, 12);

  // Dialogue text
  fill(240, 230, 250);
  textSize(20);
  textAlign(CENTER, CENTER);
  text('"Oh, another guest wanting my attention?"', width / 2, 260);
  textSize(16);
  text('"I\'ve seen things tonight that would make your head spin..."', width / 2, 300);

  // Choice buttons
  const choice1 = {
    x: width / 2,
    y: 450,
    w: 400,
    h: 60,
    label: "Flatter their reputation",
  };

  const choice2 = {
    x: width / 2,
    y: 540,
    w: 400,
    h: 60,
    label: "Press for the juicy details",
  };

  drawButton(choice1);
  drawButton(choice2);

  // Show what each choice does
  fill(190, 180, 200);
  textSize(14);
  text("(social +20, trust +5)", width / 2, 490);
  text("(secrets +1, trust -10, social -5)", width / 2, 580);

  // Back hint
  fill(160, 150, 170);
  textSize(14);
  text("Press B to go back without choosing", width / 2, 700);

  // Cursor
  const over = isHover(choice1) || isHover(choice2);
  cursor(over ? HAND : ARROW);
}

function criticMousePressed() {
  const choice1 = { x: width / 2, y: 450, w: 400, h: 60 };
  const choice2 = { x: width / 2, y: 540, w: 400, h: 60 };

  if (isHover(choice1)) {
    // Flatter them
    social += 20;
    trust += 5;
    talkedToCritic = true;
    currentScreen = "party";
  } else if (isHover(choice2)) {
    // Get secrets
    secrets += 1;
    trust -= 10;
    social -= 5;
    talkedToCritic = true;
    currentScreen = "party";
  }
}

function criticKeyPressed() {
  if (key === "b" || key === "B") {
    currentScreen = "party";
  }
  if (key === "1") {
    social += 20;
    trust += 5;
    talkedToCritic = true;
    currentScreen = "party";
  }
  if (key === "2") {
    secrets += 1;
    trust -= 10;
    social -= 5;
    talkedToCritic = true;
    currentScreen = "party";
  }
}
