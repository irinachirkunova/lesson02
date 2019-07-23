let num = 266219; 
var arr = num.toString().split('').map(Number);
var result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

console.log(result);




