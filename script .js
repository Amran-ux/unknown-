const terminalText = `
Initializing hacking tool...
Connecting to server...
Bypassing security...
Access Granted!
Welcome, hacker!`;

let i = 0;
function typeEffect() {
    if (i < terminalText.length) {
        document.getElementById("terminal").innerHTML += terminalText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

window.onload = typeEffect;