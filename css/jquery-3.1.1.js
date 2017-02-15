function passWord() {
var testV = 1;
var pass1 = prompt('Please Enter Your Password',' ');
while (testV < 3) {
if (!pass1) 
window.location.href = ('bad.html');
if (pass1.toLowerCase() == "yep") {
  window.location.href = ('webpage.html');
  break;
} else {
  var pass2 = prompt('Password Incorrect','Password');
  if (pass2.toLowerCase() == "yep") {
    window.location.href = ('webpage.html');
    break;
  } else {
    var pass3 = prompt('Incorrect, last try','Password');
    if (pass3.toLowerCase() == "yep") {
      window.location.href = ('webpage.html');
      break;
    } else {
      window.location.href = ('bad.html');
    }
  }
}
window.onload = passWord()
