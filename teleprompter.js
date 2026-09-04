const teleprompterText = sessionStorage.getItem("teleprompterText");
const display = document.getElementById("teleprompter-text-display");
display.textContent = teleprompterText;

function autoScroll() {
    container.scrollTop += 1;
}

const container = document.getElementById("teleprompter-container");
setInterval(autoScroll, 20);

