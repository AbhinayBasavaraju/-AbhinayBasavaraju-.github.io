document.addEventListener("DOMContentLoaded", function() {
    // Task Management
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const deadlineInput = document.getElementById("deadlineInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        const deadline = deadlineInput.value;
        if (taskText === "") return;
        addTask(taskText, deadline);
        taskInput.value = "";
        deadlineInput.value = "";
    });

    function addTask(taskText, deadline) {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
        taskItem.innerHTML = `
            <span>${taskText} - Deadline: ${deadline}</span>
            <button>Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskItem.querySelector("button").addEventListener("click", function() {
            taskItem.remove();
        });
    }

    // Fitness Management
    // Add JavaScript code for fitness management here

    // Screen Time Tracking
    let screenTimeStart = null;
    let screenTimeTotal = 0;
    const screenTimeDisplay = document.getElementById("screenTimeDisplay");

    function startScreenTimeTracking() {
        screenTimeStart = Date.now();
        setInterval(updateScreenTime, 1000); // Update every second
    }

    function updateScreenTime() {
        const elapsedTime = Math.floor((Date.now() - screenTimeStart) / 1000); // Convert milliseconds to seconds
        screenTimeTotal += elapsedTime;
        screenTimeDisplay.textContent = formatTime(screenTimeTotal);
    }

    function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return ${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds;
    }

    startScreenTimeTracking();
});
