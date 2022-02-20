let countEl = document.getElementById("count-el")

console.log(countEl)

let entered = 0

function increment() {
    entered += 1
    countEl.innerText = entered
    console.log(entered)
}

