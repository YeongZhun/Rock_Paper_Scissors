function main()
{

    function getComputerChoice() {
        Rand_Num = Math.floor(Math.random() * 3);
        if (Rand_Num === 0) {
            return "rock";
        }
        else if (Rand_Num === 1) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }

    function choose_no_of_rounds () {
        let no_of_rounds = prompt("Please choose number of rounds to play: (Please input integers only, max 10 rounds)");
        int_no_of_rounds = parseInt(no_of_rounds);

        if (no_of_rounds === null) {
            return;

        }
        else if(isNaN(int_no_of_rounds) || int_no_of_rounds > 10) {
            alert("Only integers < 10 allowed. Try again!");
            choose_no_of_rounds();
        }
        else {
            return int_no_of_rounds;
        }
    }

    function get_player_choice() {
        let getPlayerChoice = prompt("Please type \"rock\", \"paper\", or \"scissors\"!");
        player_choice = getPlayerChoice.toLowerCase();

        if (getPlayerChoice === null) {
            return;
        }
        else if (player_choice === "rock" || player_choice === "paper" || player_choice === "scissors") {
            alert(`You selected ${player_choice}!`);
        }
        else {
            alert("Please try again, only type \"rock\", \"paper\", or \"scissors\"!");
            get_player_choice();
        }
    }

    function playRound(playerSelection, computerSelection) {
        if (playRound === null) {
            return;
        }
    // rock
        else if (player_choice === "rock" && computer_choice === "rock") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, it's a draw!`
        }
        else if (player_choice === "rock" && computer_choice === "paper") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, Computer wins! The time for AI to enslave humanity is not long..`
        }
        else if (player_choice === "rock" && computer_choice === "scissors") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, You win! ChatGPT is trash.`
        }

    // paper
        else if (player_choice === "paper" && computer_choice === "paper") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, it's a draw!`
        }
        else if (player_choice === "paper" && computer_choice === "scissors") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, Computer wins! The time for AI to enslave humanity is not long..`
        }
        else if (player_choice === "paper" && computer_choice === "rock") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, You win! ChatGPT is trash.`
        }
    // scissors
        else if (player_choice === "scissors" && computer_choice === "scissors") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, it's a draw!`
        }
        else if (player_choice === "scissors" && computer_choice === "rock") {
            return `You selected ${player_choice} and Computer selected ${computer_choice}, Computer wins! The time for AI to enslave humanity is not long..`
        }
        else if (player_choice === "scissors" && computer_choice === "paper") { 
            return `You selected ${player_choice} and Computer selected ${computer_choice}, You win! ChatGPT is trash.`
        }
        else {
            alert("sumting wong plz try again..")
        }
    }

    function game_multiple_rounds (no_of_rounds_selected) {
        for (let i = 0; i < no_of_rounds_selected; i++) {
            console.log(`Round ${i+1} Begins!`)
            get_player_choice();
            computer_choice = getComputerChoice();
            console.log(playRound(player_choice,computer_choice));
            console.log(`Round ${i+1} Ends!`)
        }
        alert("All done! Refer to console (F12 for chrome) for results.")
    }

    console.log("Welcome to Rock Paper Scissors HUMANITY VS AI greatest challenge")
    no_of_rounds_selected = choose_no_of_rounds();
    game_multiple_rounds(no_of_rounds_selected)

}

main();