function addTask() {
  const a = document.getElementById("task");
  const item = document.createElement("li");

  item.innerHTML = a.value;
  document.getElementById("toDo").appendChild(item);
  a.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.className = "delete";
  item.appendChild(deleteButton);
  deleteButton.addEventListener("click", () => {
    item.remove();
  });
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  item.prepend(checkbox);
}
