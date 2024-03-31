
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0


console.log(countEl)
//console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count   
}

function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
    countEl.textContent = 0
    count = 0
} 


// <button onclick="document.location.reload()" id="clear-btn">CLEAR</button>




