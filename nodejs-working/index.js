console.log("Starting up...");

setTimeout(()=>{
    console.log("2 sec log");
},2000)


setTimeout(()=>{
    console.log("0 sec log");
},0)


console.log("Finishing  up...")


//Output ->(
// Starting up...
// Finishing  up...
// 0 sec log
// 2 sec log)


//Call stack
// Node APIs
//Callback Queue



//Event Loop