let addbtn= document.getElementById('add');
let removebtn=document.getElementById('remove')
let tasklist=document.getElementById("taskList")

window.onload=()=>{
    displayTasks();
}

addbtn.addEventListener('click',function(){
    let task=document.getElementById("task").value.trim();
    if(task==="")
    {
        alert("Please Enter the task");
        return;

    }
    
        let tasks=JSON.parse(localStorage.getItem('tasks'))||[];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        document.getElementById('task').value="";//clear input 
        displayTasks();
    
})

removebtn.addEventListener('click',()=>{
    localStorage.removeItem('tasks')
    displayTasks();}
)

function displayTasks()
{
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    taskList.innerHTML=""

    if(tasks.length===0)
    {
        taskList.innerHTML="<p> No pending tasks currently</p>"
        return;
    }
    tasks.forEach((task,index) => {
        const li=document.createElement("li")
        li.textContent=task;
        
        const deletebtn=document.createElement("button")
        deletebtn.textContent="delete"
        deletebtn.onclick=()=>{
            deleteTask(index);

        }
        li.appendChild(deletebtn);
        tasklist.appendChild(li);


    });
}

function deleteTask(index){
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    tasks.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasks))
    displayTasks();

}





