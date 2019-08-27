/*function addExcitement () {
    const sentence = "this is so fun, i'm going to loose my mind soon";
    console.log(sentence);
}

addExcitement();

//____________________________

/*Practice: Stacking Words
The learning objects of this 
exercise is to use iteration and string concatenation

Create an addExcitement function that should console.log() rows of words. 
It should take an array containing the words of a sentence and output 
them in the developer console.*/

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
    // Each time the for loop executes, you're going to add one more word to this string
     // Concatenate the new word onto buildMeUp
     // Print buildMeUp to the console

     in the function below you do i + 1 because it is saying every third word and javascript would assume that 0 
     is  divisible by 3 so you need specify it to start at 1 so it will be ever third word vs starting with 
     punctuation after the first word
*/
function addExcitement (theWordArray) {
    let buildMeUp = ""
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
        buildMeUp = buildMeUp + " " + theWordArray[i] + "!"
        }
        else {
            buildMeUp = buildMeUp + " " + theWordArray[i]
    }
    console.log(buildMeUp)
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)

//_________________________________
/* Practice: Some words are more exciting than others
Add logic to addExcitement that places an exclamation point (!) after every third word. 
Read the following English statement and write the equivalent in JavaSript code to make it work.

If the current value of the counter variable can be evenly divided by 3 (using the 
JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.*/



//_________________________________
/* Practice: Function Arugements: Add a new argument to the function so that 
a developer can specify which character should be displayed instead of it always being an exclamation point. */ 

// I want to use a question mark
addExcitement(sentence, "?")