import { header } from "./header";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
import { footer } from "./footer";
import "./style.css";

const body = document.body;
const content = document.getElementById("content");
body.insertBefore(header(), content);
content.append(home());
body.append(footer());

const clickHandlerNavButtons = function () {
  let buttonName = this.textContent;
  content.innerHTML = "";
  if (buttonName === "Home") content.append(home());
  if (buttonName === "Menu") content.append(menu());
  if (buttonName === "Contact") content.append(contact());
};

const navButtons = document.querySelectorAll("button");
navButtons.forEach((button) =>
  button.addEventListener("click", clickHandlerNavButtons)
);
