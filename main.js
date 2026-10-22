import { addItem, listenItems, updateItem, removeItem } from "./crud.js";
import { createItem } from "./render.js";

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");


function handleAdd() {
    addItem(input.value);
    input.value = "";
};

submit.addEventListener("click", handleAdd());
submit.addEventListener("keyDown", (event) => {
    if (event.key === "Enter" ) handleAdd();
});

listenItems(items => {
    list.innerHTML = "";
    items.forEach(({id, text}) => {
        list.appendChild(createItem(id, text));
    });
});

list.addEventListener("click", (event) => {
    
    const li = event.target.closest(".item");
    if(!li) return;
    const id = li.dataset.id;

    if (event.target.closest(".delete")) {
        removeItem(id);
    };

    if (event.target.closest(".edit")) {
        const oldTxt = li.querySelector(".itemText").text;
        const newTxt = prompt("Editar item:", oldTxt);
        if (newTxt) updateItem(id, newTxt);
    };
});