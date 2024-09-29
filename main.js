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
document.querySelector('#slotA').innerText = slotA

// slotB 
let slotB = Math.floor(Math.random() * 3)
console.log(slotB)
document.querySelector('#slotB').innerText = slotB

// slotC 
let slotC= Math.floor(Math.random() * 3)
console.log(slotC)
document.querySelector('#slotC').innerText = slotC


 console.log(walletBalance)
// if all slots have the same number- player wins
if(walletBalance <= 0){
   
    document.querySelector('#winLose').innerText = 'Please insert more money!'
}
else if(slotA === slotB && slotA === slotC){
    console.log('true')
    walletBalance += 10 //shorthand walletBalance + 10
    document.querySelector('#wallet').innerText = walletBalance
    document.querySelector('#winLose').innerText = 'You win!!'

// if they dont match display the balance and they lose
}
else{
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
    document.querySelector('#slotA').innerText = slotA
    
    // slotB 
    let slotB = Math.floor(Math.random() * 5)
    console.log(slotB)
    document.querySelector('#slotB').innerText = slotB
    
    // slotC 
    let slotC= Math.floor(Math.random() * 5)
    console.log(slotC)
    document.querySelector('#slotC').innerText = slotC
    console.log(walletBalance)
    // if all slots have the same number- player wins
    if(walletBalance <= 0){
        
        document.querySelector('#winLose').innerText = 'Please insert more money!'
    }
    else if(slotA === slotB && slotA === slotC){
        console.log('true')
        walletBalance += 100 //shorthand walletBalance + 100
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'You win!!'
    
    // if they dont match display the balance and they lose
    }
    else if(slotA !== slotB){
        console.log('false')
        walletBalance -= 100 //shorthand walletBalance - 100
        document.querySelector('#wallet').innerText = walletBalance
        document.querySelector('#winLose').innerText = 'You Suck, try again'    
    
    }
    }
