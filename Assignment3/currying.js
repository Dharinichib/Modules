function mul(num1){
    return function(num2)
    {
        if(num2){
            return mul(num1 * num2);
        }
        return num1;
    }
}

console.log(mul(10)(20)());