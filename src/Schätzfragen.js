var fragen = [
    "Wie schwer kann eine Schönwetterwolke werden? (in Tonnen)",
    "Wie viele Entenarten gibt es auf der Welt?",
    "Wie viele Tage verbringt ein Deutscher in seinem Leben durchschnittlich auf dem Klo? (in Tagen)",
    "Wie viele Zähne hat ein Eisbär",
    "Wie lange halten Ehen im Schnitt?",
    "Wann wurde die Riesenschildkröte Adwiata geboren, die 2006 als älteste ihrer Art im Zoo von Kalkutta gestorben ist?",
    "Wie lange braucht der Schall um einen Kilometer zurückzulegen? (in Sekunden)",
    "Wieviele Stellen hat der Strichcode der Europäischen Artikelnummer?",
    "Wie hoch ist der Berliner Fernsehturm? (in m)",
    "Wieviele katholische Päbste waren trotz Zölibats nachweislich verheiratet?",
    "Wieviele Buchstaben hat das hawaiianische Alphabet?",
    "Wieviel Einkerbungen hat ein Golfball?",
    "Wie oft pro Jahr zwinkert ein durchschnittlicher Mensch? (in Mio.)",
    "Wieviele Buchstaben hat das längste englische Wort laut dem Oxford Dictionary?",
    "Wieviele Räume hat der Buckingham Palast?",
    "Wie lange muss man ein Straußenei kochen, bis es hartgekocht ist? (in Minuten)",
    "Ein ausgewachsener Mensch besitzt 206 Knochen - aber mit wievielen werden wir geboren?",
    "Wieviele Abbonenten hat der Youtube-Channel der Bundesregierung?",
    "Wieviele Stundenten sind zur Zeit an der größten Universität der Welt in Indien eingeschrieben? (in Mio.)",
    "Wieviele Teile Besteck gibt es im Weißen Haus?",
];
var lösungen = [
    1000,
    50,
    230,
    42,
    15,
    1750,
    3,
    13,
    365,
    39,
    12,
    336,
    84,
    44,
    602,
    40,
    301,
    5224,
    2,
    13092,
];

let i = 0;
let j = 0;
var input;
window.onload = () => {
    input = document.getElementById("Schätzung");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            Überprüfen();
            i++;
            if (i > fragen.length - 1) {
                localStorage.setItem("Punktestand", j);
                window.location.href = ("Endseite.html");
            }
            else
                Ausgabe();
        }
    });
    Ausgabe();
}


function Überprüfen() {
    var eingabe = parseInt(input.value);
    var Schätzung = parseInt(input.value);
    if (eingabe == lösungen[i]) {
        j++;
    } else {
        var differenz = parseInt(lösungen[i]) - parseInt(Schätzung);
        var betrag = Math.abs(differenz);
        var ergebnis = betrag / lösungen[i];
        if (ergebnis <= 0.2) {
            j++;
    
        }
    }
}

function Ausgabe() {
    var punkte = document.getElementById("punktestand");
    punkte.innerHTML = "Punktestand: " + j;
    var frage = document.getElementById("frage");
    frage.innerHTML = fragen[i];
    input.value = "";
}