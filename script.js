const buttonsEl = document.querySelectorAll(".skill__button");
const skillValuesEl = document.querySelectorAll(".skill__value");
const skillNamesEl = document.querySelectorAll(".skill__name");
const calcEl = document.querySelector(".total__dd");
const deleteBtnEl = document.querySelector(".delete_button");
const resetBtnEl = document.querySelector(".reset_button");

// This sets the value of each skillValue element to 0. This allows the total difficulty to calculate difficulty of not finished passes.
skillValuesEl.forEach((skillValue) => {
  skillValue.value = 0;
});

// Initialize the skill index to 0
let skillIndex = 0;

// Add a click event listener to each button
buttonsEl.forEach((button) => {
  button.addEventListener("click", function () {
    // Set the text content of the current skill value span
    skillValuesEl[skillIndex].textContent = button.value;
    skillNamesEl[skillIndex].textContent = button.textContent;
    skillValuesEl[skillIndex].value = button.value;

    // Move to the next skill index
    skillIndex++;

    // Calculate the total difficulty
    let totalDifficulty = 0;
    skillValuesEl.forEach((skillValue) => {
      // the parseFloat converts the value of skillValue into
      totalDifficulty += parseFloat(skillValue.value);
    });

    // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
    calcEl.textContent = totalDifficulty.toFixed(1);

    // If filled all 8 skill values, disable buttons
    if (skillIndex >= skillValuesEl.length) {
      buttonsEl.disable = true;
    }
  });
});

deleteBtnEl.addEventListener("click", function () {
  skillIndex--;
  skillValuesEl[skillIndex].textContent = "";
  skillNamesEl[skillIndex].textContent = "";
  skillValuesEl[skillIndex].value = "0";

  let totalDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    // the parseFloat converts the value of skillValue into
    totalDifficulty += parseFloat(skillValue.value);
  });

  // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
  calcEl.textContent = totalDifficulty.toFixed(1);
});

resetBtnEl.addEventListener("click", function () {
  skillValuesEl.forEach((skill) => {
    skill.textContent = "";
    skill.value = "0";
  });
  skillNamesEl.forEach((skill) => {
    skill.textContent = "";
  });

  skillIndex = 0;

  let totalDifficulty = 0;
  skillValuesEl.forEach((skillValue) => {
    // the parseFloat converts the value of skillValue into
    totalDifficulty += parseFloat(skillValue.value);
  });

  // Update the total difficulty element// .toFixed is what forces calc to show the number only with 1 digit after the decimal point
  calcEl.textContent = totalDifficulty.toFixed(1);
});
