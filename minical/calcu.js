// function c(val){
//     document.getElementsById('result').value=val;
// }
// function v(val){
//     document.getElementById('result').value+=val;
// }
// function e(){
//     try{
//         c(eval(document.getElementById('result').value));
//     }
//     catch (e){
//         c('Error')
//     }

// }
// Create empty varibales named a,b;
// Create an empty set of array and varible named ans

var a = '';
var b = '';
var num = [];
var ans;
// All the numbers and operators will be stored in the empty array using function sendNum()
function sendNum(digits) {
    num.push(digits);
    if (num.length != 1) {
        a = '';
        document.getElementById('screen').innerHTML = a;
    }
    for (i = 0; i < num.length; i++) {
        a = a + num[i];
   
    }
    document.getElementById('screen').innerHTML = a;
}

function equalTo() {
    document.getElementById('screen').innerHTML = '';
    for (i = 0; i < num.length; i++) {
        b +=num[i];
    }
    ans = eval(b);
    document.getElementById('screen').innerHTML = ans;		

	num.push(ans.toString());
}
function clearScr(){
	document.getElementById('screen').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();	
	}

	a ='';	
	b ='';
}










