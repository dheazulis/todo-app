const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskList = document.getElementById("taskList");
const filterInput = document.getElementById("filterInput");

// Event tambah tugas
taskForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;

if (taskText === "" || taskDateValue === "") {
    alert("Isi tanggal dan tugas!");
    return;
}

const li = document.createElement("li");
li.innerHTML = `
    <span>${taskDateValue} - ${taskText}</span>
    <button class="delete-btn">Hapus</button>`;

  // Event hapus
li.querySelector(".delete-btn").addEventListener("click", function() {
    li.remove();
});

taskList.appendChild(li);

  // Reset form
taskInput.value = "";
taskDate.value = "";
});

// Event filter tugas
filterInput.addEventListener("keyup", function() {
    const filterValue = filterInput.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li");

    Array.from(tasks).forEach(function(task) {
        const text = task.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
});
