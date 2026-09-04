const teleprompterText = sessionStorage.getItem("teleprompterText");
const display = document.getElementById("teleprompter-text-display");
display.textContent = teleprompterText;

function autoScroll() {
    container.scrollTop += 7;
}

const container = document.getElementById("teleprompter-container");
setInterval(autoScroll, 60);

