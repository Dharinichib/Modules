let array = [1,2,3,4,5,6,7,8,9];
n = array.length;

function sum_array(array, n) {
  let sum = 0;
    for (let i = 0; i < n; i++) {
        sum = sum + array[i];
    }
    return sum;
}
function sum_array_even(array, n){
  let sum =0;
    for (let i = 0; i < n; i++) {
        if(array[i]%2==0){
        sum = sum + array[i];
        }
    }
    return sum;
}
function sum_array_odd(array, n){
 let sum =0;
    for (let i = 0; i < n; i++) {
        if(array[i]%2 != 0){
        sum = sum + array[i];
        }
    }
    return sum;
}




console.log("SUM OF ELEMENT OF ARRAY: ",sum_array(array,n));
console.log("SUM OF EVEN ELEMENT OF ARRRAY: ",sum_array_even(array,n));
console.log("SUM OF ODD ELEMENT OF ARRAY: ",sum_array_odd(array,n));