//The solution
// const start_btn = document.querySelector(".start-btn");
// const holes = document.querySelectorAll(".hole");
// const score = document.querySelector(".score");
// const moles = document.querySelectorAll(".mole");

// let score_board = 0;
// let time_up = false;
// let last_hole;
// start_btn.addEventListener("click", (event) => {
//   event.preventDefault();

//   start_game();
// });

// function random_hole(holes) {
//   let index = Math.floor(Math.random() * holes.length);
//   let hole = holes[index];

//   if (index === last_hole) {
//     return random_hole(holes);
//   }
//   last_hole = index;
//   return hole;
// }

// function mole_up() {
//   let hole = random_hole(holes);

//   hole.classList.add("up");
//   setTimeout(() => {
//     hole.classList.remove("up");
//     if (!time_up) {
//       mole_up();
//     }
//   }, 1500);

//   //   console.log(hole);
// }

// // console.log(holes);

// function start_game() {
//   mole_up();
//   time_up = false;
//   score_board = 0;
//   setTimeout(() => {
//     time_up = true;
//   }, 15000);
// }

// function hit(element) {
// if("isTrusted" in element){
//     if (!element.isTrusted || !element.target.parentElement.classList.contains("up")) {  //Change IT
//         return;
//       }
// }
//   element.target.parentElement.classList.remove("up");
//   score_board++;
//   score.textContent = score_board;
// }

// moles.forEach((mole) => {
//   mole.addEventListener("click", hit);
// });

////<My version>---After seing the solution ...my head only see the solution the only way to code this...
const start_btn = document.querySelector(".start-btn");
const holes = document.querySelectorAll(".hole");
const score = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");

let time_up = false;
let score_board = 0;
let last_hole;
start_btn.addEventListener("click", () => {
  score_board = 0;
  time_up = false;
  mole();

  setTimeout(() => {
    time_up = true;
    console.log("time_up");
  }, 15000);
});

function mole() {
  let target_hole = random_hole_popup();
  holes.forEach((hole) => {
    if (hole.classList.contains(`hole${target_hole}`)) {
      hole.classList.add("up");
      setTimeout(() => {
        hole.classList.remove("up");
        if (!time_up) {
          mole();
        }
      }, 1500);
    }
  });
}

function random_hole_popup() {
  let random_hole = Math.floor(Math.random() * holes.length);
  if (random_hole === last_hole) {
    console.log("same Hole");
    return random_hole_popup();
  }
  last_hole = random_hole;
  return random_hole;
}

moles.forEach((mole) => {
  mole.addEventListener("click", () => {
    if (mole.parentElement.classList.contains("up")) {
      console.log("HIt");
      mole.parentElement.classList.remove("up");
      score_board++;
      score.textContent = score_board;
    }
  });
});
