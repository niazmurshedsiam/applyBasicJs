// var n = 57;
// for(var i =2; i < n-1;i++){
//     console.log(i,n % i);
//     if(n % i ==0 ){
//         console.log('not a prime number');
//         break;
//     }

// }
// var n = 128;
function isPrime(n){
    for(var i =2; i < n;i++){
            
            if(n % i ==0 ){
                return 'Not a prime number';
            }
            
        
        }
        return 'Your Number is a prime number';

}

var result = isPrime(61);
console.log(result);