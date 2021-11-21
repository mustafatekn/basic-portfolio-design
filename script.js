const errorName = document.getElementById("errorName");
const errorMessage = document.getElementById("errorMessage");
const _name = document.getElementById("inputName");
const _message = document.getElementById("inputMessage");
const messages = document.getElementById("messages");

eventListeners();
function eventListeners() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", sendMessage);
  messages.addEventListener("click", deleteMessage);
}

function sendMessage(event) {
  event.preventDefault();
  const name = _name.value;
  const message = _message.value;

  if (name.trim() === "") {
    errorName.textContent = "İsim boş bırakılamaz.";
  }else{
      errorName.textContent="";
  }

  if (message.trim() === "") {
    errorMessage.textContent = "Mesaj boş bırakılamaz.";
  }
  else{
    errorMessage.textContent="";
}
  createMessage(name, message);
}

function createMessage(name, message) {
  if (name && message) {
    const messages = document.getElementById("messages");

    const card = document.createElement("div");
    card.className = "card my-5 text-dark p-3 w-75 mx-auto";

    const cardHeader = document.createElement("div");
    cardHeader.className = "d-flex justify-content-between py-1 px-2";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body py-1 px-2";

    const cardTitle = document.createElement("h6");
    cardTitle.className = "card-title";
    cardTitle.textContent = name;

    const closeButton = document.createElement("a");
    closeButton.className = "btn bg-transparent p-0";
    const closeIcon = document.createElement("i");
    closeIcon.className = "fas fa-times";
    closeButton.appendChild(closeIcon);

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = message;

    messages.appendChild(card);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardHeader.appendChild(cardTitle);
    cardHeader.appendChild(closeButton);
    cardBody.appendChild(cardText);
    clearInputs();
  }
}

function clearInputs() {
  errorName.textContent = "";
  errorMessage.textContent = "";
  _name.value = null;
  _message.value = null;
}

function deleteMessage(event) {
  event.preventDefault();
  if (event.target.className === "fas fa-times") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
}
