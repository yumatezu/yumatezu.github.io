function passWord() {
	var pass1 = prompt('Please Enter Your Password',' ');
	if (!pass1) {
		window.location.href = ('bad.html');
	}
	else if (pass1.toLowerCase() == "yep") {
		window.location.href = ('webpage.html');
		return;
	} 
	else {
		var pass2 = prompt('Password Incorrect','Password');
		if (!pass2) {
			window.location.href = ('bad.html');
		}
		else if (pass2.toLowerCase() == "yep") {
			window.location.href = ('webpage.html');
			return;
		} 
		else {
			var pass3 = prompt('Incorrect, last try','Password');
			if (!pass3) {
				window.location.href = ('bad.html');
			}
			else if (pass3.toLowerCase() == "yep") {
				window.location.href = ('webpage.html');
				return;
			} 
			else {
				window.location.href = ('bad.html');
			}
		}
	}
}
window.onload = passWord()
