let num = 266219; 
var arr = num.toString().split('').map(Number);
var result = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

console.log(result);



/*function getResult(a,b){
    let result;

    var arr = (a ** b).toString(10).replace(/\D/g, '0').split('').map(Number);
    result = 0;
    for(let number of arr) {
        
        result += number;
    } 
    
    return result;
    }
    
    console.log(getResult(3, 10))*/


