/** @format */

document.getElementById("addTask").addEventListener("click", function () {
  const taskInput = document.getElementById("task");
  const reminderInput = document.getElementById("reminder");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "" || reminderInput.value.trim() === "") {
    alert("Please fill in both task and reminder fields.");
    return;
  }

  const task = taskInput.value;
  const reminder = new Date(reminderInput.value);

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <span>${reminder.toLocaleString()}</span>
    <button class="deleteTask">Delete</button>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
  reminderInput.value = "";

  const deleteButton = li.querySelector(".deleteTask");
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // Set a reminder alarm
  const now = new Date();
  const timeUntilReminder = reminder - now;
  if (timeUntilReminder > 0) {
    setTimeout(function () {
      alert(`Reminder: ${task}`);
    }, timeUntilReminder);
  }
});
