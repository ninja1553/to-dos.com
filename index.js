var input=document.getElementsByClassName("in")[0];
var add= document.getElementsByClassName("add")[0];
var task=document.getElementsByClassName("task")[0];
function addToList(){
    var item=document.createElement("DIV");
    item.innerHTML='<i class="fa-solid fa-check  " ></i> '+input.value;
    item.classList.add('listitem');
    task.appendChild(item);
    input.value="";

    item.addEventListener("click",function(){
        this.remove();
    });
}
add.addEventListener("click",addToList);