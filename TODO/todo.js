const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");
const error = document.querySelector(".invalid");

function addTask(){
      if(inputBox.value === ''){
        error.style.display = "block";
      }
      else{
        error.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
      }
      inputBox.value = "";
      saveData();
}

inputBox.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        addTask();
    }
})

listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);
    
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML); 
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();

