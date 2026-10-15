const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let text = "";

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    if (value === "C") {
      text = "";
      display.textContent = "0";
    } else if (value === "=") {
      if (text === "") return;
      try {
        text = String(eval(text));
        display.textContent = text;
      } catch {
        text = "";
        display.textContent = "Error";
      }
    } else {
      text = text + value;
      display.textContent = text;
    }
  });
});