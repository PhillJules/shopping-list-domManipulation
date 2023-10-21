const list = document.querySelector("ul");

const input = document.querySelector("input");

const btn = document.querySelector("button");

function addToList() {

  const newItem = input.value;
    input.value = "";
  const listItem = document.createElement("li");
  let itemNAme = document.createElement("span");
  itemNAme.textContent = newItem;
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  listItem.appendChild(itemNAme);
  listItem.appendChild(deleteBtn);

  list.appendChild(listItem);

}

btn.addEventListener("click", addToList)

function deleteItem() {
 list.removeChild(listItem);

}
