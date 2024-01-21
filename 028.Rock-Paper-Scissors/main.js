// The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ when the game starts.

        // Create a user choice function
        const getUserChoice = userInput => {
            // Make all choices in lowercase
            userInput = userInput.toLowerCase();
            // Check to make sure that user selects a valid choice
            if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
                return userInput;
            } else {
                // Throw an error if user selects an invalid choice
                console.log('Error, Please type: rock, paper or scissors');
            }
        };

        //Test the User Choice function by calling it with valid and invalid input, and 
        //printing the results to the console.
        //console.log(getUserChoice('rock')); // rock : valid input
        //console.log(getUserChoice('rocks')); // rocks : Invalid input

        // Create a computer choice function
        const getComputerChoice = () => {
            // Generate a random number from 0 to 2
            const randomNumber = Math.floor(Math.random() * 3);
            // Check to make sure that computer selects a valid choice
            switch (randomNumber) {
                case 0:
                    return 'rock';
                case 1:
                    return 'paper';
                case 2:
                    return 'scissors';
            }
        }

        // Test the Computer Choice function by calling it and printing the results to the console. 
        // It should print rock or paper or scissors
        //console.log(getComputerChoice());
        //console.log(getComputerChoice());
        //console.log(getComputerChoice());

        // Create a function to determine a winner
        const determineWinner = (userChoice, computerChoice) => {
            // If statement for - if the game is a tie
            if (userChoice === computerChoice) {
                return 'The game is a tie!';
            }
            // Nested If/else in If statement for - if the game is not a tie
            if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    return 'The Computer won!';
                } else {
                    return 'The User won!';
                }
            }
            // If statement for - if the userChoice is 'paper'
            if (userChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    return 'The computer won!';
                } else {
                    return 'The User won!';
                }
            }
            // If statement for - if the userChoice is 'scissors'
            if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    return 'The computer won!';
                } else {
                    return 'The User won!';
                }
            }
            // If statement for - secret cheat code if th user types 'bomb'
            if (userChoice === 'bomb') {
                return 'The User won!';
            }
        }

        // Test the function
        //console.log(determineWinner('paper', 'scissors'));
        // prints something like 'The computer won!'
        //console.log(determineWinner('paper', 'paper'));
        // prints something like 'The game is a tie!'
        //console.log(determineWinner('paper', 'rock'));
        // prints something like 'The user won!'

        // Start the game and log the results to the console.
        const playGame = () => {
            const userChoice = getUserChoice('paper');
            // const userChoice = getUserChoice('bomb');
            const computerChoice = getComputerChoice();

            console.log('The User threw: ' + userChoice);
            console.log('The Computer threw: ' + computerChoice);

            // Determine the ultimate winner by logging to the console
            console.log(determineWinner(userChoice, computerChoice));
        };

        // Start the game by calling playGame function
        playGame();