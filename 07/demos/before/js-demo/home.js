function func(){//function declaration
    console.log("this is function implementation");
}
let fn = function func2(){
    console.log("this is function expression implementation");

}
let fn2 = function(){
    console.log("this is function expression without name");

}
function message(message1, message2, a){
    console.log(message1, message2, a)
}

function add(num1, num2){
    let res = num1 + num2;
    return res;
}
func();
fn();
fn2();
message("hello", "world", 1)
message('hello');
console.log(add(1,2));
let a = 12;
function getcode(value){
    let key = function(){
        let a = 10;
        console.log("in key:", a);
        return a;
    }
    let code = value *key();
    return code;
}
getcode(5);
