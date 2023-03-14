//object
/*let mysymbol = Symbol();
let coder = {
    name: 'dharini',
    age: 22,
    partime : false,
    [mysymbol] : 'secretInformation',
    showInfo: function(RealAge)
    {
        showMessage(this.name +" is " + RealAge);
    }
};
coder.age = 33;
//coder.showInfo(21);
showMessage(typeof coder.showInfo);
function incrementAge(coder){
    coder.age++;
}
incrementAge(coder);
showMessage(coder.age);
let mssg = 'hello';
function changemessage(mssg){
    mssg = 'hi';
}
changemessage(mssg);
showMessage(mssg);
let now = new Date();
    showMessage(now.toDateString());
    showMessage(Math.random());
    let s = 'hello';
    showMessage(s.charAt(1));
    const header = document.getElementById('message');
    header.style.color = 'blue';
    header.style.fontWeight = '800';*/
    const button = document.getElementById('see-review');
    button.addEventListener('click', function(){
        const review = document.getElementById('review');
        if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'close review';
    }
        else{
            review.classList.add('d-none');
            button.textContent = 'see review0';
        }
       // console.log('click');
    });
