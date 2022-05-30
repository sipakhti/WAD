// confirm
// alert
// prompt
// create 3 buttons

let alertBtn = document.getElementById('alert')
let confirmBtn = document.getElementById('confirm')
let promptBtn = document.getElementById('prompt')




disableButtons(confirmBtn,promptBtn)
alertBtn.addEventListener('click', () => {
    alert("ALERT BUTTON")
    enableButton(confirmBtn)
    // confirmBtn.requestFullscreen().catch(e => console.log(e))
})
confirmBtn.addEventListener('click', () => {
    if (confirm("PRESS OK TO UNLOCK THE NEXT BUTTON"))
        enableButton(promptBtn)
})
promptBtn.addEventListener('click', () => alert(prompt("PROMPT BUTTON")))

function disableButtons(...args) {
    for (const button in args) {
        button.disabled = true
    }
}

function enableButton(Button) {
    Button.disabled = false
}