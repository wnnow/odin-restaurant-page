function createNavbar() {
  const contactDiv = document.createElement("div");
  contactDiv.textContent = "Contact";
  contactDiv.classList.add("contact");

  const menuDiv = document.createElement("div");
  menuDiv.textContent = "Menu";
  menuDiv.classList.add("menu");

  const homeDiv = document.createElement("div");
  homeDiv.textContent = "Home";
  homeDiv.classList.add("home");

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  navbar.appendChild(homeDiv);
  navbar.appendChild(menuDiv);
  navbar.appendChild(contactDiv);

  const navbarContainer = document.createElement("div");
  navbarContainer.classList.add("navbar-container");
  navbarContainer.appendChild(navbar);

  return navbarContainer;
}

export { createNavbar };
