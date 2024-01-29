console.log("I'm learning about");

for (let idx = 0; idx < 999999999; idx++) { }

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");


console.log("I’m learning about");
setTimeout(() => { console.log("Event Loop"); }, 2000);
console.log("the");