let x = document.querySelectorAll("li")[8];
let y = document.querySelectorAll("li")[9];
let z = document.querySelectorAll("li")[10];
let a = document.querySelector(".bookmarkCard");
let b = document.querySelector(".speedySearchCard");
let c = document.querySelector(".EasySharing");
let I = document.querySelector(".mobileIcon");

let m = document.querySelector(".bIcon");
let f = document.querySelector(".mobile-menu");
m.addEventListener("click", (e) => {
  e.preventDefault();
  if (f.classList.contains("hide")) {
    f.classList.toggle("hide");
  }
});

x.onclick = function (e) {
  e.preventDefault;
  if (x.classList.contains("selectedItem") == false) {
    x.classList.toggle("selectedItem");
  }

  if (y.classList.contains("selectedItem")) {
    y.classList.toggle("selectedItem");
  }
  if (z.classList.contains("selectedItem")) {
    z.classList.toggle("selectedItem");
  }

  if (a.classList.contains("hide")) {
    a.classList.toggle("hide");
  }

  if (b.classList.contains("hide") == false) {
    b.classList.toggle("hide");
  }

  if (c.classList.contains("hide") == false) {
    c.classList.toggle("hide");
  }
};

y.onclick = function (e) {
  e.preventDefault;
  if (y.classList.contains("selectedItem") == false) {
    y.classList.toggle("selectedItem");
  }
  if (x.classList.contains("selectedItem")) {
    x.classList.toggle("selectedItem");
  }
  if (z.classList.contains("selectedItem")) {
    z.classList.toggle("selectedItem");
  }
  if (b.classList.contains("hide")) {
    b.classList.toggle("hide");
  }

  if (c.classList.contains("hide") == false) {
    c.classList.toggle("hide");
  }

  if (a.classList.contains("hide") == false) {
    a.classList.toggle("hide");
  }
};

z.onclick = function (e) {
  e.preventDefault;
  if (z.classList.contains("selectedItem") == false) {
    z.classList.toggle("selectedItem");
  }
  if (x.classList.contains("selectedItem")) {
    x.classList.toggle("selectedItem");
  }
  if (y.classList.contains("selectedItem")) {
    y.classList.toggle("selectedItem");
  }

  if (c.classList.contains("hide")) {
    c.classList.toggle("hide");
  }

  if (a.classList.contains("hide") == false) {
    a.classList.toggle("hide");
  }

  if (b.classList.contains("hide") == false) {
    b.classList.toggle("hide");
  }
};

let questions = document.querySelectorAll(".question");

let answers = document.querySelectorAll(".answer");

let Q = document.querySelectorAll(".Q");

let arrow = document.querySelectorAll(".img");

// FaQs section
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", () => {
    if (answers[i].classList.contains("AnswerHide")) {
      answers[i].classList.toggle("AnswerHide");
      answers[i].classList.toggle("AnswerShow");
      arrow[i].classList.toggle("rotate");
      Q[i].classList.toggle("red");
      for (let j = 0; j < questions.length; j++) {
        if (j == i) {
          continue;
        }

        if (answers[j].classList.contains("AnswerHide") == false) {
          answers[j].classList.toggle("AnswerHide");
          answers[j].classList.toggle("AnswerShow");
          arrow[j].classList.toggle("rotate");
          Q[j].classList.toggle("red");
        }
      }
    } else if (answers[i].classList.contains("AnswerHide") == false) {
      answers[i].classList.toggle("AnswerHide");
      answers[i].classList.toggle("AnswerShow");
      arrow[i].classList.toggle("rotate");
      Q[i].classList.toggle("red");
    }
  });
}

// end section

// verify email
let regexp = /\w+@\w+\.\w+/;

let emailVerify = document.querySelector(".emailverify"),
  email = document.querySelector("input"),
  errorMessage = document.querySelector(".error");

emailVerify.addEventListener("click", (e) => {
  if (email.value.match(regexp) == null) {
    e.preventDefault();
    if (errorMessage.classList.contains("hide")) {
      errorMessage.classList.toggle("hide");
    }
  }
});

let close = document.querySelector(".close");

close.addEventListener("click", (e) => {
  e.preventDefault();
  f.classList.toggle("hide");
});
