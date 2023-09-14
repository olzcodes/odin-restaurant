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
document.querySelector("#btn-home").classList.add("active");
body.append(footer());

const navButtons = document.querySelectorAll("button");

const clickHandlerNavButtons = function () {
  navButtons.forEach((button) => button.classList.remove("active"));
  this.classList.add("active");
  let buttonName = this.textContent;
  content.innerHTML = "";
  if (buttonName === "Home") content.append(home());
  if (buttonName === "Menu") content.append(menu());
  if (buttonName === "Contact") content.append(contact());
};

navButtons.forEach((button) =>
  button.addEventListener("click", clickHandlerNavButtons)
);
