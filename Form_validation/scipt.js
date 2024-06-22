let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is Required";
    return false;
  }
  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    //!Regex expression for name check
    nameError.innerHTML = "Write Full Name";
    return false;
  }

  nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "Phone no. should be 11 digits";
    return false;
  }
  if (!phone.match(/^\D*(\d\D*){11}$/)) {
    //!Regex expression for number check
    phoneError.innerHTML = "Only Digits";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email-contact").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    //!Regex expression for email check
    emailError.innerHTML = "Email Invalid";
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + " More Characters required";
    return false;
  }
  messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix Error";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
