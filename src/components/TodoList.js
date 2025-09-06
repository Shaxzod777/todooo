import { TodoItem } from "./TodoItem.js";

export function TodoList(container, todos, eventHandlers) {
    // Очищаем контейнер перед рендерингом
    container.innerHTML = "";

    // Создаем и добавляем каждый элемент
    todos.forEach(todo => {
        const todoElement = TodoItem(todo, eventHandlers);
        container.append(todoElement);
    });
}