// Here We Go Now  

// Define all ui vars  

const form   = document.querySelector("form"); // the form 
const input   = document.querySelector("#task");// input form user 
const taskList = document.querySelector(".list-item"); // ul 
const clearTask = document.querySelector("#clear-task"); // clear task btn 
const filterTask = document.querySelector("#filter") ;

loadEventListeners();


function loadEventListeners(){

    // Add task event  
  form.addEventListener("submit",addTask);
  taskList.addEventListener("click",deleteTask);
  clearTask.addEventListener("click",clearTasks);
  filterTask.addEventListener("keyup",filterTasks)
}

// Add Task  
function addTask (e){
 if (input.value=== ''){
   alert("Empty item");
  //  li.textContent= "No task entered   "

 }
//  create li element  

const li = document.createElement("li");

// Add a class  
li.classList.add("delete-items");
// Append and Add text node  
li.appendChild(document.createTextNode(input.value));

// create new link element  
const link = document.createElement("a");
//   add class  
link.classList.add("item");
// add icon on link 
link.innerHTML = '<i class = "fa fa-remove"> </i>  ';
// append link to the li 
li.appendChild(link);

// apend li to the ul  
 taskList.appendChild(li);
   input.value= '';
 e.preventDefault(); // prevent from submitting form 
} // append child notes lekhnu xa vareyyyy  


// Delete Tasks  

function deleteTask (e)
{
  //  console.log(e.target)
 if(e.target.classList.contains("fa")){

  if(confirm('Are you sure ? ')){
     e.target.parentElement.parentElement.remove();
     }
  } 

}


// Clear all tasks 
function clearTasks(e)
 {
  // first method  
  taskList.innerHTML= '';

  // faster method 
  while(taskList.firstchild){
    taskList.childElement.remove();

  }

 }

//  filter Tasks  

function filterTasks (e)
{
  const text = e.target.value.toLowerCase();
  
 document.querySelectorAll(".delete-items").forEach( function(task) {
  const item = task.firstChild.textContent;
//  console.log(item)
  if(item.toLowerCase().indexOf(text) > -1 ){
   task.style.display = '';
  }
  else{
    task.style.display ='none' ; 
  }
  
 }); 
}

// querySelectorAll returns node list not html collection list so we can directly use for loop without converting to array  
// matter of minutes  
