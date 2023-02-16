const listName = document.querySelector("input");
const btnNewList = document.getElementById("btnNewlist");
const storedList = Object.keys(localStorage);
const displayListLocation = document.getElementById("overview-lists");

btnNewList.addEventListener("click", () =>
  localStorage.setItem(listName.value, listName.value)
);

storedList.forEach((element) => {
  const listName = localStorage.getItem(element);
  const listContainer = document.createElement("li");
  const listItem = listContainer.setAttribute('id', listName);
  listContainer.innerHTML = `List name = ${listName}`;
  displayListLocation.appendChild(listContainer);
});






/* const crossOut = () => {
  document
    .getElementById(className)
    .style.setProperty("text-decoration", "line-through");
};

const listElements = document.querySelectorAll(".crossOut");
listElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const id = event.target.id;
    crossOut(id);
  });
}); */



















/* const listName = document.querySelector("input");
const btnNewList = document.getElementById("btnNewlist");
const storedList = Object.keys(localStorage);
const displayListLocation = document.getElementById("overview-lists");

//to target the individual list items
/* let listItems = document.querySelector(".itemDone"); */

/* btnNewList.addEventListener("click", () =>
  localStorage.setItem(listName.value, listName.value)
);

const crossOut = (className) => {
  document
    .getElementsByClassName(className)
    .style.setProperty("text-decoration", "line-through");
};

const listElements = document.querySelectorAll(".crossOut");
listElements.forEach((element) => {
  element.addEventListener("click", (event) => {
    const id = event.target.id;
    crossOut(id);
  });
});

storedList.forEach((element) => {
  const nameList = localStorage.getItem(element);
  const listContainer = document.createElement("li");
  listContainer.innerHTML = `List name = ${nameList}`;
  displayListLocation.appendChild(listContainer);

  // add class to new elements
  document.querySelector(li).classList.add("checked"); //added by Oke
}); */

// cross out list item: target class

// uncross list item

/* if (crossOut) {
displayListLocation.removeEventListener('click', crossOut);
} */

/* storedList.forEach((key) => {
  const localValue = localStorage.getItem(key);
  const localValueContainer = document.createElement("div");
  localValueContainer.innerHTML = `List name = ${key}`;
  localValueContainer.className = "crossOut";
  localValueContainer.id = key;

  displayListLocation.appendChild(localValueContainer); */
/* document
    .getElementsByClassName(key)
    .addEventListener("click", (event) => crossOut(key)); 
// add class to new elements
//});
 */