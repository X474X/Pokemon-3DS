let chari = document.querySelector(".char");
let bulbasaur = document.querySelector(".bulb");
let fight = document.querySelector(".fight");
let name = document.querySelector(".name");
let health = document.querySelector(".health");
let cD = document.querySelector(".char-damage");
let bD = document.querySelector(".bul-damage ");
let currentPlayer = "bulb";

let charHealth = 100;
let bulbHealth = 100;

//Damage function
const damage = (character, current) => {
  character.style.filter = "saturate(10)";
  if (current === "dragon") {
    character.style.marginRight = "10px";
  } else {
    character.style.marginLeft = "10px";
  }
  setTimeout(() => {
    if (current === "dragon") {
      character.style.marginRight = "0px";
    } else {
      character.style.marginLeft = "0px";
    }
  }, 200);
  setTimeout(() => {
    character.style.filter = "saturate(1)";
  }, 500);
};

//Battle function
const battle = (currentPlayer) => {
  const randomNumber = 10 + Math.floor(Math.random() * 20);

  if (currentPlayer === "char") {
    bD.innerHTML = "-" + randomNumber;
    bD.style.visibility = "visible";

    setTimeout(() => {
      bD.style.visibility = "hidden";
    }, 700);

    setTimeout(() => {
      health.innerHTML = bulbHealth;
      health.innerHTML = Number(health.innerHTML) - randomNumber;
      if (Number(health.innerHTML) <= 0) {
        winner();
        health.innerHTML = "0";
      }
      bulbHealth = bulbHealth - randomNumber;
    }, 1100);

    setTimeout(() => {
      name.innerHTML = "Bulbasor";
    }, 1000);
  } else {
    cD.innerHTML = "-" + randomNumber;
    cD.style.visibility = "visible";

    setTimeout(() => {
      cD.style.visibility = "hidden";
    }, 700);

    setTimeout(() => {
      health.innerHTML = charHealth;
      health.innerHTML = Number(health.innerHTML) - randomNumber;
      charHealth = charHealth - randomNumber;
      if (Number(health.innerHTML) <= 0) {
        winner();
        health.innerHTML = "0";
      }
    }, 1100);

    setTimeout(() => {
      name.innerHTML = "Charizard";
    }, 1000);
  }
};

const winner = () => {
  if (charHealth <= 0) {
    chari.style.filter = "saturate(0)";
    chari.style.transform = "rotateX(-80deg)";
    winnerAnimation(bulbasaur);
  } else {
    bulbasaur.style.filter = "saturate(0)";
    bulbasaur.style.transform = "rotateX(-80deg)";
    winnerAnimation(chari);
  }
};

const winnerAnimation = (character) => {
  character.style.position = "absolute";
  character.style.top = "-100px";
};

fight.addEventListener("click", () => {
  if (currentPlayer === "bulb") {
    if (charHealth > 0 && bulbHealth > 0) {
      damage(chari, "dragon");
      battle("bulb");
      currentPlayer = "char";
    }
  } else {
    if (charHealth > 0 && bulbHealth > 0) {
      damage(bulbasaur, "broasca");
      currentPlayer = "bulb";
      battle("char");
    }
  }
});

//1) Sa creem o functie care sa modifice numele si HP curent al pokemonilor.
//2) Sa creem o functie care sa dea damage pokemonilor.
//3) Functie Ultimata
//4) Conditie de win/lose
