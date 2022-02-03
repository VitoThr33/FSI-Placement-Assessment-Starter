// First, tell us your name
let yourName = "Ryan McGowan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle


function updateQuantity(id, displayQuantity) {
    let quantity = document.querySelector(`#${id}`)
    let totalQty = document.querySelector(`#qty-total`)
    quantity.innerHTML = displayQuantity 
    totalQty.innerHTML = gb+cc+sugar
    
}
// selecting the element with an id of credit
const credit = document.querySelector('#credit')

// selecting the elements with id
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccAddBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const scAddBtn = document.querySelector('#add-sugar')
const scMinusBtn = document.querySelector('#minus-sugar')

credit.textContent = `Created by ${yourName}`

// Event listener for clicks for all buttons
gbPlusBtn.addEventListener('click', function() {
updateQuantity('qty-gb', ++gb)

})

gbMinusBtn.addEventListener('click', function(){
updateQuantity('qty-gb', --gb)
})
ccAddBtn.addEventListener('click', function(){
 updateQuantity('qty-cc', ++cc)
})

ccMinusBtn.addEventListener('click', function(){
updateQuantity('qty-cc', --cc)
})


scAddBtn.addEventListener('click', function(){
    updateQuantity('qty-sugar', ++sugar)
})

scMinusBtn.addEventListener('click', function(){
    updateQuantity('qty-sugar', --sugar)

   
})