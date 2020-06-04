// ##1
var counter = (function () {
    var count = 0;
    return function (n) {
    count = n !== undefined ? n : count;
    return count++;
    }
    }());
       
    console.log(counter(7));
    console.log(counter(10));
    console.log(counter());



    // ##2

 var counting = (function () {
    var count = 0;
    return {
    value(n) {
    if (n !== undefined) count = n;
    return count;
    },
    increment () {
    count++;
    },
    decrement () {
    count--;
        }
    };
   }());


    console.log(counting.value());
    console.log(counting.value(5));
    counting.increment();
    counting.increment();
    console.log(counting.value());
    counting.decrement();
    console.log(counting.value());
    console.log(counting.value(77));
    counting.increment();
    counting.increment();
    console.log(counting.value());gulp watch


    // ##3

 
    function myPow(a, b, callback) {
        var res = function (x,n){
        if (n!== 1) { return x *= res(x,n - 1); }
        else { return x; }
        };
       return callback (a,b,res(a,b));
           
}

function myPrint(a,b,res)
{
    return a + '^' + b + '=' + res;
   
}

console.log(myPow(2,4,myPrint));
     



// ##4 ##5 ##6

function info() {
  return this.name + ' ' + this.model + ', ' +  this.engine + 'cc' + ', ' + 'year ' + this.year + ', ' + this.used;
};

var yearNow = 2020;

var car = {
    engine: 1500,
    model: 'Rio',
    name: 'Kia',
    year: 2013,
    get used(){
        return this.year === yearNow ? 'new' : 'used';
        },
        set used(value) {
    if (value = 'new') {
        this.year = yearNow;
    } else {
        this.year = this.year;
    }
    },
    info: info
};

var car1 = {
    engine: 2000,
    model: 'RAV-4',
    name: 'Toyota',
    year: 2019,
    get used(){
        return this.year === yearNow ? 'new' : 'used';
        },
        set used(value) {
    if (value = 'new') {
        this.year = yearNow;
    } else {
        this.year = this.year;
    }
    },
    info: info
};

var car2 = {
    engine: 1700,
    model: 'Golf',
    name: 'Volksvagen',
    year: 1999,
    get used(){
        return this.year === yearNow ? 'new' : 'used';
        },
        set used(value) {
    if (value = 'new') {
        this.year = yearNow;
    } else {
        this.year = this.year;
    }
    },
    info: info
};
 
console.log(car.info());


car.used = 'new';

console.log(car.used);
console.log(car.year);


// ##7

var value = [3, 7, 55, 77, 133, 99, 30];

function myMax(arr) {
    return Math.max.apply(null, arr);
};
console.log(myMax(value));

// ##8


function myMul(a, b) {
    return a * b;
};
console.log(myMul(4,9));

var myDouble = myMul.bind(null, 2);
console.log(myDouble(2));

var myTriple = myMul.bind(null, 3);
console.log(myTriple(3));



// ##9

var list = [
    'html',
    'css',
    'js',
    'css',
    'hard_js',
    'hard_js'
];
function myUniq(arr) {
var set = new Set;

arr.forEach ((array) => {
    set.add(array);  
});
return set;
};

console.log(myUniq(list));
