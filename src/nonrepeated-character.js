/*
Given an arbitrary input string, write a function that returns the first non-repeating character. For strings with all repeats, return 'sorry'.

EX: "ABCD" --> "A"
EX: "XXXXX" --> "sorry"
EX: "ALABAMA" --> "L"
EX: "BABA" --> "sorry"
*/
function firstNonRepeatedCharacter(string){
 let result = Array.from(string) ;
var letterFilter = result.filter(function(char){
	return result.indexOf(char) === result.lastIndexOf(char);
}); return letterFilter[0];
  
};
/*
function firstNonRepeatedCharacter(string) {
   let firstSingle = string.split('').filter(function(char) {
       return string.indexOf(char) === string.lastIndexOf(char);
  })[0];

  return !!firstSingle ? firstSingle : 'sorry'
}
*/
module.exports = firstNonRepeatedCharacter;
