  console.log('Sample JavaScript #2 HW #16');

// // * #1
var userObj = {
    firstName: 'Энтони',
    lastName: 'Хопкинс',
    age: 60,
    fullName () {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
 }
 console.log(userObj);
 

// // //  * #2

 console.log(userObj.fullName());
 

// // //  * #3
 function defUpperStr(f1) {
     return `${f1 || 'DEFAULT TEXT'}`.toUpperCase();
 }

defUpperStr('My text');
console.log(defUpperStr('My text'))
console.log(defUpperStr());


// //  * #4


function evenFn(n) {
    var mas = [];
    for (var i = 1; i <= n ; i++) 
        if (i % 2 === 0) 
        mas.push(i);
        return mas;
    
}
     evenFn(20)
    



// //  * #5

function weekFn(n) {
    var day;

    switch (n) {
        case 1: day = 'Понедельник'; break;
        case 2: day = 'Вторник'; break;
        case 3: day = 'Среда'; break;
        case 4: day = 'Четверг'; break;
        case 5: day = 'Пятница'; break;
        case 6: day = 'Суббота'; break;
        case 7: day = 'Воскресенье'; break;

        default: day = null;  
    }  
    return day;
}

console.log(weekFn(2));




// // * #6

function ageClassification(n) {
    var x = n < 0 ? null : n >= 0 && n <= 24 ? 'детский возраст' : n > 24 && n <= 44 ? 'молодой возраст' : n > 44 && n <= 65 ? 'средний возраст' :
 n > 65 && n <= 75 ? 'пожилой возраст': n > 75 && n <= 90 ? 'старческий возраст' : n > 90 && n <= 122 ? 'долгожители' : null;
 
    
    return x;
 }
 
//  console.log('-1 :', ageClassification(-1)); // -1 : null
// console.log('5 :', ageClassification(5)); // 5 : детский возраст
// console.log('34 :', ageClassification(34)); // 34 : молодой возраст
// console.log('50 :', ageClassification(50)); // 50 : средний возраст
// console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
// console.log('80 :', ageClassification(80)); // 80 : старческий возраст
// console.log('110 :', ageClassification(110)); // 110 : долгожители
// console.log('130 :', ageClassification(130)); // 130 : null




// // // * #7
function oddFn(n) {

var mas2 = [];
var i = 0; 
    while (i++ < n)  if (i % 2 !== 0)
        mas2.push(i);
        return mas2;
}

 console.log(oddFn(20));
   



// // *8

function mainFunc(a, b, func) {
if (typeof func != 'function')
return false;
return func (a,b);
}


function cbPow (a, b){
    return Math.pow(a,b);
}


function cbAdd (a, b){
    return a+b;
}

function cbRandom (a,b){
    return Math.ceil(Math.random() * (a - b) + b );
}

console.log(mainFunc(2, 5,cbAdd));
console.log(mainFunc(2, 5,cbPow));
console.log(mainFunc(2, 5,cbRandom));
 
 

