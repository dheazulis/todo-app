function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById("totalTasks").textContent = total;
    document.getElementById("completedTasks").textContent = completed;
    document.getElementById("pendingTasks").textContent = pending;
    document.getElementById("progress").textContent = progress + "%";
}

function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `<tr><td colspan="4" class="empty">No tasks found</td></tr>`;
    } else {
        tasks.forEach((task, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${task.text}</td>
                <td>${task.date || "-"}</td>
                <td>${task.completed ? "✅ Done" : "⏳ Pending"}</td>
                <td>
                    <button onclick="toggleTask(${index})">✔</button>
                    <button onclick="deleteTask(${index})">❌</button>
                </td>
            `;
        taskList.appendChild(row);
        });
    }
    updateStats();
}
