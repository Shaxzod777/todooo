export function TodoItem(item, { onDelete, onEdit }) {
    const todoEl = document.createElement("div");
    todoEl.className = "todo";

    todoEl.innerHTML = `
        <div class="todo-flex">
            <h3 class="todo_title">${item.title}</h3>
            <button class="close_btn"><img src="/img/close.svg" alt="Delete"></button>
        </div>
        <div class="todo_time">${item.time}</div>
    `;

    // Привязываем действия
    todoEl.querySelector(".close_btn").addEventListener("click", () => onDelete(item.id));
    todoEl.addEventListener("dblclick", () => onEdit(item.id, item.title));

    return todoEl;
}