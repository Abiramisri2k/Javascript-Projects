const generate = document.getElementById("generate");

function randomNumber(){

    let min = document.getElementById("min");
    let max =document.getElementById("max");
    let minValue = Number(min.value);
    let maxValue = Number(max.value);
    if (minValue > maxValue) {
        minValue = maxValue + minValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
        min.value = minValue;
        max.value = maxValue;
    }

    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById("result").innerText = num;

}
window.addEventListener("load", randomNumber());
generate.addEventListener("click", randomNumber);


