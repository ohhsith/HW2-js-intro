console.log('------------- #4')

console.log('------------- #4a')
const a = 1;
const b = 2;
const sum = a + b;
console.log(sum);

console.log('------------- #4b')
const c = 29;
const d = 92;
const dif = c - d;
console.log(dif);

console.log('------------- #4c')
const e = 74;
const f = 189;
const pro = e * f;
console.log(pro);

console.log('------------- #4d')
const g = 999;
const h = 3;
const quo = g / h;
console.log(quo);

console.log('------------- #5')
for (let i=1; i<=5; i++) {
    console.log(i)
}

console.log('------------- #6')
for (let i=5; i>=1; i--) {
    console.log(i)
}

console.log('------------- #7')
function getMarkInfo(condition) {
    if  (condition === 10) {
        console.log("У вас максимальный балл"); 
    } else {
        console.log("У вас средний балл");
    }

}
getMarkInfo(10);
getMarkInfo(1);

console.log('------------- #8')
function getDayInfo(position) {
    switch (position) {
        case 0:  
            console.log('Sunday');
            break;
        case 1:  
            console.log('Monday');
            break;
        case 2:  
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5: 
            console.log('Friday');
            break;
        case 6:  
            console.log('Saturday');
            break;
        default:
            console.log('Wrong-data');
    }
}
getDayInfo(0);
getDayInfo(1);
getDayInfo(2);
getDayInfo(3);
getDayInfo(4);
getDayInfo(5);
getDayInfo(6);
getDayInfo(7);

console.log('------------- #9')
let arr = ['a', 'b', 'c'];
arr.push (1,2,3);
console.log(arr)

console.log('------------- #10')
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = array1.concat(array2);
console.log(array3);

console.log('------------- #11a')

function getSum(limit) { 
    intLimit = parseFloat(limit);
    if ((intLimit > 0) && (intLimit ^ 0) === intLimit) {
        let sumi = 0;
        for (let i=1; i<=intLimit; i++) {
            sumi=sumi+i;
        }
        return sumi
    }
    else {
        return 'число должно быть целым и больше нуля'
    }
}
console.log(getSum(8));

console.log('------------- #11b')
let input = document.getElementById('number');
input.addEventListener('change', showValue);
function showValue(e) {
    console.log(getSum(e.target.value));
}

