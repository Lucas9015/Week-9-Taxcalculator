// console.log("loops file")

// Placeholder comment

// Another placeholder comment

const fruits = ['apple', 'banana', 'mango']

//while loop

let iterator = 0    
while(iterator < fruits.length){
    console.log(fruits[iterator])
    iterator++
}

//do while loop

do{
    console.log(fruits[iterator])
    iterator++ 
}while(iterator < fruits.length)
// const numbers = [60, 32, 80, 49, 100, 110]

// let total = 0
// let iterationCount = 0
// let theItemsOperatedOn = 0

// for(let i = 0; i < fruits.length ; i++){

//     if(numbers[i] < 50){
//         theItemsOperatedOn++
//         total = total + numbers[i]
//     }
    
// }

// console.log(iterationCount)
// console.log(theItemsOperatedOn)
// console.log(total)

//create a function that takes in an array of numbers and returns the sum of all numbers that are less than 50

// function theTotal(Anumberrray){
//     let total = 0

//     for(let i = 0; i < numberArray.length; i++){
//         total = total + numberArray[i]
//     }
//     return total;
// }

// console.log(theTotal(2, 4, 6, 8, 10))
// console.log(theTotal(1, 3, 5, 7, 9))
// console.log(theTotal(10, 20, 30, 40, 50))

//create a function that sums up the total of the first 50 numbers

function sumOfNumbers(){

    //initialize of final value
    let finalValue = 0

    for(let i = 1; i <= 50; i++){

        if(i % 2 !== 0){
            
       
        finalValue = finalValue + i
        }
        break;
    }
    return finalValue


}

//break and continue
console.log(sumOfNumbers())

