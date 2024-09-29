document.querySelector('#min').addEventListener('click', min)
document.querySelector('#max').addEventListener('click', max)
//set a starting point(wallet balance)
let walletBalance = 500
document.querySelector('#wallet').innerText = walletBalance
console.log(walletBalance)
//Event Listener

function min(){
//slotA
let slotA = Math.floor(Math.random() * 3)
console.log(slotA)
// slotB 
let slotB = Math.floor(Math.random() * 3)
console.log(slotB)
// slotC 
let slotC= Math.floor(Math.random() * 3)
console.log(slotC)

console.log(walletBalance)
// if all slots have the same number- player wins
if(walletBalance < 10){
   
    document.querySelector('#winLose').innerText = 'Please insert more money!'
}
else if(slotA === slotB && slotA === slotC){
    document.querySelector('#slotA').innerText = slotA
    document.querySelector('#slotB').innerText = slotB
    document.querySelector('#slotC').innerText = slotC
    console.log('true')
    walletBalance += 10 //shorthand walletBalance + 10
    document.querySelector('#wallet').innerText = walletBalance
    document.querySelector('#winLose').innerText = 'You win!!'

// if they dont match display the balance and they lose
}
else{ document.querySelector('#slotA').innerText = slotA
    document.querySelector('#slotB').innerText = slotB
    document.querySelector('#slotC').innerText = slotC
    console.log('false')
    walletBalance -= 10 //shorthand walletBalance + 10
    document.querySelector('#wallet').innerText = walletBalance
    document.querySelector('#winLose').innerText = 'You Suck, try again'    

}
}
function max(){
    //slotA
    let slotA = Math.floor(Math.random() * 5)
    console.log(slotA)
   
    // slotB 
    let slotB = Math.floor(Math.random() * 5)
    console.log(slotB)
    
    
    // slotC 
    let slotC= Math.floor(Math.random() * 5)
    console.log(slotC)
  
    
    console.log(walletBalance)
    // if all slots have the same number- player wins
    if(walletBalance < 100){
   
        document.querySelector('#winLose').innerText = 'Please insert more money!'
    }
    else if(slotA === slotB && slotA === slotC){
        document.querySelector('#slotA').innerText = slotA
        document.querySelector('#slotB').innerText = slotB
        document.querySelector('#slotC').innerText = slotC
        console.log('true')
        walletBalance += 300 //shorthand walletBalance + 100
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'You win!!'
    
    // if they dont match display the balance and they lose
    }
    else{
       document.querySelector('#slotA').innerText = slotA
        document.querySelector('#slotB').innerText = slotB
        document.querySelector('#slotC').innerText = slotC 
        console.log('false')
        walletBalance -= 100 //shorthand walletBalance + 100
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'You Suck, try again'    
    
    }
    }
