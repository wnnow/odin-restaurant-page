function createContactComponent() {
  const email = document.createElement("div");
  email.textContent = "Email: sales@slicehaven.com";
  email.classList.add("contact-text");

  const fax = document.createElement("div");
  fax.textContent = "Fax: (+123)123-456-987";
  fax.classList.add("contact-text");

  const phone = document.createElement("div");
  phone.textContent = "Phone: (+123)123-456-789";
  phone.classList.add("contact-text");

  const mainContact2 = document.createElement("div");
  mainContact2.classList.add("main-content-sub-container");
  mainContact2.appendChild(phone);
  mainContact2.appendChild(fax);
  mainContact2.appendChild(email);

  const addressLine3 = document.createElement("div");
  addressLine3.textContent = "Wakanda,4EV 987654321";
  const addressLine2 = document.createElement("div");
  addressLine2.textContent = "10001 123 Piz Za";
  const addressLine1 = document.createElement("div");
  addressLine1.textContent = "Slice Haven, Inc.";

  const mainContact1 = document.createElement("div");
  mainContact1.classList.add("main-content-sub-container");
  mainContact1.appendChild(addressLine1);
  mainContact1.appendChild(addressLine2);
  mainContact1.appendChild(addressLine3);

  const mainContentHeader = document.createElement("div");
  mainContentHeader.classList.add("main-content-header");
  mainContentHeader.textContent = "Contact Us";

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  mainContent.appendChild(mainContentHeader);
  mainContent.appendChild(mainContact1);
  mainContent.appendChild(mainContact2);

  return mainContent;
}

export { createContactComponent };
