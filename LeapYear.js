// var year = 2080;
// var reminder = year % 4;
// console.log( reminder == 0);

function LeapYear(year){
    if(year % 400 == 0  && year % 100 != 0){
        console.log("Leap Year");
    }
    else if(year % 4 == 0){
        console.log('Leap Year');
    }
    else{
        console.log('Not Leap Year');

    }
}
LeapYear(2022);