let firstName, lastName, email, password;

// Get all input
const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
);
console.log(inputs);

// Check each input
const firstNameChecker = (value) => {
  let displayTime;

  if (value.length > 0) {
    if (!value.match(/^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})*$/i)) {
      errorDisplay("firstName", "First Name is not correct", false);
      firstName = null;
    } else {
      errorDisplay("firstName", "", true);
      firstName = value;
    }
  } else {
    errorDisplay("firstName", "First Name cannot be empty", false);
    firstName = null;
    if (value.length < 1) {
      clearTimeout(displayTime);
      displayTime = setTimeout(() => {
        errorDisplay("firstName", "", true);
      }, 2000);
    }
  }
};

const lastNameChecker = (value) => {
  let displayTime;

  if (value.length > 0) {
    if (!value.match(/^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})*$/i)) {
      errorDisplay("lastName", "Last Name is not correct", false);
      lastName = null;
    } else {
      errorDisplay("lastName", "", true);
      lastName = value;
    }
  } else {
    errorDisplay("lastName", "Last Name cannot be empty", false);
    lastName = null;
    if (value.length < 1) {
      clearTimeout(displayTime);
      displayTime = setTimeout(() => {
        errorDisplay("lastName", "", true);
      }, 2000);
    }
  }
};

const emailChecker = (value) => {
  let displayTime;

  if (value.length < 1) {
    errorDisplay("email", "Email cannot be empty", false);
    email = null;
    clearTimeout(displayTime);
    displayTime = setTimeout(() => {
      errorDisplay("email", " ", true);
    }, 2000);
  } else if (
    !value.match(
      /[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i
    )
  ) {
    errorDisplay("email", "Email is not correct", false);
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  let displayTime;

  if (value.length < 1) {
    errorDisplay("password", "Password cannot be empty", false);
    password = null;
    clearTimeout(displayTime);
    displayTime = setTimeout(() => {
      errorDisplay("password", " ", true);
    }, 2000);
  } else if (
    !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/)
  ) {
    errorDisplay("password", "Password is not correct", false);
    password = null;
  } else {
    errorDisplay("password", "", true);
    password = value;
  }
};

//Display error message
const errorDisplay = (tag, messaage, valid) => {
  const container = document.querySelector(`.${tag}-container`);
  const span = document.querySelector(`.${tag}-container > span`);

  if (!valid) {
    container.classList.add("error");
    span.textContent = messaage;
  } else {
    container.classList.remove("error");
    span.textContent = "";
  }
};

// submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName && lastName && email && password) {
    alert("On my way dude");
    inputs.forEach((input) => {
      input.value = "";
    });
    firstName = null;
    lastName = null;
    email = null;
    password = null;
  } else {
    inputs.forEach((input) => {
      let value = input.value;
      firstNameChecker(value);
      lastNameChecker(value);
      emailChecker(value);
      passwordChecker(value);
    });
  }
});
// Event for each input
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    console.log(e.target.id);
    let id = e.target.id;
    let value = e.target.value;

    switch (id) {
      case "firstName":
        firstNameChecker(value);
        break;
      case "lastName":
        lastNameChecker(value);
        break;
      case "email":
        emailChecker(value);
        break;
      case "password":
        passwordChecker(value);
        break;
      default:
        null;
    }
  });
});
