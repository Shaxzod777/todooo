export function SkeletonItem() {
  const el = document.createElement("div");
  el.className = "todo skeleton";

  el.innerHTML = `
    <div class="todo-flex">
      <div class="skeleton-title"></div>
      <div class="skeleton-btn"></div>
    </div>
    <div class="skeleton-time"></div>
  `;
  return el;
}

export function SkeletonList(container, count = 3) {
  container.innerHTML = "";
  const skeletons = Array.from({ length: count }, SkeletonItem);
  container.append(...skeletons);
}