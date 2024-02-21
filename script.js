let count = 0;

function clickCounter() {
count++;
localStorage.setItem("clickCount", count);
document.getElementById("clickCount").textContent = "Количество кликов: " + count;
}

function exit() {
console.log("Итоговое количество кликов: " + count);
clearInterval(interval);
}

document.getElementById("clickButton").addEventListener("click", clickCounter);
document.getElementById("clickCount").textContent = "Количество кликов: " + count;