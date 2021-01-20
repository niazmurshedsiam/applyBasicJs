// var fibo = [0,1];
// for( var i = 2;i <= 10; i++){
//    fibo[i] = fibo[i-2] + fibo[i-1];
//    console.log(fibo[i-2],fibo[i-1],fibo[i]);
// }
// console.log(fibo);

function fibonaci(n){
    fibo = [0,1];
    for(var i = 2; i<=n; i++){
        fibo[i] = fibo[i-2] + fibo[i-1];

    }
    return fibo;
}
var result = fibonaci(10);
console.log(result);