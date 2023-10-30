let ul_list = document.getElementById("task-list")
// retrieve from local storage
let task_list = localStorage.getItem("tasks") || "";
ul_list.innerHTML = task_list;

// creates a new list and adds it to local storage
function add_task() {
    let new_task = document.getElementById("input-task");
    if (new_task.value) {
        let new_list = document.createElement("li");
        let input = document.createElement("input");
            input.type = "checkbox";
            input.onchange = change_appearance_task;
        let span = document.createElement("span");
            span.className = "task";
            span.textContent = new_task.value;
        let button = document.createElement("button");
            button.type = "submit";
            button.className = "delete-btn";
            button.textContent = "x";
            button.addEventListener("click", delete_task);
        new_list.appendChild(input);
        new_list.appendChild(span);
        new_list.appendChild(button);
        ul_list.appendChild(new_list);
        localStorage.setItem("tasks", ul_list.innerHTML);
        new_task.value = "";
    }
}

// delete task from ul and update local storage
function delete_task(event) {
    let remove_list = event.target.parentNode
        ul_list.removeChild(remove_list)
        localStorage.setItem("tasks", ul_list.innerHTML)
}

// change appearance of task once checked
function change_appearance_task(event) {
    let span_element = event.target.nextElementSibling;
    if (event.target.checked) {
        span_element.style.textDecoration = "line-through";
    } else {
        span_element.style.textDecoration = "";
    }
}

let check_boxes = document.querySelectorAll('input[type="checkbox"]')
let delete_elements = document.querySelectorAll(".delete-btn")
let task_add = document.getElementById("add-task-button")
task_add.addEventListener("click", add_task)

for (element of delete_elements) {
    element.addEventListener("click", delete_task)
}

for (element of check_boxes ) {
    element.onchange = change_appearance_task;
}
