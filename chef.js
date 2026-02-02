// ------------------------------------------------------------
// chef.js - Conversation with the Chef
// ------------------------------------------------------------

function drawChef() {
  // Warm orange-red kitchen background
  background(90, 55, 45);

  // Draw stats
  drawStats();

  // Guest name
  fill(255, 220, 180);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("The Chef", width / 2, 100);

  // Character description
  fill(255, 200, 180);
  textSize(18);
  text("A temperamental culinary genius", width / 2, 150);

  // Dialogue box
  fill(60, 40, 35, 200);
  noStroke();
  rectMode(CENTER);
  rect(width / 2, 280, 600, 120, 12);

  // Dialogue text
  fill(255, 240, 230);
  textSize(20);
  textAlign(CENTER, CENTER);
  text('"Ah, you appreciate fine cuisine, yes?"', width / 2, 260);
  textSize(16);
  text('"The host... she doesn\'t know what I put up with to make this happen."', width / 2, 300);

  // Choice buttons
  const choice1 = {
    x: width / 2,
    y: 450,
    w: 400,
    h: 60,
    label: "Praise the food enthusiastically",
  };

  const choice2 = {
    x: width / 2,
    y: 540,
    w: 400,
    h: 60,
    label: "Ask what they put up with",
  };

  drawButton(choice1);
  drawButton(choice2);

  // Show what each choice does
  fill(200, 180, 170);
  textSize(14);
  text("(trust +10, social +15)", width / 2, 490);
  text("(secrets +1, social -10)", width / 2, 580);

  // Back hint
  fill(170, 150, 140);
  textSize(14);
  text("Press B to go back without choosing", width / 2, 700);

  // Cursor
  const over = isHover(choice1) || isHover(choice2);
  cursor(over ? HAND : ARROW);
}

function chefMousePressed() {
  const choice1 = { x: width / 2, y: 450, w: 400, h: 60 };
  const choice2 = { x: width / 2, y: 540, w: 400, h: 60 };

  if (isHover(choice1)) {
    // Praise the food
    trust += 10;
    social += 15;
    talkedToChef = true;
    currentScreen = "party";
  } else if (isHover(choice2)) {
    // Ask about problems
    secrets += 1;
    social -= 10;
    talkedToChef = true;
    currentScreen = "party";
  }
}

function chefKeyPressed() {
  if (key === "b" || key === "B") {
    currentScreen = "party";
  }
  if (key === "1") {
    trust += 10;
    social += 15;
    talkedToChef = true;
    currentScreen = "party";
  }
  if (key === "2") {
    secrets += 1;
    social -= 10;
    talkedToChef = true;
    currentScreen = "party";
  }
}
