function sum(num1){
    return function sum1(num2)
    {
        return num1 + num2;
    }
}
let a = sum(10);
console.log(a(20));