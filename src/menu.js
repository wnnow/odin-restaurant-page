function createMenuContent() {
  const mainContentHeader = document.createElement("div");
  mainContentHeader.textContent = "Menu";
  mainContentHeader.classList.add("main-content-header");

  const mainMenuContent = document.createElement("div");
  mainMenuContent.classList.add("main-content");
  const pizza1 = createPizzaMenu(
    "Margherita",
    ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
  Tomato Sauce, Romano & Mozzarella`,
    15,
    "pizza_magherita.jpg",
    "Pizza Margherita"
  );

  const pizza2 = createPizzaMenu(
    "Classic Cheese",
    `Garlic Base, Romano Cheese, Sliced Provolone, Shredded
  Mozarella & Ricotta Cheese`,
    19.99,
    "classic-cheese-pizza.jpg",
    "Classic Cheese"
  );
  const pizza3 = createPizzaMenu(
    "BBQ Chicken",
    `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
  BBQ Sauce & Shredded Mozzarella Cheese`,
    19.99,
    "BBQ-chicken-pizza-recipe-9.jpg",
    "BBQ Chicken Pizza"
  );
  mainMenuContent.appendChild(mainContentHeader);
  mainMenuContent.appendChild(pizza1);
  mainMenuContent.appendChild(pizza2);
  mainMenuContent.appendChild(pizza3);
  return mainMenuContent;
}

// function createPizzaMenu(name, ingredients, price, imgSrc, imgAlt) {
//   const pizzaIngredients = document.createElement("div");
//   pizzaIngredients.textContent = ingredients;
//   pizzaIngredients.classList.add("ingredient");

//   const pizzaPrice = document.createElement("div");
//   pizzaPrice.textContent = `$${price}`;

//   const menuInfo = document.createElement("div");
//   menuInfo.classList.add("menu-info");
//   menuInfo.appendChild(pizzaIngredients);
//   menuInfo.appendChild(pizzaPrice);

//   const pizzaImage = document.createElement("img");
//   pizzaImage.setAttribute("src", `./images/${imgSrc}`);
//   pizzaImage.setAttribute("src", imgAlt);
//   pizzaImage.classList.add("menu-image");

//   const menuContainer = document.createElement("div");
//   menuContainer.appendChild(pizzaImage, menuInfo);

//   const menuHeaderText = document.createElement("div");
//   menuHeaderText.textContent = name;
//   menuHeaderText.classList.add("menu-header-text");

//   const mainContentSubContainer = document.createElement("div");
//   mainContentSubContainer.classList.add("main-content-sub-container");
//   mainContentSubContainer.appendChild(menuHeaderText, menuContainer);

//   return mainContentSubContainer;
// }

function createPizzaMenu(name, ingredients, price, imgSrc, imgAlt) {
  const pizzaIngredients = document.createElement("div");
  pizzaIngredients.textContent = ingredients;
  pizzaIngredients.classList.add("ingredient");

  const pizzaPrice = document.createElement("div");
  pizzaPrice.textContent = `$${price}`;

  const menuInfo = document.createElement("div");
  menuInfo.classList.add("menu-info");
  menuInfo.appendChild(pizzaIngredients);
  menuInfo.appendChild(pizzaPrice);

  const pizzaImage = document.createElement("img");
  pizzaImage.setAttribute("src", `./images/${imgSrc}`);
  pizzaImage.setAttribute("alt", imgAlt);
  pizzaImage.classList.add("menu-image");

  const menuContainer = document.createElement("div");
  menuContainer.appendChild(pizzaImage, menuInfo);
  menuContainer.appendChild(menuInfo);

  const menuHeaderText = document.createElement("div");
  menuHeaderText.textContent = name;
  menuHeaderText.classList.add("menu-header-text");

  const mainContentSubContainer = document.createElement("div");
  mainContentSubContainer.classList.add("main-content-sub-container");
  mainContentSubContainer.appendChild(menuHeaderText);
  mainContentSubContainer.appendChild(menuContainer);

  //   const mainContentHeader = document.createElement("div");
  //   mainContentHeader.textContent = "Menu";
  //   mainContentHeader.classList.add("main-content-header");

  //   const mainMenuContent = document.createElement("div");
  //   mainMenuContent.classList.add("main-content");
  //   mainMenuContent, appendChild(mainContentHeader, mainContentSubContainer);

  return mainContentSubContainer;
}

export { createMenuContent, createPizzaMenu };
