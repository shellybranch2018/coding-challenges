/*
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

EX: [2, 1, 3, 7] --> 42
EX: [0, 2, 3] --> 0
*/
/*
function largestProductFromThree(arr) {
   return arr.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a * b);
}
*/

function largestProductFromThree(arr) {
const reverse = arr.sort(function(a,b){
  return b-a;
});

for(i=0; i<= reverse.length; i++){
  
return reverse.slice(0, 3).reduce((a, b) => a * b);
}  

}console.log(largestProductFromThree([2, 1, 3, 7]))
