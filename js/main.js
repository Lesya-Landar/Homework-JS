console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

 var myNum = 10,
     myStr = 'строка',
     myBool = true,
     myArr = [1, 2, 3, 4, 5],
     myObj = {first: 'First Name', last: 'Last Name'};

 console.log(myNum);
 console.log(myStr);
 console.log(myBool);
 console.log(myArr);
 console.log(myObj);



/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

decimal2 = myNum.toFixed(2);
// console.log(decimal2);


/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

var i = 7;
console.log(++i); //8
console.log(i++); //8
console.log(--i); //8
console.log(i--); //8
console.log(i); //7



/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */


var myTest = 20; console.log(myTest);

myTest += 2; console.log(myTest);

myTest -= 1; console.log(myTest);

myTest *= 1; console.log(myTest);

myTest /= 1; console.log(myTest);

myTest %= 3; console.log(myTest);


/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

 var myPi = Math.PI;
 console.log(myPi);

 var myRound = Math.round(89.279);
 console.log(myRound);

 var myRandom = Math.random()*10;
 console.log(myRandom);

 var myPow = Math.pow(3,5);
 console.log(myPow);
 

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

var strObj = {str: 'Мама мыла раму, рама мыла маму'}; 
strObj.length = strObj.str.length;
console.log(strObj);




/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

var isRamaPos = strObj.str.indexOf('рама');
console.log(isRamaPos);




/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str.replace('Мама мыла раму, рама мыла маму', 'Мама моет раму, Рама держит маму')
console.log(strReplace);


/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */

 var string = 'What is difficult in training will become easy in a battle';
 console.log(string.toUpperCase());
 console.log(string.toLowerCase());
 
 
