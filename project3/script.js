// let btnCheck = document.querySelector('formButton')
// let result = document.getElementsByClassName('label')
// let ExpirationMonth = document.querySelector('cardExpirationMonth')
// let ExpirationYear = document.querySelector('cardExpirationYear')

// btnCheck.addEventListener('click', () => {
//   let cardExpirationMonth = inputExpirationMonth.value
//   let cardExpirationYear = inputExpirationYear.value

//   result.innerText = moment(`${month}/${year}`, 'MM/YY', true).isValid();
// })

// function checkForm(form) {
//   // validation fails if the input is blank
//   if (form.inputfield.value == "") {
//     alert("Error: Input is empty!");
//     form.inputfield.focus();
//     return false;
//   }

//   // regular expression to match only alphanumeric characters and spaces
//   const re = /^[\w ]+$/;

//   // validation fails if the input doesn't match our regular expression
//   if (!re.test(form.inputfield.value)) {
//     alert("Error: Input contains invalid characters!");
//     form.inputfield.focus();
//     return false;
//   }

//   // validation was successful
//   return true;
// }

// format AMEX card

// var cleave = new Cleave('.card-number', {
//   creditCard: true,
//   onCreditCardTypeChanged: function (type) {
//     // update UI ...
//   }
// });

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

const cardNumberError = document.getElementById("numberError");

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

const monthError = document.getElementById("monthError");

function validateMonth() {
  let month = document.getElementById("cardExpirationMonth").value;
  // checks if card month is empty
  if (month.length == 0) {
    monthError.innerHTML = "Cannot be blank";
    return false;
  }
  // checks if card month is more or less than 2
  if (month.length != 2) {
    monthError.innerHTML = "Must be 2 digits";
    return false;
  }
  if (!month.match(/^0[1-9]|1[0-2]$/)) {
    monthError.innerHTML = "Incorrect Format";
    return false;
  }
  monthError.innerHTML = "";
  return true;
}

const yearError = document.getElementById("yearError");

function validateYear() {
  let year = document.getElementById("cardExpirationYear").value;
  // checks if card year is empty
  if (year.length == 0) {
    yearError.innerHTML = "Cannot be blank";
    return false;
  }
  // checks if card year is more or less than 2
  if (year.length != 2) {
    yearError.innerHTML = "Must be 2 digits";
    return false;
  }
  if (!year.match(/^(?:2[3-9]|[3-9][0-9]|33)$/)) {
    yearError.innerHTML = "Incorrect Format";
    return false;
  }
  yearError.innerHTML = "";
  return true;
}

const CVCError = document.getElementById("CVCError");

function validateCVC() {
  let CVC = document.getElementById("cardCVC").value;
  // checks if card cvc is empty
  if (CVC.length == 0) {
    CVCError.innerHTML = "Cannot be blank";
    return false;
  }
  // checks if card CVC is more or less than 3
  if (CVC.length != 3) {
    CVCError.innerHTML = "Must be 3 digits";
    return false;
  }
  CVCError.innerHTML = "";
  return true;
}

function validateForm(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const cardHolderName = document.getElementById('cardHolderName');
  const cardNumber = document.getElementById('cardNumber');
  const expirationMonth = document.getElementById('cardExpirationMonth');
  const expirationYear = document.getElementById('cardExpirationYear');
  const cardCVC = document.getElementById('cardCVC');

  const danger = document.getElementById('danger');
  const success = document.getElementById('success');

  if (cardHolderName.value === '' || cardNumber.value === '' || expirationMonth.value === '' || expirationYear.value === '' || cardCVC.value === '') {
    danger.style.display = 'block';
  } else {
    setTimeout(() => {
      cardHolderName.value = '';
      cardNumber.value = '';
      expirationMonth.value = '';
      expirationYear.value = '';
      cardCVC.value = '';
    }, 4000);

    success.style.display = 'block';
  }

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 8000);
}

const cardHolderName = document.getElementById("cardHolderName");
const cardNumber = document.getElementById("cardNumber");
const expirationMonth = document.getElementById("cardExpirationMonth");
const expirationYear = document.getElementById("cardExpirationYear");
const cardCVC = document.getElementById("cardCVC");

function validateForm(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const cardHolderName = document.getElementById('cardHolderName');
  const cardNumber = document.getElementById('cardNumber');
  const expirationMonth = document.getElementById('cardExpirationMonth');
  const expirationYear = document.getElementById('cardExpirationYear');
  const cardCVC = document.getElementById('cardCVC');

  const danger = document.getElementById('danger');
  const success = document.getElementById('success');

  if (cardHolderName.value === '' || cardNumber.value === '' || expirationMonth.value === '' || expirationYear.value === '' || cardCVC.value === '') {
    danger.style.display = 'block';
  } else {
    setTimeout(() => {
      cardHolderName.value = '';
      cardNumber.value = '';
      expirationMonth.value = '';
      expirationYear.value = '';
      cardCVC.value = '';
    }, 8000);

    success.style.display = 'block';
  }

  // onEvent("cancelButton", "click", function(){
  //   if(t) {
  //     clearTimeout(t);

  setTimeout(() => {
    danger.style.display = 'none';
    success.style.display = 'none';
  }, 9000);
}

const openModal = document.querySelector("[data-open-modal]")
const closeModal = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

openModal.addEventListener("click", () => {
  modal.showModal()
})

closeModal.addEventListener("click", () => {
  modal.close()
})

// form.addEventListener("submit", (event) => {
//   if (
//     !cardHolderName.validity.valid ||
//     !cardNumber.validity.valid ||
//     !expirationMonth.validity.valid ||
//     !expirationYear.validity.valid ||
//     !cardCVC.validity.valid
// openModal.addEventListener("click", () => {
//   modal.showModal();
// });
//   ) {
//     showError();
//     event.preventDefault();
//   }
// });


