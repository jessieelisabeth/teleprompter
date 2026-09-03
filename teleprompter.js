const teleprompterText = sessionStorage.getItem("teleprompterText");
const display = document.getElementById("teleprompter-text-display");
display.textContent = teleprompterText;