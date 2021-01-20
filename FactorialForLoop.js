// var fact = 1;
// for(var i = 1; i <= 0; i++){
//      fact = fact * i;
// }
// console.log(fact);
function Fact(n){
    var fact = 1;
for(var i = 1; i <= n; i++){
     fact = fact * i;
}
  return fact;
}
var result = Fact(5);
console.log(result);