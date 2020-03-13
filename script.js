var vragen = [
    "What is the capital of Amsterdam?",
    "A good one, what is 2 multiplied by 5, and then divided by 2?",
    "Where can the Eiffel tower be found?",
    "Name a fruit",
    "Name a sickness that has gotten popular recently",
]
document.getElementById("vraag1").innerHTML = vragen[0];
document.getElementById("vraag2").innerHTML = vragen[1];
document.getElementById("vraag3").innerHTML = vragen[2];
document.getElementById("vraag4").innerHTML = vragen[3];
document.getElementById("vraag5").innerHTML = vragen[4];


var antwoorden = ["Amsterdam",
    5,
    "Paris",
    ["Mango", "Tomato", "Banana", "Strawberry", "Kiwi", "Melon", "Pineapple"],
    ["Corona", "Corona", "Corona", "Corona", "Corona", "Corona", "Corona", "Corona"],
];



function check() {
    var punten = 0;
    if (document.getElementById("antwoord1").value == antwoorden[0]) {
        punten++;
    }
    if (document.getElementById("antwoord2").value == antwoorden[1]) {
        punten++;
    }
    if (document.getElementById("antwoord3").value == antwoorden[2]) {
        punten++;
    }
    var answer3 = document.getElementById("antwoord4").value.split(" ");

    for (i = 0; i < answer3.length; i++) {

        if (antwoorden[3].includes(answer3[i])) {
            punten++;
        }
    }


    var answer4 = document.getElementById("antwoord5").value.split(" ");

    for (i= 0; i < answer4.length; i++) {
        if (antwoorden[4].includes(answer4[i])) {
            punten++;
        }
    }
    document.getElementById("correct").innerHTML = punten;
}