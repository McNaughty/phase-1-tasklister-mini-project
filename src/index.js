document.addEventListener("DOMContentLoaded", () => {
  // get the form with your preferred attribute, which can be an id, and store it in a variable:
  //his event listener allows you to attach a callback function which gets triggered once the form is submitted:
  let taskForm = document.getElementById("create-task-form");
  const error = document.getElementById("error");
  const countValue = document.querySelector(".count-value");

  let taskCount = 0;

  const displayCount = (taskCount) =>{
    countValue.innerText = taskCount;
  }

  //attach the addEventListener to the form variable and listen for a submit event.
  taskForm.addEventListener("submit",(e) => {
    e.preventDefault();

    let listInput = document.getElementById("new-task-description").value;

    //validate the data by checking if the input is empty before performing any operation:
    if (listInput === ""){
      window.alert("Please input a task!");
    }else{
      window.alert("Good attempt.");
      const ul = document.getElementById("tasks");
      // Adds a new list element to the unordered list
      const li = document.createElement("li");
      // li.innerHTML = listInput;
      // listInput.value ='';
      // taskItem = ul.appendChild(li);

      // Incorporates a html code and creates a full list element of the task, checkbox and delete/edit icons
      taskList = `<div class="tasks">
                  <input type = "checkbox" class="task-check">
                  <span class="tasks">${listInput}</span>
                  <button class="edit">
                        <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                      
                  <button class="delete">
                        <i class="fa-solid fa-trash"></i>
                  </button>`;
      //Specifies the part where the task to be placed
      li.insertAdjacentHTML("beforeend",taskList);
      // Appends the list to the unordered section
      li.innerHTML = taskList;
      listInput.value ='';
      ul.appendChild(li);

      const deleteButtons = document.querySelectorAll(".delete");
      deleteButtons.forEach((deleteBtn) => {
          deleteBtn.onclick = () => {
          deleteBtn.parentNode.remove();
          taskCount -= 1;
          displayCount(taskCount);
        };

      const editButtons = document.querySelectorAll(".edit");
        editButtons.forEach((editBtn) => {
          editBtn.onclick = (e) => {
            let targetElement = e.target;
            if(!(e.target.className == "edit")){
              targetElement = e.target.parentElement;
            }
            listInput.value = targetElement.previousElementSIbling?.innerText;
            targetElement.parentNode.remove();
            taskCount -= 1;
            displayCount(taskCount);
        };

      });

      //Select all task check boxes
      const tasksCheck = document.querySelectorAll(".task-check");
      tasksCheck.forEach((checkBox) => {
        checkBox.onChange = () => {
        checkBox.nextElementSibling.classList.toggle("completed");

        if (checkBox.checked) {

          taskCount -= 1;

        }else{

          taskCount += 1;
          
        }
        displayCount(taskCount);
      };
    });

    taskCount += 1;
    displayCount(taskCount);
    listInput.value = " ";
           
      });
      window.onload = () => {
        taskCount = 0;
        displayCount(taskCount);
        listInput.value = " ";
      };
    };
      
  });
 
  
});


