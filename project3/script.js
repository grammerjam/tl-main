function copyCardName() {
  let text = document.getElementById("cardHolderName").value;
  document.getElementById("copiedName").innerHTML = text;
}

function copyCardNumber() {
  let text = document
    .getElementById("cardNumber")
    .value.match(/.{1,4}/g)
    .join(" ");
  document.getElementById("copiedNumber").innerHTML = text;
}

function copyCardMonth() {
  let text = document.getElementById("cardExpirationMonth").value;
  document.getElementById("copiedMonth").innerHTML = text;
}

function copyCardYear() {
  let text = document.getElementById("cardExpirationYear").value;
  document.getElementById("copiedYear").innerHTML = text;
}

function copyCardCVC() {
  let text = document.getElementById("cardCVC").value;
  document.getElementById("copiedCVC").innerHTML = text;
}

const nameError = document.getElementById("nameError");
const cardNumberError = document.getElementById("numberError");

function validateName() {
  let name = document.getElementById("cardHolderName").value;
  // checks if there is a written name
  if (name.length == 0) {
    nameError.innerHTML = " Name is required";
    return false;
  }
  // checks if it is a full name with alphabetic characters
  if (!name.match(/^[^\s]+\s[^\s]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "";
  return true;
}

function validateNumber() {
  let number = document.getElementById("cardNumber").value;
  // checks if card number is empty
  if (number.length == 0) {
    cardNumberError.innerHTML = "Card number is required";
    return false;
  }
  // checks if card number is more or less than 16
  if (number.length != 16) {
    cardNumberError.innerHTML = "Card number should be 16 digits";
    return false;
  }
  cardNumberError.innerHTML = "";
  return true;
}

// form.addEventListener("submit", (event) => {
//   if (!cardHolderName.validity.valid || !cardNumber.validity.valid || !cardExpirationMonth.validity.valid || !cardExpirationYear.validity.valid || !cardCVC.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });
