export function TodoForm(formElement, { onAdd }) {
    const input = formElement.querySelector("input");

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = input.value.trim();

        if (title) {
            onAdd(title);
            input.value = "";
            input.focus();
        } else {
            alert("Поле не должно быть пустым!");
        }
    });
}