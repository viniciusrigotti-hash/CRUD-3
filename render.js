export function createItem (id, text) {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = id;
    li.innerHTML = `
        <div class="itemText"></div>
            <div class="itemButtons">
            <button class="edit">EDITAR</button>
            <button class="delete">DELETAR</button>
        </div>`;
        li.querySelector(".itemText").textContent = text;      
        return li;
};