function sum(n1){
    return function(n2, n3)
    {
        return n1 + n2 + n3;
    }
}
let x = sum(10)(20, 30);
console.log(x);