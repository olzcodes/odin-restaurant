import { header } from "./header";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const content = document.getElementById("content");
content.append(header());
content.append(home());

const clickHandlerNavButtons = function () {
  let buttonName = this.textContent;
  content.removeChild(content.lastChild);
  if (buttonName === "Home") content.append(home());
  if (buttonName === "Menu") content.append(menu());
  if (buttonName === "Contact") content.append(contact());
};

const navButtons = document.querySelectorAll("button");
navButtons.forEach((button) =>
  button.addEventListener("click", clickHandlerNavButtons)
);
