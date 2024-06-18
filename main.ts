#! /usr/bin/env node
// Countdown Timer Project 
// In this Project, we will build a countdown timer using the data module.          

// data module install command 
// npm install date-fns

// Start Coding Step-1

import {differenceInSeconds, DifferenceInSecondsOptions} from "date-fns";

// Function for count down second
function* countdownTimer(second: number){
    // While Loop
    while (second > 0) {
        yield second;
        second--;
    }
};

// Step-2 Counter Initialization

let timerIterator = countdownTimer(10);

// Function to create a countdown timer
function displayCountdown() {

    // value below 10
    let result = timerIterator.next();

    // if else condition apply
    if(!result.done) {
        // current date and time call
        const now = new Date();
    // calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000))

        // calculate remaining seconds in time

        const remainingSeconds = differenceInSeconds(countdownTimer , now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)


        setTimeout(displayCountdown, 1000)   // 1 Second is equal to 1000 microseconds

    }
    else{
         // display result count down complete
         console.log("Countdown Complete!")
    }
}

// invoke
displayCountdown();
