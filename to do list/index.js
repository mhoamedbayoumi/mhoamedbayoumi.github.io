
function myfunction()
{
    var type=document.querySelector("input").value;
    var list=document.getElementById("list");
    var element=document.createElement("p");
    element.textContent=type.toString();
    element.classList.add("pragraph");
    list.appendChild(element);
    console.log(element);
    element.addEventListener("click",function(){
        element.classList.add("done");
    })
    element.addEventListener("dblclick",function(){
        element.remove();
    })
}

