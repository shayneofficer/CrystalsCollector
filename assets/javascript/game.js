var randNum = Math.floor(Math.random() * 102) + 19;
var totalPoints = 0;
var wins = 0;
var losses = 0;


$("#rand-num").html("<h2>" + randNum + "</h2>");



$(".crystal").on("click", function () {
    totalPoints += parseInt(this.value); // Why doesn't this.val() work?
    $("#total-score").text(totalPoints);

    if (totalPoints === randNum) {
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#game-result").text("You win!");
        reset();
        // alert("You win!");
    }
    else if (totalPoints > randNum) {
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#game-result").text("You lose!");
        reset();
        // alert("You lose!");
    }
})

function assignCrystalPoints() {
    var redPoints = Math.ceil(Math.random() * 12);
    var bluePoints = Math.ceil(Math.random() * 12);;
    var yellowPoints = Math.ceil(Math.random() * 12);;
    var greenPoints = Math.ceil(Math.random() * 12);;

    $("#red-crystal").val(redPoints);
    $("#blue-crystal").val(bluePoints);
    $("#yellow-crystal").val(yellowPoints);
    $("#green-crystal").val(greenPoints);
}

function reset() {
    totalPoints = 0;
    $("#total-score").text(totalPoints);
    randNum = Math.floor(Math.random() * 102) + 19;
    $("#rand-num").html("<h2>" + randNum + "</h2>");
    assignCrystalPoints();
}

assignCrystalPoints();