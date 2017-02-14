function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1) 
window.location.href = ('bad.html');
if (pass1.toLowerCase() == "yep") {
window.location.href = ('webpage.html');
break;
} 
testV+=1;
var pass1 = 
prompt('Password Incorrect','Password');
}
if (pass1.toLowerCase()!="password" & testV ==3) 
window.location.href = ('bad.html');
return " ";
} 
window.onload = passWord()