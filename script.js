const counter = document.querySelector("p");
const btnIncreaseCounter = document.querySelector("button");
btnIncreaseCounter.addEventListener("click", function (){
    counter.innerHTML = 1 + Number(counter.innerHTML);
});