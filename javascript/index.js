const listName = document.querySelector("input");
const btnNewList = document.getElementById("btnNewlist");
const storedList = Object.keys(localStorage);
const displayListLocation = document.getElementById("overview-lists");
const myList = document.querySelector("#overview-lists");

btnNewList.addEventListener("click", () =>
  localStorage.setItem(listName.value, listName.value)
);

storedList.forEach((element) => {
  const listName = localStorage.getItem(element);
  const listContainer = document.createElement("li");
<<<<<<< HEAD
  const deleteItemButton = document.createElement("div");
  /* const listItem = listContainer.setAttribute("id", listName); //added by Oke, attempt to target via id */
  listContainer.innerHTML = `${listName}`;
  deleteItemButton.className="close";
  deleteItemButton.innerHTML = 'X';
=======
<<<<<<< HEAD
  listContainer.innerHTML = ${listName};
=======
  /* const listItem = listContainer.setAttribute("id", listName); //added by Oke, attempt to target via id */
  listContainer.innerHTML = `${listName}`;
>>>>>>> 63fb6fd87c30531b96e96b93656bd256035c8e62
>>>>>>> DEV
  displayListLocation.appendChild(listContainer);
  listContainer.appendChild(deleteItemButton);
});

function crossOut(event) {
  if (event.target.style.textDecoration === "line-through") {
    event.target.style.textDecoration = "none";
  } else {
    event.target.style.textDecoration = "line-through";
  }
}

myList.addEventListener("click", crossOut);
/* myList.removeEventListener("click", crossOut); */

/* function  */
