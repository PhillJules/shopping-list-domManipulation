const list = document.querySelector("ul");

const input = document.querySelector("input");

const btn = document.querySelector("button");

function addToList() {

  const newItem = input.value;
    input.value = "";
    input.focus();
  const listItem = document.createElement("li");
  let itemName = document.createElement("span");
  itemName.textContent = newItem;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  listItem.appendChild(itemName);
  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);

  deleteBtn.addEventListener("click", function() {

    list.removeChild(listItem);
  });

}

btn.addEventListener("click", addToList)

input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    addToList();
  }
});
