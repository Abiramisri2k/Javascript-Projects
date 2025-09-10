const counter = document.querySelector(".counter");
const bar = document.querySelector(".loading-bar-front");

let num = 0;

function updateNum(){
    counter.innerText = num + '%';
    bar.style.width = num + "%";
    num++;
    if(num<101){
        setTimeout(updateNum, 30);
    }
} 

updateNum();