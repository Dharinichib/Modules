var str = "this is string";
var rev = "";

for(var l = str.length - 1; l>=0; l--){
    rev = rev + str[l];
}
console.log(rev);