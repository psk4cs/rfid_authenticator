let draggedElement;

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    draggedElement = event.target.cloneNode(true);
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const clone = draggedElement.cloneNode(true);
    clone.id = "card-" + new Date().getTime();
    clone.setAttribute("draggable", false);
    clone.classList.add("card");
    clone.addEventListener("click", editCardText);
    event.target.appendChild(clone);
}

function editCardText(event) {
    const newText = prompt("Enter new text:");
    if (newText !== null) {
        event.target.innerHTML = newText;
    }
}
