
function Fact (n){
    var i = 1;
    var fact = 1;
    while(i <= n){
        fact = fact * i;
        console.log(i,fact);
        i++;
    }
    return fact;
}
var result = Fact(5);
