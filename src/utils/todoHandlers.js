import * as api from "../api.js";
import { TodoList } from "../components/TodoList.js";
import { SkeletonList } from "../components/Skeleton.js";


let todos = []; // локальное состояние

// --- CRUD ---
export async function add(title, listEl) {
  const todo = { 
    title, 
    time: new Date().toLocaleTimeString().slice(0, 5) 
  };
  await api.addTodo(todo);
  await load(listEl);
}

export async function del(id, listEl) {
  await api.deleteTodo(id);
  todos = todos.filter(t => t.id !== id);
  render(listEl);
}

export async function edit(id, oldTitle, listEl) {
  const title = prompt("Новое название:", oldTitle);
  if (!title || title.trim() === "" || title === oldTitle) return;
  await api.updateTodo(id, { title: title.trim() });
  await load(listEl);
}

// --- Отрисовка ---
export function render(listEl) {
  TodoList(listEl, todos, { 
    onDelete: (id) => del(id, listEl),
    onEdit: (id, oldTitle) => edit(id, oldTitle, listEl),
  });
}

export async function load(listEl) {
  try {
    // показываем скелетон пока ждём
    SkeletonList(listEl, 3);
    

    todos = await api.getTodos();
    render(listEl);
  } catch (e) {
    console.error(e);
    alert("Ошибка загрузки. Проверь json-server!");
  }
}