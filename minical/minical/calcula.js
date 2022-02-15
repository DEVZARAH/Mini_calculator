var a='';
var b='';
let num =[];
ans;

function sendNum(digits){
    num.push(digits);
    if(num.length != 1){
        a='';
        document.getElementById('screen').innerHTML=a;
    }
    for(i=0;i<num.length;i++){
        a =a+num[i];
    }
    document.getElementById('screen').innerHTML=a;
}
function equalTo(){
    document.getElementById('screen').innerHTML='';
    for(i=0;i<num.length;i++){
        b+=num[i];
    }
    ans=eval(b);
    document.getElementById('screen').innerHTML=ans;

    num =[];
    b='';
    a='';
}
function clearScr(){
    document.getElementById('screen').innerHTML='0';

    while(num.length > 0){
        num.pop();
    }
    a='';
    b='';
}

18350
