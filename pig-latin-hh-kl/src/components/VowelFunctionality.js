import React, {useState} from "react"


const vowelsArray = eachWord.split("").filter(vowel => {
    return (
        vowel === "a" ||
        vowel === "e" ||
        vowel === "i" ||
        vowel === "o" ||
        vowel === "u"
        )
    })
    console.log("vowelArray.")
    if (vowelsArray.includes(eachWord.char[0])){
        return
        eachWord = eachWord.concat("way")
        return inputWord
        
    }
    console.log(vowelsArray)
    
    
    
    //vowel functionality 
    //Input: Apple 
    //*Person clicks submit button*
    //Output: Appleway
    //let vowels = [a, e, i, o, u]
    //if english = "";
    //if (vowels.indexOf(str[0]))
    //return i[1.length] + way
    //function that goes through the first index of each word and if that first letter is a vowel then the app will add yay to the end of the first value of that string
    //export default VowelFunc
    // const numbersArray = [1, 2, 7, 4, 10, 8, 9]
    
    // const onlyEven = (array) => {
        //   return array.filter((value) => value % 2 === 0)
        // }
        
        // console.log(onlyEven(numbersArray))
// // output: [2, 4, 10, 8]

// let vowels = [a, e, i, o, u]
// let translator = (array) => {
//     // going to have to return the original array + new array of "way"
//     return array.map((value)) 
// }
// console log the original array + adding way
//console.log(array.push("way"))


//we need to remove the first letter .shift









