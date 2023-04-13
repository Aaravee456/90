var player_1_name = localStorage.getItem("player1_name");
var player_2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn: " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2_name;


function sendQuestion() {
    var question = document.getElementById("number1").innerHTML + document.getElementById("number2");

    var text = "<h4 id = 'word_display'>Q. " + question + "</h4>";
    input_box = "<br><br>Answer: <input type = 'text' id = 'input_check_answer'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check_answer()'>Check</button>";
}