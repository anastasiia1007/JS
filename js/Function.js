/*Напишите функцию, которая возвращает нечетные значения массива.
 [1,2,3,4] => [1,3]*/

function chet(arr){
    const a = [1,2,3,4]
        const events = []
         for(let i = 0; i < a.length; i++){
            if (a[i] % 2){
            events.push(a[i])
        }
    }
    return events;
}
console.log("Задание 1: " + chet([1,2,3,4]))

/*Задание 2 Напишите функцию, которая возвращает наименьшее значение массива
 [1,2,3,4] => 1
*/
 

function getMin(arr){
   const min = arr[0];
    for(let i = 1; i <=arr.length -1; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
const result = getMin([1,2,3,4]);
console.log("Задание 2 result: " + result);


/*Задание 3
* 
* Напишите функцию, которая возвращает массив наименьших значение строк двумерного массива
* [
*   [1,2,3,4],
*   [1,2,3,4],
*   [1,2,3,4],
*   [1,2,3,4],
* ] 
* => [1,1,1,1]
Подсказка: вложенные for
*/

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}


function matrixArray(rows,columns){ 
 let arr = new Array();
 for(let i=0; i<rows; i++){
   arr[i] = new Array();

       for(let j=0; j<columns; j++){
         arr[i][j] = getRandomInt(0, 10);
   }
 }
 return arr;
}
function compareNumbers(a,b) {
    return a - b;
}
let myMatrix = matrixArray(7,5); 
myMatrix.forEach(row => row.sort(compareNumbers));
let arr = [];
myMatrix.forEach((element) => {
    console.log(arr.push(element[0]))
})

console.log("Задание 3 result: " + arr);
/*
 * Задание 4
 * 
 * Напишите функцию, которая возвращает 2 наименьших значение массива
 * [4,3,2,1] => [1,2]
 
Подсказка: sort
*/
/*
function getMin2
    let arr = [5, 4, 7, 2, 10, 1],
    res = arr.sort((a,b) => a - b).slice(0, 2);
console.log(arr.join()); 
console.log(res.join());


function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
*/

function getMin2(a = [4,3,2,1]){
    a.sort()
    console.log("Задание 4: " + a[0] +"," +a[1])
}
getMin2()
/*
 * Задание 5
 * 
 * Напишите функцию, которая возвращает количество гласных в строке
 * ( a, e, i, o, u ).
 * 
 * 'Return the number (count) of vowels in the given string.' => 15
 
Подсказка: indexOf/includes или (reduce, indexOf/includes) или (filter, indexOf/includes)
*/
function numOfVowels(string) {
    let count = 0;
    for (let i = 0; i < string.length; i ++) {
        if (string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i'|| string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
            count +=1;
        }
    }
    return count;
}
console.log(numOfVowels('hi hello cat cut'))


  /*
   * Задание 6
   * 
   * Реализовать функцию, на входе которой массив чисел, на выходе массив уникальных значений
   * [1, 2, 2, 4, 5, 5] => [1, 2, 4, 5]
   
Подсказка: reduce, Set
*/
function un(a = [1, 2, 2, 4, 5, 5]){
    let res = []
    for (i in a){
        if (!res.includes(a[i])) {
            res.push(a[i]);
          }
    }
    console.log("Задание 6: " + res)
}

un()

  /*
   * Задание 7
   * 
   * Реализовать функцию, на входе которой массив строк, на выходе массив с длинами этих строк
   *  ['Есть', 'жизнь', 'на', 'Марсе'] => [4, 5, 2, 5]
   
Подсказка: map
*/
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

console.log("Задание 7: " + lengths)// 5,7,6