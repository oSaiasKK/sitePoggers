const calcs = document.querySelectorAll(".calc");

calcs.forEach((calc) => {
  const input = calc.querySelector("input");
  const buttons = calc.querySelectorAll("button:not([data-char='='])");
  const equal = calc.querySelector("button[data-char='=']");

  equal.addEventListener("click", () => {
    input.value = eval(input.value);
  });

  clear.addEventListener("click", () => {
    input.value = "";
  });

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const char = button.getAttribute("data-char");
      input.value += char;
    });
  });
});
