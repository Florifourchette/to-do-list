const listName = document.querySelector('input');
const btnNewList = document.querySelector('#btnNewlist');
const storedList = Object.keys(localStorage);
const displayListLocation = document.getElementById('overview-lists');

btnNewList.addEventListener('click', () => {
    localStorage.setItem("list name", listName.value);
})

storedList.forEach((element) => {
    const listName = localStorage.getItem('list name');
const listContainer = document.createElement("div");
listContainer.innerHTML = `List name = ${listName}`;
displayListLocation.appendChild(listContainer);
})