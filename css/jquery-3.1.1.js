function passWord() {
	var pass1 = prompt('Please Enter Your Password','');
	if (!pass1) {
		window.location.href = ('bad');
	}
	else if (pass1.toLowerCase() == "yep") {
		window.location.href = ('home');
		return;
	} 
	else {
		var pass2 = prompt('Password Incorrect','');
		if (!pass2) {
			window.location.href = ('bad');
		}
		else if (pass2.toLowerCase() == "yep") {
			window.location.href = ('webpage');
			return;
		} 
		else {
			var pass3 = prompt('Incorrect, last try','');
			if (!pass3) {
				window.location.href = ('bad');
			}
			else if (pass3.toLowerCase() == "yep") {
				window.location.href = ('webpage');
				return;
			} 
			else {
				window.location.href = ('bad');
			}
		}
	}
}
window.onload = passWord()
