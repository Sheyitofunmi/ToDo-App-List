// getting all our element
const inputField = document.querySelector(".input-field textarea");
const todoLists = document.querySelector(".todoLists");
const pendingNum = document.querySelector(".pending-num");
const clearButton = document.querySelector(".clear-button");


// a function to add, delete  check and uncheck the task

function allTasks() {
    let tasks = document.querySelectorAll(".pending");
    pendingNum.textContent = tasks.length === 0 ? "no": tasks.length;
    let allLists = document.querySelectorAll(".list")
    if (allLists.length > 0){
        todoLists.style.marginTop = "15px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";

}
// add task when value been added to the textarea and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    // if input field length is greater than 0
    if (e.key === "Enter" && inputVal.length > 0){
        let liTag = `<li class="list pending" onclick="handleStatus(this)">
        <input type="checkbox" />
        <span class ="task">${inputVal}</span>
        <i class="fa-solid fa-trash-can" onclick="deleteTask(this)"></i>
        </li>`;
        todoLists.insertAdjacentHTML("beforeend", liTag);
        // removing value from input field
        inputField.value ="";  
        allTasks();

    }
});

// checking and unchecking the checkbox when clicked
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false:true;
    e.classList.toggle("pending");
    allTasks();
}


// deleting task while we click on delete icon
function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}

// deleting all task while we click on clear button
clearButton.addEventListener("click", () => {
    todoLists.innerHTML ="";
    allTasks();
})