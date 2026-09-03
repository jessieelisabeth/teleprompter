const button = document.getElementById('start-button');
const textarea = document.getElementById('teleprompter-text');

let telepromptertext = '';

function myFunction() {
    telepromptertext = textarea.value;
    console.log(telepromptertext);
    sessionStorage.setItem("teleprompterText", telepromptertext);
    window.location.href = "teleprompter.html";
}

button.addEventListener("click", myFunction);