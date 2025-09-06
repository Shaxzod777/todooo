import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // адрес
    headers: { "Content-Type": "application/json" }
})

// Получить все задачи
export async function getTodos() {
    const res = await api.get("/todos");
    return res.data;
}

// Добавить задачу
export async function addTodo(todo) {
    await api.post("/todos", todo)
}

// Удалить задачу
export async function deleteTodo(id) {
    await api.delete(`/todos/${id}`)
}

// Обновить задачу
export async function updateTodo(id, data) {
    await api.patch(`/todos/${id}`, data)
}
