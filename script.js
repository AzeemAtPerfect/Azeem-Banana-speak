const btnTranslate=document.getElementById("btn-translate")
const txtInput = document.getElementById("txt-input")

// Event Listner
btnTranslate.addEventListener("click",getInput)

// Functions
function getInput(){
    console.log(txtInput.value)
}