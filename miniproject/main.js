//Add New Tasks in LocalStorage
showData();
let EnterInput = document.getElementById("task");
let addTaskBtn = document.getElementById("addtask");
 addTaskBtn.addEventListener("click",function()
{
   addTaskInputVal = EnterInput.value;
   if(addTaskInputVal.trim()!=0)
   {
       let webTask = localStorage.getItem("localTask");
       if(webTask == null)
       {
          taskObject = [];
       }
       else
       {
          taskObject = JSON.parse(webTask);
       }
       taskObject.push(addTaskInputVal);
       EnterInput.value = ' ';
       localStorage.setItem("localTask",JSON.stringify(taskObject));
       showData();
   }
});

//Display Tasks in Table formate 
function showData()
{
   let webTask = localStorage.getItem("localTask");  
   if(webTask == null)
   {
     taskObject = [];
   }
   else
   {
      taskObject = JSON.parse(webTask);
   }
   let htmll='';
   let addTaskList=document.getElementById("AddTaskList");
   taskObject.forEach((item,index) =>
    {
       
     htmll +=`<tr scope="row">
                 <th>${index+1}</th>
                 <td>${item}</td>
                 <td><button type="button" class="text-danger" onclick="DeleteTask(${index})">
                    <i class="fa fa-trash"></i>Delete</button></td>
              </tr>`;

      addTaskList.innerHTML=htmll;   
    });
 }


// Delete Operation
function DeleteTask(index)
{
   
   let webTask = localStorage.getItem("localTask");
   let taskObject = JSON.parse(webTask); 
   
   taskObject.splice(index,1);
   localStorage.setItem("localTask",JSON.stringify(taskObject));
   showData();
}

// Delete all Tasks

      let deleteallbtn=document.getElementById("delete-tasks");
       deleteallbtn.addEventListener("click",function()
       {    
         let webTask = localStorage.getItem("localTask");
         let taskObject = JSON.parse(webTask);

         if(webTask == null)
         {
             taskObject = [];
         }
         else
         {
            taskObject = [];
         }
         localStorage.setItem("localTask",JSON.stringify(taskObject));
         console.log(taskObject);
         showData();
         
       });
       showData();
       