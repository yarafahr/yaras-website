

function falscherButton() {
    alert("Diese Antwort ist falsch! Leider kein Punkt");
    weiter();
}

function richtigerButton() {
    alert("Diese Antwort ist richtig!");
    var punktestand = parseInt(localStorage.getItem("Punktestand"));
    punktestand= punktestand + 1;
    var punkte = document.getElementById("punktestand");
    punkte.innerHTML = "Punktestand: " + punktestand;
    localStorage.setItem("Punktestand",punktestand);
    weiter();
}

window.addEventListener("load",function(event) {
    var punktestand = parseInt(localStorage.getItem("Punktestand"));
    var punkte = document.getElementById("punktestand");
    punkte.innerHTML = "Punktestand: " + punktestand;
},false);