let chari = document.querySelector(".char");
let bulbasaur = document.querySelector(".bulb");
let fight = document.querySelector(".fight");

let currentPlayer = "bulb";

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

fight.addEventListener("click", () => {
  if (currentPlayer === "bulb") {
    damage(chari, "dragon");
    currentPlayer = "char";
  } else {
    damage(bulbasaur, "broasca");
    currentPlayer = "bulb";
  }
});
