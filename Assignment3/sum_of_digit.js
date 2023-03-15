function sum(x){
    if (x == 0){
        return 0;
    }
    
    return (x%10 + sum(parseInt(x/10)))
}
let x = sum(1234);
console.log(x);
