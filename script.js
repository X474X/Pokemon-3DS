let chari = document.querySelector(".char");
let bulbasaur = document.querySelector(".bulb");
let fight = document.querySelector(".fight");
let name = document.querySelector(".name");
let health = document.querySelector(".health");
let cD = document.querySelector(".char-damage");
let bD = document.querySelector(".bul-damage ");
let currentPlayer = "bulb";
let announce = document.querySelector(".announcer");
let avatar = document.querySelector(".icon-avatar");
let ultimateDamage = document.querySelector(".ultimate-damage");
let ultimateUse = document.querySelector(".ultimate-button");

let charHealth = 100;
let bulbHealth = 100;
let bulbTop = 0;
let charTop = 153;
let bulbasaurDamage = 0;
let charizardDamage = 0;

//Battle function
const battle = (currentPlayer) => {
  const randomNumber = 7 + Math.floor(Math.random() * 13);

  if (currentPlayer === "char") {
    bD.innerHTML = "-" + randomNumber;
    bD.style.visibility = "visible";
    if (charizardDamage < 40) {
      charizardDamage = charizardDamage + randomNumber;
      ultimateDamage.innerHTML = charizardDamage;
    } else {
      ultimateDamage.innerHTML = 40;
    }
    if (charizardDamage >= 40) {
      ultimateDamage.innerHTML = 40;
    }
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
      avatar.src = "./images/icon b.png";
      ultimateDamage.innerHTML = bulbasaurDamage;
    }, 1000);
  } else {
    cD.innerHTML = "-" + randomNumber;
    cD.style.visibility = "visible";
    if (bulbasaurDamage < 40) {
      bulbasaurDamage = bulbasaurDamage + randomNumber;
      ultimateDamage.innerHTML = bulbasaurDamage;
    } else {
      ultimateDamage.innerHTML = 40;
    }
    if (bulbasaurDamage >= 40) {
      ultimateDamage.innerHTML = 40;
    }
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
      avatar.src = "./images/icon c.png";
      ultimateDamage.innerHTML = charizardDamage;
    }, 1000);
  }
};

const winner = () => {
  if (charHealth <= 0) {
    chari.style.filter = "saturate(0)";
    chari.style.transform = "rotateX(-80deg)";
    winnerAnimation(bulbasaur, bulbTop);
    announce.innerHTML = "Bulbasor wins ";
  } else {
    bulbasaur.style.filter = "saturate(0)";
    bulbasaur.style.transform = "rotateX(-80deg)";
    winnerAnimation(chari, charTop);
    announce.innerHTML = "Charizard wins";
  }
};

const winnerAnimation = (character, pozition) => {
  character.style.position = "absolute";
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      character.style.top = "-100px";
      setTimeout(() => {
        character.style.top = pozition + "px";
      }, i * 1000);
    }, i * 800);
  }
};

//Damage animation function
const damageAnimation = (character, current) => {
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

//Ultimate function
const ultimateFunction = (
  pokemonHealth,
  damage,
  pokemonName,
  image,
  hit,
  nickName
) => {
  const ultNumber = 5 + Math.floor(Math.random() * 40);
  pokemonHealth = pokemonHealth - ultNumber;
  // health.innerHTML = pokemonHealth;
  ultimateDamage.innerHTML = "0";

  damage.innerHTML = "-" + ultNumber;
  damage.style.visibility = "visible";

  setTimeout(() => {
    damage.style.visibility = "hidden";
  }, 700);

  // setTimeout(() => {
  //   health.innerHTML = pokemonHealth;
  //   health.innerHTML = Number(health.innerHTML) - ultNumber;
  //   if (Number(health.innerHTML) <= 0) {
  //     winner();
  //     health.innerHTML = "0";
  //   }
  // }, 1100);

  setTimeout(() => {
    name.innerHTML = pokemonName;
    currentPlayer = nickName;
    avatar.src = image;
    ultimateDamage.innerHTML = hit;
    health.innerHTML = pokemonHealth;
  }, 1000);
};

fight.addEventListener("click", () => {
  if (currentPlayer === "bulb") {
    if (charHealth > 0 && bulbHealth > 0) {
      damageAnimation(chari, "dragon");
      battle("bulb");
      currentPlayer = "char";
    }
  } else {
    if (charHealth > 0 && bulbHealth > 0) {
      damageAnimation(bulbasaur, "broasca");
      currentPlayer = "bulb";
      battle("char");
    }
  }
});

//Ultimate functions
ultimateUse.addEventListener("click", () => {
  if (bulbasaurDamage >= 40 && currentPlayer === "bulb") {
    ultimateFunction(
      charHealth,
      cD,
      "Charizard",
      "./images/icon c.png",
      charizardDamage,
      "char"
    );
    damageAnimation(chari, "dragon");
    bulbasaurDamage = 0;
  }
  if (charizardDamage >= 40 && currentPlayer === "char") {
    ultimateFunction(
      bulbHealth,
      bD,
      "Bulbasaur",
      "./images/icon b.png",
      bulbasaurDamage,
      "buld"
    );
    damageAnimation(bulbasaur, "broasca");
    charizardDamage = 0;
  }
  console.log("BULBHEALTH>>>>>", bulbHealth);
  console.log("CHARIZARDJHEALTH>>>>>>", charHealth);
});

//1) Sa creem o functie care sa modifice numele si HP curent al pokemonilor.
//2) Sa creem o functie care sa dea damage pokemonilor.
//3) Functie Ultimata
//4) Conditie de win/lose

//Tema sapt 2 scoala
// Fa ultimata sa dea damage
