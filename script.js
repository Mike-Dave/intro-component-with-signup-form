"use strict";

// Selecting HTML elements and CSS classes
const submitBtn = document.querySelector("#btn");

// FIRST NAME INPUT
const firstNameArea = document.getElementById("firstNameArea");
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const firstNameErrorImage = document.getElementById("firstNameErrorImage");

// LAST NAME INPUT
const lastNameArea = document.getElementById("lastNameArea");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
const lastNameErrorImage = document.getElementById("lastNameErrorImage");

// PASSWORD INPUT
const passwordArea = document.getElementById("passwordArea");
const passwordErrorMessage = document.getElementById("passwordErrorMessage");
const passwordErrorImage = document.getElementById("passwordErrorImage");

// EMAIL ADDRESS INPUT
const emailArea = document.getElementById("emailArea");
const emailErrorMessage = document.getElementById("emailErrorMessage");
const emailErrorImage = document.getElementById("emailErrorImage");

// EMAIL REGEX
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// To check for error
const errorInfo = function (
  contentArea,
  contentErrorImage,
  contentErrorMessage
) {
  contentArea.classList.add("outline-on-error");
  contentErrorImage.classList.remove("hidden");
  contentErrorMessage.classList.remove("hidden");
  contentArea.setAttribute("placeholder", "");

  if (contentArea === emailArea) {
    contentArea.classList.add("outline-on-error", "email-placeholder-error");
    contentArea.setAttribute("placeholder", "email@example/com");
  }
};

// When a user tries to edit or reenter their details
const reEnterInput = function (
  contentArea,
  contentErrorImage,
  contentErrorMessage
) {
  contentArea.classList.remove("outline-on-error");
  contentErrorImage.classList.add("hidden");
  contentErrorMessage.classList.add("hidden");
  contentArea.setAttribute("placeholder", "");
};
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let firstNameAreaValue = firstNameArea.value;
  let lastNameAreaValue = lastNameArea.value;
  let passwordAreaValue = passwordArea.value;
  let emailValue = emailArea.value;

  if (firstNameAreaValue === "") {
    errorInfo(firstNameArea, firstNameErrorImage, firstNameErrorMessage);
  }
  if (lastNameAreaValue === "") {
    errorInfo(lastNameArea, lastNameErrorImage, lastNameErrorMessage);
  }

  if (!emailRegex.test(emailValue)) {
    errorInfo(emailArea, emailErrorImage, emailErrorMessage);
  }

  if (passwordAreaValue === "") {
    errorInfo(passwordArea, passwordErrorImage, passwordErrorMessage);
  }
});

// To remove error images and text after the user inputed wrong information
firstNameArea.addEventListener("keydown", function () {
  reEnterInput(firstNameArea, firstNameErrorImage, firstNameErrorMessage);
});
lastNameArea.addEventListener("keydown", function () {
  reEnterInput(lastNameArea, lastNameErrorImage, lastNameErrorMessage);
});
emailArea.addEventListener("keydown", function () {
  reEnterInput(emailArea, emailErrorImage, emailErrorMessage);
});
passwordArea.addEventListener("keydown", function () {
  reEnterInput(passwordArea, passwordErrorImage, passwordErrorMessage);
});
