// You're given a string of available characters and a string representing a document 
// that you need to generate. Write a function that determines if you can generate the 
// document using the available characters. If you can generate the document, your 
// function should return true; otherwise, it should return false.

// You're only able to generate the document if the frequency of unique characters in 
// the characters string is greater than or equal to the frequency of unique characters 
// in the document string. For example, if you're given characters = "abcabc" and 
// document = "aabbccc" you cannot generate the document because you're missing one c.

// The document that you need to create may contain any characters, including special 
// characters, capital letters, numbers, and spaces.

// Note: you can always generate the empty string ("").

// Sample input: characters = "Bste!hetsi ogEAxpelrt x "
//              document = "AlgoExpert is the Best!"

// Sample output: O(m *(m + n)) time | O(1) space complexity

function generateDocument(characters, document) {
  // Write your code here.
  const obj = {};
  console.log(characters);
  console.log(document);
  for (let i = 0; i < characters.length; i++) {
    if (!obj[characters[i]]) obj[characters[i]] = 0;
    obj[characters[i]]++;
  }

  // if document character not is not in obj then were done
  // return false, but if it is then we keep going.
  // remove 1 from value of object

  for (let i = 0; i < document.length; i++) {
    if (!obj[document[i]] || obj[document[i]] === 0) {
      return false;
    }

    obj[document[i]]--;
  }

  return true;
}
