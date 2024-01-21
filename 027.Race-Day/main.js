     // Generate a random race number between 0 and 999
     let raceNumber = Math.floor(Math.random() * 1000);
     // Create a variable that indicates whether a runner registered early or not and assign a boolean value (true or false)
     let registeredEarly = true;
     // Create a variable for the runner's age and assign a number value
     let runnerAge = 19;
     // Create a control flow statement using registeredEarly and runnerAge variables
     if (runnerAge > 18 && registeredEarly) {
         raceNumber += 1000;
     }
     // Create another control flow statement using runnerAge and registration time to determine race time
     if (runnerAge > 18 && registeredEarly) {
         console.log(`The runner with ${raceNumber} will race at 9.30am.`);
     } else if (runnerAge > 18 && !registeredEarly) {
         console.log(`The runner with ${raceNumber} will race at 11.00am.`);
     } else if (runnerAge < 18) {
         console.log(`The runner with ${raceNumber} will race at 12.30pm.`);
     } else {
         console.log('The runner has to see the registration desk.');
     }