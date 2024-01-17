function createHomeContent() {
  const mainContentHeader = document.createElement("div");

  mainContentHeader.classList.add("main-content-header");
  mainContentHeader.textContent = '"Slice Haven"';

  const mainContentSubContainer1 = document.createElement("div");

  mainContentSubContainer1.classList.add("main-content-sub-container");
  mainContentSubContainer1.textContent = ` Welcome to Slice Haven, where each pizza is a masterpiece! From
  classic Margheritas to BBQ Chicken delights, we've got a slice for
  every taste.
  Our chefs craft perfection with fresh ingredients, creating a
  symphony of flavor. Whether sharing a meal or grabbing a quick bite,
  savor the joy of great pizza at Slice Haven.Join us for
  the art of good food, good company, and good times. Indulge in the
  passion, relish the flavor—welcome to Slice Haven!`;

  const contentHeaderText = document.createElement("div");
  contentHeaderText.textContent = "Hours";
  contentHeaderText.classList.add("content-header-text");

  const weekday = document.createElement("div");
  weekday.textContent = ` Monday - Friday:
  11:00 AM - 9:00 PM`;

  const weekend = document.createElement("div");
  weekend.textContent = `  Saturday - Sunday:
  12:00 PM - 10:00 PM`;

  const mainContentSubContainer2 = document.createElement("div");
  mainContentSubContainer2.classList.add("main-content-sub-container");
  mainContentSubContainer2.appendChild(contentHeaderText);
  mainContentSubContainer2.appendChild(weekday);
  mainContentSubContainer2.appendChild(weekend);

  const contentHeaderText2 = document.createElement("div");
  contentHeaderText2.textContent = "Location";
  contentHeaderText2.classList.add("content-header-text");

  const location = document.createElement("div");
  location.textContent = "123 Pizza, Heaven 123456";

  const mainContentSubContainer3 = document.createElement("div");
  mainContentSubContainer3.classList.add("main-content-sub-container");

  mainContentSubContainer3.appendChild(contentHeaderText2);
  mainContentSubContainer3.appendChild(location);

  const mainHomeContent = document.createElement("div");
  mainHomeContent.classList.add("main-content");
  mainHomeContent.appendChild(mainContentHeader);
  mainHomeContent.appendChild(mainContentSubContainer1);
  mainHomeContent.appendChild(mainContentSubContainer2);
  mainHomeContent.appendChild(mainContentSubContainer3);
  return mainHomeContent;
}

export { createHomeContent };
