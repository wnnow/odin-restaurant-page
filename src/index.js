import { createNavbar } from "./navbar";
import "./style.css";

function createContentDiv() {
  const element = document.createElement("div");

  element.id = "content";

  return element;
}

document.body.appendChild(createContentDiv());
document.querySelector("#content").appendChild(createNavbar());
