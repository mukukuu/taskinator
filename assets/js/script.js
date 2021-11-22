var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//form holder ()
var taskFormHandler = function(event) {

    event.preventDefault();

    var taskNameInput = document.querySelector("input[name= 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name= 'task-type']").value;

    //check if input values are empty strings
    if (!taskNameInput || !taskTypeInput) {
        

        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
 //package up data as an object
 var taskDataObj ={
     name: taskNameInput,
     type: taskTypeInput
 };
//send it as an argument to creatTaskEl
createTaskEl(taskDataObj);
    
};

//---- function to create task element
var createTaskEl = function(taskDataObj) {
//creat html  list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

//create div to hold task info and and ann to list item
var taskInfoEl =document.createElement("div");
//give it a class name
taskInfoEl.className = "task-info";

//add html cotent to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);

//add entire list item to list
 tasksToDoEl.appendChild(listItemEl);
};


formEl.addEventListener("submit", taskFormHandler);