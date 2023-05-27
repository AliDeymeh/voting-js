const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");

const shape1 = document.querySelector(".shape1");
const shape2 = document.querySelector(".shape2");
const shape3 = document.querySelector(".shape3");
let bol1 = false,
  bol2 = false,
  bol3 = false;

btn1.addEventListener("click", () => {
  if (!bol1) {
    bol1 = true;
    btn1.innerText = "بر گرداندن رای";
    playAudio();
  } else {
    bol1 = false;
    btn1.innerText = "ثبت رای";
  }

  shape1.classList.toggle("active");
});
btn2.addEventListener("click", () => {
  if (!bol2) {
    bol2 = true;
    btn2.innerText = "بر گرداندن رای";
    playAudio();
  } else {
    bol2 = false;
    btn2.innerText = "ثبت رای";
  }

  shape2.classList.toggle("active");
});

const audio = document.querySelector(".audio");
btn3.addEventListener("click", () => {
  if (!bol3) {
    bol3 = true;
    btn3.innerText = "بر گرداندن رای";
    playAudio();
  } else {
    bol3 = false;
    btn3.innerText = "ثبت رای";
  }

  shape3.classList.toggle("active");
});

function playAudio() {
  audio.play();
}

function pauseSong() {
  audio.pause();
}
