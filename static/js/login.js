const signinbtn = document.querySelector(".sign-in");
const signupbtn = document.querySelector(".sign-up");
const signinForm = document.querySelector(".signin-form");
const signupForm = document.querySelector(".signup-form");
const signupName = document.querySelector(".signup-name");
const signupEmail = document.querySelector(".signup-email");
const signupPassword = document.querySelector("#signup-password");
const confirmPassword = document.querySelector("#confirm-password");
const confirmPassMessage = document.querySelector(".confirm-pass-message");

// window.addEventListener("load", () => {
//   // signupForm.classList.add("hide");
//   // confirmPassMessage.classList.toggle("hide");
// });

// confirm password validation
var check = function () {
  if (signupPassword.value == confirmPassword.value) {
    confirmPassMessage.style.color = "#81f581";
    confirmPassMessage.textContent = "password matched";
  } else {
    confirmPassMessage.style.color = "#ff8181";
    confirmPassMessage.textContent = "password did not match";
  }
};

signupbtn.addEventListener("click", () => {
  if (signupbtn.classList.contains("actived") == false) {
    signupbtn.classList.add("actived");
    signinbtn.classList.remove("actived");

    signupForm.classList.add("show");
    signupForm.classList.remove("hide");
    signinForm.classList.add("hide");
    signinForm.classList.remove("show");
  } else {
    return false;
  }
});

signinbtn.addEventListener("click", () => {
  if (signinbtn.classList.contains("actived") == false) {
    signinbtn.classList.add("actived");
    signupbtn.classList.remove("actived");

    signupForm.classList.add("hide");
    signupForm.classList.remove("show");
    signinForm.classList.add("show");
    signinForm.classList.remove("hide");
  } else {
    return false;
  }
});

// signup password match
