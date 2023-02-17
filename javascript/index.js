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
