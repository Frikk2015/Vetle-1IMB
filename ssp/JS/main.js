let playervalg = 0;
let vinner = "ingen";

let scorePlayer = 0
let scoreComputer = 0

function steinPlayer() {
    document.getElementById("stein_player").style.display = "block";
    document.getElementById("saks_player").style.display = "none";
    document.getElementById("papir_player").style.display = "none";
    playervalg = 1;
}
function saksPlayer() {
    document.getElementById("stein_player").style.display = "none";
    document.getElementById("saks_player").style.display = "block";
    document.getElementById("papir_player").style.display = "none";
    playervalg = 2;
}
function papirPlayer() {
    document.getElementById("stein_player").style.display = "none";
    document.getElementById("saks_player").style.display = "none";
    document.getElementById("papir_player").style.display = "block";
    playervalg = 3;
}
function steinComputer() {
    document.getElementById("stein_computer").style.display = "block";
    document.getElementById("saks_computer").style.display = "none";
    document.getElementById("papir_computer").style.display = "none";
}
function saksComputer() {
    document.getElementById("stein_computer").style.display = "none";
    document.getElementById("saks_computer").style.display = "block";
    document.getElementById("papir_computer").style.display = "none";
}
function papirComputer() {
    document.getElementById("stein_computer").style.display = "none";
    document.getElementById("saks_computer").style.display = "none";
    document.getElementById("papir_computer").style.display = "block";
}
function spill() {
    if (playervalg == 0){
        alert("Velg stein, saks eller papir");
    }
    else {
        let computervalg = Math.floor(Math.random() * 3) + 1;
        if (computervalg == 1){
            steinComputer();
        }
        if (computervalg == 2){
            saksComputer();
        }
        if (computervalg == 3){
            papirComputer();
        }

        //uavgjort
        if (playervalg == 1 && computervalg == 1){
            vinner = "Det ble uavgjort";
        }
        else if (playervalg == 2 && computervalg == 2){
            vinner = "Det ble uavgjort";
        }
        else if (playervalg == 3 && computervalg == 3){
            vinner = "Det ble uavgjort";
        }
        //spiller vinner
        else if (playervalg == 1 && computervalg == 2){
            vinner = "Du vant!";
            scorePlayer ++
        }
        else if (playervalg == 2 && computervalg == 3){
            vinner = "Du vant!";
            scorePlayer ++
        }
        else if (playervalg == 3 && computervalg == 1){
            vinner = "Du vant!";
            scorePlayer ++
        }
        //Datamskin vinner
        else if (playervalg == 1 && computervalg == 3){
            vinner = "Du tapte :(";
            scoreComputer ++
        }
        else if (playervalg == 2 && computervalg == 1){
            vinner = "Du tapte :(";
            scoreComputer ++
        }
        else if (playervalg == 3 && computervalg == 2){
            vinner = "Du tapte :(";
            scoreComputer ++
        }
        document.getElementById("vstext").innerHTML = vinner;
        document.getElementById("score").innerHTML = scorePlayer + " - " + scoreComputer;
    }
}