// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Ryan McGowan" // HINT: Replace this with your own name!


// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('minus-cc')
const ssPlusBtn = document.querySelector('add-ss')
const ssMinusBtn = document.querySelector('minus-ss')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies

gbPlusBtn.addEventListener('click', function() {
    console.log('java sucks')
})

gbMinusBtn.addEventListener('click', function(){
    console.log('Gingerbread + button was deleted')
})

ccPlusBtn.addEventListener('click', function(){
    console.log('cc sucks')
})

ccMinusBtn.addEventListener('click', function(){
    console.log('cc sucks')
})




