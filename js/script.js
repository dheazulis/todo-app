// Ambil elemen DOM
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const dueDate = document.getElementById("dueDate");
const taskList = document.getElementById("taskList");
const deleteAllBtn = document.querySelector(".delete-all");

// Array untuk menyimpan tasks
let tasks = [];

// Fungsi render task ke tabel
function renderTasks() {
    taskList.innerHTML = "";

    if (tasks.length === 0) {
        taskList.innerHTML = `<tr><td colspan="4" class="empty">No task found</td></tr>`;
        return;
    }

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

// Tambah task baru
taskForm.addEventListener("submit", (e) => {
    e .preventDefault();

    const newTask = {
        text: taskInput.value,
        date: dueDate.value,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = "";
    dueDate.value = "";

    renderTasks();
});

// Toggle selesai/belum
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Hapus task tertentu
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Hapus semua task
deleteAllBtn.addEventListener("click", () => {
    tasks = [];
    renderTasks();
});

// Pertama kali render
renderTasks();
