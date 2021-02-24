var arr = [45,67,87,23,5,32,60];

//Your code here.
let arrInv = [];
let arrlength = arr.length - 1;
for (let i = arrlength; i >= 0; i--) {
    arrInv[arrlength-i] = arr[i];    
}
//console.log(arr.reverse());
console.log(arrInv);