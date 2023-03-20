const btnTranslate = document.getElementById("btn-translate")
const txtInput = document.getElementById("txt-input")
const txtTranslated = document.querySelector(".txt-translated")

const url = "https://api.funtranslations.com/translate/minion.json"




// Event Listner
btnTranslate.addEventListener("click", getTranslation)

// Functions
function getApiURL(text) {
    return url + "?" + "text=" + text
}

function getTranslation() {
    const inputText = txtInput.value
    // console.log(getApiURL(inputText))
    fetch(getApiURL(inputText)).then(response => (response.json())).then(j => (txtTranslated.innerText = j.contents.translated))
}