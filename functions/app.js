function printHeart() {
    console.log("<3");
}
printHeart()





function rant(message) {
    console.log(message.toUpperCase());

}
rant("hi there bees");





function show(x) {
    console.log(x.toLowerCase());
}
show("JJHFSJH");





function isSnakeEyes(arg1, arg2) {
    if (arg1 === 1 && arg2 === 1) {
        console.log("Snake Eyes!")
    }
    else {
        console.log("Not Snake Eyes!")
    }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
isSnakeEyes(4, 5);





function multiply(x, y) {
    let result = x * y;
    return result;
}
let result1 = multiply(2, 3);
let result2 = multiply(9, 9);
let result3 = multiply(5, 4);
console.log(result1);
console.log(result2);
console.log(result3);


function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isShortsWeather(80));
let a = isShortsWeather(48);
console.log(a);
console.log(isShortsWeather(75));




function lastElement(array) {
    let a = array.length;
    if (a !== 0) {
        return array[a - 1];
    }
    else {
        return null;
    }
}
console.log(lastElement([3, 5, 7])); //7
console.log(lastElement([1])); //1
console.log(lastElement([])); //null





function capitalize(string) {
    let firstWord = (string.slice(0, 1)).toUpperCase();
    let remainingWord = string.slice(1, string.length)
    let result = firstWord + remainingWord;
    return result;
}
let result = capitalize("eggplant");
let word2 = capitalize("eamplemousse");
let word3 = capitalize("squid");
console.log(result);
console.log(word2);
console.log(word3);





function sumArray(array) {
    let sum = 0;
    for (let a of array) {
        sum = sum + a;
    }
    return sum;
}
let sum1 = sumArray([1, 2, 3]) // 6
let sum2 = sumArray([2, 2, 2, 2]) // 8
let sum3 = sumArray([10, 10, 10]) // 101
console.log(sum1);
console.log(sum2);
console.log(sum3);






function returnDay(value) {
    let object = {
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
        7: "Sunday"
    }
    if (value in object) {
        return object[value];
    }
    else {
        return null;
    }
}
let weekday1 = returnDay(1);
let weekday2 = returnDay(7);
let weekday3 = returnDay(4);
let weekday4 = returnDay(0);
console.log(weekday1);
console.log(weekday2);
console.log(weekday3);
console.log(weekday4);




const square = function (num) {
    return num * num;
}
let squareOfNum1 = square(4);
let squareOfNum2 = square(3);
console.log(squareOfNum1);
console.log(squareOfNum2);




