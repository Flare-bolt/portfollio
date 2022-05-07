function fasFunction() {
  document.getElementsByClassName("fs-1")[0].classList.toggle("fs1");
  document.getElementsByClassName("fs-2")[0].classList.toggle("fs2");
  document.getElementsByClassName("fs-3")[0].classList.toggle("fs3");
  document.getElementsByClassName("nav-res")[0].classList.toggle("nav-res-visibility");
}
function reverseFunction() {
  if( document.getElementsByClassName("nav-res")[0].classList.contains("nav-res-visibility"))
 {
    document.getElementsByClassName("nav-res")[0].classList.remove("nav-res-visibility");
    document.getElementsByClassName("fs-1")[0].classList.toggle("fs1");
    document.getElementsByClassName("fs-2")[0].classList.toggle("fs2");
    document.getElementsByClassName("fs-3")[0].classList.toggle("fs3");
  }
}
// =====END OF NAV=====


//=====Start of guessing game======>>>
function inputFunction() {
  let inputNumber = document.getElementById("guess-number").value;
  let myGuess = Math.floor(Math.random() * 5);
  let output1 = document.getElementById("congrats");
  let output2 = document.getElementById("congrats-text");
  let backAni = document.getElementById("output-background");
  if (inputNumber < 0 || inputNumber > 5) {
    output1.innerText = "O0ps!";
    output2.innerText = "Enter number between 0-5";
    backAni.classList.add("oops");
    if (
      backAni.classList.contains("sorry") ||
      backAni.classList.contains("congra")
    ) {
      backAni.classList.remove("congra");
      backAni.classList.remove("sorry");
    }
  } else if (inputNumber == myGuess) {
    output1.innerText = "Congrats!";
    output2.innerText = "your number matched with me";

    backAni.classList.add("congra");
    if (
      backAni.classList.contains("sorry") ||
      backAni.classList.contains("oops")
    ) {
      backAni.classList.remove("oops");
      backAni.classList.remove("sorry");
    }
  } else {
    output1.innerText = "Sorry!";
    output2.innerText = "The number didnt match";
    backAni.classList.add("sorry");
    if (
      backAni.classList.contains("oops") ||
      backAni.classList.contains("congra")
    ) {
      backAni.classList.remove("congra");
      backAni.classList.remove("oops");
    }
  }
}
//<<<=====END OF GUESSING GAME======
// =====Night mode settle=====>>>

let night = 0;
function nightFunction() {
  let dayNightBall = document.getElementById("day-night-ball");
  let dayMODE = document.getElementsByClassName("day");
  let nightMode = document.getElementsByClassName("night");
  let row = document.getElementsByClassName("row");
  let container = document.getElementsByClassName("container");
  let nav = document.getElementsByClassName("nav");
  let welcome = document.getElementsByClassName("welcome-text");
  let myCard = document.getElementsByClassName("my-card");
  let contactCard = document.getElementsByClassName("contact-card");
  let footer = document.getElementsByClassName("footer-main");
  let contactForm = document.getElementsByClassName("form-control");
  let toss = document.getElementsByClassName("toss");
  let fas = document.getElementsByClassName("fs");
  let navres = document.getElementsByClassName("nav-res");
  let sendText = document.getElementById("text");
  console.log(sendText);
  let mainImage = document.getElementsByClassName("main-image-container");
  night++;

  for (let i = 0; i < 7; i++) {
    if (night % 2 == 1) {
      row[i].classList.add("con-night");
    } else {
      row[i].classList.remove("con-night");
    }
  }

  for (i = 0; i < 3; i++) {
    if (night % 2 == 1) {
      myCard[i].classList.add("col-night");
      contactCard[i].classList.add("col-night");
      fas[i].classList.add("don-night");
    } else {
      myCard[i].classList.remove("col-night");
      contactCard[i].classList.remove("col-night");
      fas[i].classList.remove("don-night");
    }
  }

  if (night % 2 == 1) {
    nav[0].classList.add("con-night");
    container[0].classList.add("con-night");
    footer[0].classList.add("con-night");
    document.body.classList.add("con-night");
    toss[0].classList.add("con-night");
    toss[1].classList.add("con-night");
    navres[0].classList.add("con-night");
    
  } else {
    nav[0].classList.remove("con-night");
    container[0].classList.remove("con-night");
    footer[0].classList.remove("con-night");
    document.body.classList.remove("con-night");
    toss[0].classList.remove("con-night");
    toss[1].classList.remove("con-night");
    navres[0].classList.remove("con-night");
  }
  if (night % 2 == 1) {
    nav[0].classList.add("col-night-nav");
    welcome[0].classList.add("col-night");
    footer[0].classList.add("col-night");
    mainImage[0].classList.add("col-night");
    toss[0].classList.add("col-night");
    toss[1].classList.add("col-night");
    contactForm[0].style.border = "3px solid white";
    contactForm[1].style.border = "3px solid white";
    sendText.style.border = "3px solid white";
    dayNightBall.style.transform = "translate(20px,-3px)";
    dayMODE[0].style.display ="none";
    nightMode[0].style.display ="block";
  } else {
    nav[0].classList.remove("col-night-nav");
    welcome[0].classList.remove("col-night");
    footer[0].classList.remove("col-night");
    mainImage[0].classList.remove("col-night");
    toss[0].classList.remove("col-night");
    toss[1].classList.remove("col-night");
    contactForm[0].style.border = "3px solid rgba(0, 0, 0, 0.2)";
    contactForm[1].style.border = "3px solid rgba(0, 0, 0, 0.2)";
    sendText.style.border = "3px solid rgba(0, 0, 0, 0.2)";
    dayNightBall.style.transform = "translate(0px,-3px)";
    dayNightBall.classList.remove("bi-moon-fill");
    dayNightBall.style.color = "black";
    nightMode[0].style.display = "none";
    dayMODE[0].style.display = "block";
    console.log(nightMode[0]);
  }
}
//<<<=====end of night mode settle