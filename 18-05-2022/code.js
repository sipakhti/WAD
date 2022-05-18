// confirm
// alert
// prompt
// create 3 buttons

let alertBtn = document.getElementById('alert')
let confirmBtn = document.getElementById('confirm')
let promptBtn = document.getElementById('prompt')

alertBtn.addEventListener('click', ()=>alert("ALERT BUTTON"), false)
confirmBtn.addEventListener('click', ()=>confirm("CONFIRM BUTTON"))
promptBtn.addEventListener('click', ()=>alert(prompt("PROMPT BUTTON")))