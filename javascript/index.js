const listName = document.querySelector("input");
const btnNewList = document.getElementById("btnNewlist");
const storedList = Object.keys(localStorage);
const displayListLocation = document.getElementById("overview-lists");
const myList = document.querySelector("#overview-lists");
const deleteAllBtn = document.querySelector("#delete-all-btn");

btnNewList.addEventListener("click", () => {
  localStorage.setItem(listName.value, listName.value);
});

storedList.forEach((element) => {
  const listName = localStorage.getItem(element);

  // Variable to create the different element needed
  // a li element to display each list name
  // a div element for the delete button
  // an input element to create new item within the list
  // a button to add the new item to the list
  const listContainer = document.createElement("li");
  const listnameContainer = document.createElement("div");
  const checkboxContainer = document.createElement("div");
  const checkbox = document.createElement("input");
  const deleteItemButtonContainer = document.createElement("button");
  const optionContainer = document.createElement("div");
  const addInputContainer = document.createElement("input");
  const addItemButtonContainer = document.createElement("button");

  // Creation of class to better target element in CSS
  deleteItemButtonContainer.className = "close";
  listContainer.className = "list";
  optionContainer.className = "optionContainer";
  addInputContainer.className = "addItemInput";
  addItemButtonContainer.className = "addItem";
  checkbox.classList = "checkboxes";

  // Value of each element
  addInputContainer.placeholder = "What is your new task?";
  addItemButtonContainer.innerHTML = "Edit";
  listnameContainer.innerHTML = `${listName}`;
  deleteItemButtonContainer.innerHTML = "DELETE TASK";
  checkbox.type = "checkbox";

  // Location of where each element should be added
  // From parent to child there is:
  // overview-list: contains all li element (all lists)
  // li element - one per list: which contains 2 div
  // 1- listnameContainer: contains only the name of the list
  // 2- optionContainer: in which you can find the 3 options (input to create a new item + add button + delete list button)
  displayListLocation.appendChild(listContainer);

  listContainer.appendChild(checkboxContainer);
  checkboxContainer.appendChild(checkbox);

  listContainer.appendChild(listnameContainer);

  listContainer.appendChild(optionContainer);
  optionContainer.appendChild(addInputContainer);
  optionContainer.appendChild(addItemButtonContainer);
  optionContainer.appendChild(deleteItemButtonContainer);

  // Function has been added to the list name container so the list can be crossed once the list is done
  listnameContainer.addEventListener("click", crossOut);
  checkbox.addEventListener("click", () => {
    if (checkbox.checked === true) {
      listnameContainer.style.textDecoration = "line-through";
    } else {
      listnameContainer.style.textDecoration = "none";
    }
  });

  // hide a list item
  function hide(event) {
    // bubbling up to the next li element
    const liElement = event.target.closest("li");
    liElement.style.display = "none";
    localStorage.removeItem(listName);
  }

  textDecoration = "line-through";
  // Attach the listener to the delete button
  deleteItemButtonContainer.addEventListener("click", hide, false);

  //edit button code
  addItemButtonContainer.addEventListener("click", () => {
    listnameContainer.innerHTML = "";
    listnameContainer.innerHTML = addInputContainer.value;
    addInputContainer.value = "";
  });
});

function crossOut(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}

deleteAllBtn.addEventListener("click", () => {
  // const listItems = document.querySelectorAll("li");
  localStorage.clear();
  // listItems.forEach((item) => item.remove());
});
