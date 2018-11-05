const assert = require("chai").assert;
const firstNonRepeatedCharacter = require("../src/nonrepeated-character");


describe("firstNonRepeatedCharacter", function() {
  it("should return 'A' if given 'ABCD'", function() {
       // TODO: Fill in this test and add others
	   //assert.equal(firstNonRepeatedCharacter(),'A');
	   
	 
  });

});



/*
function firstNonRepeatedCharacter(string){
 let result = Array.from(string) ;
var letterFilter = result.filter(function(char){
	return result.indexOf(char) === result.lastIndexOf(char);
}); return letterFilter[0]
  
};

*/
