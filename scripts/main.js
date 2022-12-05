let taskul = document.getElementById('taskul');
let tasknum = document.getElementById('tasknum');
let addtask = document.getElementById('addtask');
let nam = document.getElementById('name');
let nameinp = document.getElementById('nameinp');
let myTasks = [];
addtask.addEventListener('click', function (){
    

    if(tasknum.value == ""){
        alert('Enter a task')
    }
    else{
        myTasks.push(tasknum.value)
        localStorage.setItem('tasks', JSON.stringify(myTasks))
        
        renderL();
        }
        
        tasknum.value = "";
})


function renderL(){
    listItem = '';
    let localTsk = JSON.parse(localStorage.getItem('tasks'));
    for(let i=0 ; i<localTsk.length; i++){
        listItem += `<li class= "tasksjk">
                    <p> ${localTsk[i]} </p> 
                    <span class ="checkBtn"><i class="fa-regular fa-square"></i></span>
                    <span class= "delBtn"><i class="fa-regular fa-trash-can"></i></span>           
                </li>`   
    }
    
    taskul.innerHTML = listItem;

    let checkBtn = document.querySelectorAll(".checkBtn");
    for(i=0; i<checkBtn.length ; i++){
        checkBtn[i].addEventListener('click',function(){
            var li = this.parentElement;
            let p = li.firstElementChild;
            p.classList.toggle("done");
            this.innerHTML = '<i class="fa-regular fa-square-check"></i>';
        })
    }

    let del = document.querySelectorAll(".delBtn");
    for (i=0; i<del.length;i++){
        del[i].addEventListener('click', function(){
    
            var li = this.parentElement;
            let p = li.firstElementChild;
            let index = myTasks.indexOf(p.innerText);
            myTasks.splice(index,index+1);
            localStorage.setItem('tasks', JSON.stringify(myTasks));
            li.remove();
        })
    }
}


renderL();
let name = localStorage.getItem('name');
nam.addEventListener('keydown', function(e){
    if (e.key =="Enter"){
        localStorage.setItem('name',nameinp.value )
        let name = localStorage.getItem('name');
        nam.innerText = name;
    }
} )
function renderName(){
    let name = localStorage.getItem('name');
    nam.innerText = name;
}
renderName();


