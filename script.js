var vragen = [
    "What is the capital of Holland?",
    "Ok, good one, what is 2 times 5, devided by 2?",
    "Where can the Eiffel Tower be found?",
    "Name a fruit.",
    "Name a virus that has gotten popular recently.",
]
document.getElementById("vraag1").innerHTML = vragen[0];
document.getElementById("vraag2").innerHTML = vragen[1];
document.getElementById("vraag3").innerHTML = vragen[2];
document.getElementById("vraag4").innerHTML = vragen[3];
document.getElementById("vraag5").innerHTML = vragen[4];


var antwoorden = ["Amsterdam",
    5,
    "Paris",
    ["Banana", "Apple", "Tomato", "Kiwi", "Mango", "Grapefruit", "Melon"],
    ["Corona", "Corona", "Corona", "Corona", "Corona, Corona, Corona, Corona, Corona"],
];



function check() {
    if (
        document.getElementById("antwoord1").value == antwoorden[0] &&
        document.getElementById("antwoord2").value == antwoorden[1] &&
        document.getElementById("antwoord3").value == antwoorden[2] &&
        antwoorden[3].includes(document.getElementById("antwoord4").value) &&
        antwoorden[4].includes(document.getElementById("antwoord5").value)) {
        document.getElementById("correct").innerHTML = "correct";
    }
    else {
        document.getElementById("correct").innerHTML = "fout";
    }
}