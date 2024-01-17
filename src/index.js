function sayHi() {
  console.log("Hello World!");
}

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = `hello webpack`;
  //   element.setAttribute("id", "content");
  element.id = "content";

  return element;
}

document.body.appendChild(component());
sayHi();
