import Pizza_magherita from "./images/pizza_magherita.jpg";
import Pizza_cheese from "./images/classic-cheese-pizza.jpg";
import Pizza_bbq_chicken from "./images/BBQ-chicken-pizza-recipe-9.jpg";

function createMenuContent() {
  const pizzaIngredients1 = document.createElement("div");
  pizzaIngredients1.textContent = ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
  Tomato Sauce, Romano & Mozzarella`;
  pizzaIngredients1.classList.add("ingredient");

  const pizzaPrice1 = document.createElement("div");
  pizzaPrice1.textContent = `$15`;

  const menuInfo1 = document.createElement("div");
  menuInfo1.classList.add("menu-info");
  menuInfo1.appendChild(pizzaIngredients1);
  menuInfo1.appendChild(pizzaPrice1);

  const pizza_magherita = new Image();
  pizza_magherita.src = Pizza_magherita;
  pizza_magherita.setAttribute("alt", "Margherita Pizza");
  pizza_magherita.classList.add("menu-image");

  const menuContainer1 = document.createElement("div");
  menuContainer1.classList.add("menu-container");
  menuContainer1.appendChild(pizza_magherita);
  menuContainer1.appendChild(menuInfo1);

  const menuHeaderText1 = document.createElement("div");
  menuHeaderText1.textContent = "Margherita";
  menuHeaderText1.classList.add("menu-header-text");

  const mainContentSubContainer1 = document.createElement("div");
  mainContentSubContainer1.classList.add("main-content-sub-container");
  mainContentSubContainer1.appendChild(menuHeaderText1);
  mainContentSubContainer1.appendChild(menuContainer1);

  const pizzaIngredients2 = document.createElement("div");
  pizzaIngredients2.textContent = `  Garlic Base, Romano Cheese, Sliced Provolone, Shredded
  Mozarella & Ricotta Cheese`;
  pizzaIngredients2.classList.add("ingredient");

  const pizzaPrice2 = document.createElement("div");
  pizzaPrice2.textContent = `$20`;

  const menuInfo2 = document.createElement("div");
  menuInfo2.classList.add("menu-info");
  menuInfo2.appendChild(pizzaIngredients2);
  menuInfo2.appendChild(pizzaPrice2);

  const pizza_cheese = new Image();
  pizza_cheese.src = Pizza_cheese;
  pizza_cheese.setAttribute("alt", "Classic cheese pizza");
  pizza_cheese.classList.add("menu-image");

  const menuContainer2 = document.createElement("div");
  menuContainer2.classList.add("menu-container");
  menuContainer2.appendChild(pizza_cheese);
  menuContainer2.appendChild(menuInfo2);

  const menuHeaderText2 = document.createElement("div");
  menuHeaderText2.textContent = "Classic Cheese Pizza";
  menuHeaderText2.classList.add("menu-header-text");

  const mainContentSubContainer2 = document.createElement("div");
  mainContentSubContainer2.classList.add("main-content-sub-container");
  mainContentSubContainer2.appendChild(menuHeaderText2);
  mainContentSubContainer2.appendChild(menuContainer2);

  const pizzaIngredients3 = document.createElement("div");
  pizzaIngredients3.textContent = `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
  BBQ Sauce & Shredded Mozzarella Cheese`;
  pizzaIngredients3.classList.add("ingredient");

  const pizzaPrice3 = document.createElement("div");
  pizzaPrice3.textContent = `$19.99`;

  const menuInfo3 = document.createElement("div");
  menuInfo3.classList.add("menu-info");
  menuInfo3.appendChild(pizzaIngredients3);
  menuInfo3.appendChild(pizzaPrice3);

  const pizza_bbq_chicken = new Image();
  pizza_bbq_chicken.src = Pizza_bbq_chicken;
  pizza_bbq_chicken.setAttribute("alt", "BBQ Chicken Pizza");
  pizza_bbq_chicken.classList.add("menu-image");

  const menuContainer3 = document.createElement("div");
  menuContainer3.classList.add("menu-container");
  menuContainer3.appendChild(pizza_bbq_chicken);
  menuContainer3.appendChild(menuInfo3);

  const menuHeaderText3 = document.createElement("div");
  menuHeaderText3.textContent = "BBQ Chicken Pizza";
  menuHeaderText3.classList.add("menu-header-text");

  const mainContentSubContainer3 = document.createElement("div");
  mainContentSubContainer3.classList.add("main-content-sub-container");
  mainContentSubContainer3.appendChild(menuHeaderText3);
  mainContentSubContainer3.appendChild(menuContainer3);

  const mainContentHeader = document.createElement("div");
  mainContentHeader.textContent = "Menu";
  mainContentHeader.classList.add("main-content-header");

  const mainMenuContent = document.createElement("div");
  mainMenuContent.classList.add("main-content");

  mainMenuContent.appendChild(mainContentHeader);
  mainMenuContent.appendChild(mainContentSubContainer1);
  mainMenuContent.appendChild(mainContentSubContainer2);
  mainMenuContent.appendChild(mainContentSubContainer3);

  return mainMenuContent;
}

export { createMenuContent };

//  try to generate pizza by createPizzaMenu
// function createMenuContent() {
//   const pizza1 = createPizzaMenu(
//     "Margherita",
//     ` Fresh Garlic, Extra Virgin Olive Oil, Basil, Fresh Roma,
//   Tomato Sauce, Romano & Mozzarella`,
//     15,
//     Pizza_magherita,
//     "Pizza Margherita"
//   );

//   const pizza2 = createPizzaMenu(
//     "Classic Cheese",
//     `Garlic Base, Romano Cheese, Sliced Provolone, Shredded
//   Mozarella & Ricotta Cheese`,
//     19.99,
//     Pizza_cheese,
//     "Classic Cheese"
//   );
//   const pizza3 = createPizzaMenu(
//     "BBQ Chicken",
//     `Cannonball BBQ Sauce Base, Grill Chicken Mixed in Cannonball
//   BBQ Sauce & Shredded Mozzarella Cheese`,
//     19.99,
//     Pizza_bbq_chicken,
//     "BBQ Chicken Pizza"
//   );
//   const mainContentHeader = document.createElement("div");
//   mainContentHeader.textContent = "Menu";
//   mainContentHeader.classList.add("main-content-header");

//   const mainMenuContent = document.createElement("div");
//   mainMenuContent.classList.add("main-content");

//   mainMenuContent.appendChild(mainContentHeader);
//   mainMenuContent.appendChild(pizza1);
//   mainMenuContent.appendChild(pizza2);
//   mainMenuContent.appendChild(pizza3);
//   return mainMenuContent;
// }

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

//   const pizzaImage = new Image();
//   pizzaImage.src = imgSrc;
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
