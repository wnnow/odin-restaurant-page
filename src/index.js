import { createNavbar } from "./navbar";
import { createHomeContent } from "./home";
import "./style.css";

function createContentDiv() {
  const element = document.createElement("div");

  element.id = "content";

  return element;
}

document.body.appendChild(createContentDiv());

document.querySelector("#content").appendChild(createNavbar());

function createMainContentContainer() {
  const mainContentContainer = document.createElement("div");

  mainContentContainer.classList.add("main-content-container");
  mainContentContainer.id = "main-content-container";

  return mainContentContainer;
}

document.body.appendChild(createMainContentContainer());

function injectContent(createContentFunction) {
  const mainContentContainer = document.querySelector(
    "#main-content-container"
  );
  mainContentContainer.appendChild(createContentFunction());
}

injectContent(createHomeContent);
