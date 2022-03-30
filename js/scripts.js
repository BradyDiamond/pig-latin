
const vowelArray = ["a","e","i","o","u"];
function noInputedWord() {
  function noInputtedWords() {
    for (let i=0; i < arguments.length; i++) {
      if (arguments[i].trim().length === 0) {
        return true;
      }
    }
    return false;
  }


//business logic

function findVowel(word) {
  let letterArray = word.split(" ");
    if (letterArray.includes("a",0))
    return true;
}
findVowel("a", "pplea","unread");
// }
//   return false;
  // const vowelArray = ["a"|| "e"|| "i" || "o" || "u"];
// for (let index = 0; index === vowelArray
// ]; index += 1) {
//   alert(index);
// }

// Input.includes(toLowerCase(vowelArray))


//$(document).ready(function() {
}

for (let i = 0; i === "a" || i === "e" || i === "i" || i === "o" || i === "u"; index += 1) {
  console.log(index);
}




// function startsVowel(word) {
//   const vowels = ["a","e","i","o","u"]
//    let letterArray = word.split('');
//    if (letterArray[0].match(["a","e","i","o","u"]i)) {
//      return true;
//    }
//    return false;
//  }
 

function translatePigLatin(string) { 

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newString = "";
  // let pigString = []
  // let pigString = text.split(" ")
  
  if (vowels.indexOf(string[0]) > -1) {
      newString = string + "way";
      return newString;}}
translatePigLatin("apples and Oranges you can EaT")

      
  } else {
      let firstMatch = string.match(/[aeiou]/g) || 0;
      let vowel = string.indexOf(firstMatch[0]);
      newString = string.substring(vowel) + string.substring(0, vowel) + "ay";
      return newString;
  }
}
translatePigLatin("apples and Oranges you can EaT")


// var s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
// var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
// var finalString = punctuationless.replace(/\s{2,}/g," ");
  let string = string.toLowerCase();


  function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;




    function findFirstVowel (word) {
      var vowels = ['a', 'e', 'i', 'o', 'u'];
    
      for (var i = 0; i <= word.length - 1; i++) {
    
        if (vowels.indexOf(word[i]) !== -1 ) {
          return i;
        }
      }
      return word.length;


      

// 
function pigLatin(word) {
  let firstConsonants = [];
  let latinWord = "";
  let vowels = ["a", "e", "i", "o", "u"];
  let wordArray = word.toLowerCase().split("");

  if (vowels.includes(wordArray[0])) {
    return wordArray.join("") + "way";
  }

  for (char in wordArray) {
    if (!vowels.includes(wordArray[char])) {
      firstConsonants.push(wordArray[char]);
    } else {
      latinWord =
        wordArray.splice(char).join("") + firstConsonants.join("") + "ay";
        break;
    }
  }
}
pigLatin("apples oranges peaches that you may eat")
  return latinWord;