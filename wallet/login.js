//Object used to acess the logged area

const dwLogin = {
lUser : null, //access html input
lPass : null, //access html input
lSub : null, //access html input button
newAcc : null, //access html

//access the DOM elements and add event handlers
init : () => {	
	dwLogin.lUser = document.querySelector('#username');
	dwLogin.lPass = document.querySelector('#password');
	dwLogin.lSub = document.querySelector('#submitBtn');
	dwLogin.lSub.addEventListener('click', dwLogin.valid);
	dwLogin.newAcc = document.querySelector('#newAcc');
	dwLogin.newAcc.addEventListener('click', dwLogin.newUser);
},

//login validation
valid : () => {
	//set the default username and password
	ls = localStorage.setItem('thef', 'thef');
	
	//validation to check if the username and password does match
	if (localStorage.getItem(dwLogin.lUser.value) == dwLogin.lPass.value) {
		if (localStorage.getItem(dwLogin.lUser.value) == "thef")
			{open('./thef/');
	}else{
		open('404');
	}
	} else if (dwLogin.lUser.value == "" || dwLogin.lPass.value == "") {
		alert('user/password cannot be empty');
	} else if (localStorage.getItem(dwLogin.lUser.value) != dwLogin.lPass.value) {
		alert('user or password is incorrect');
	} else {
		alert('Error. refresh the page and try again.');
	};
},

//hide the login screen and display the new user creation screen
newUser : () => {
	wrapper = document.querySelector('#wrapper');
	pswDiv = document.querySelector('#pswDiv');
	wrapper.style.display = 'none';
	pswDiv.style.display = 'flex';
	newUsername = document.querySelector('#newUsername');
	newUsername.focus();
},

};

//Object used to create a new user

const nUser = {
lUser : null,
lPsw : null,
lSub : null,
message : null,

//access the DOM elements and add event handlers
init : () => {
	nUser.lUser = document.querySelector('#newUsername');
	nUser.lPsw = document.querySelector('#newPassword');
	nUser.lSub = document.querySelector('#sbmtPsw');
	nUser.message = document.querySelector("#message");
	nUser.lSub.addEventListener('click', nUser.valid);
	nUser.spellCheck();
},

//stores the new username and password, if match the requisits
valid : () => {
	if (nUser.lUser.value != "" && nUser.lPsw.value != "" && nUser.lPsw.value.length >= 6) {
		st = localStorage.setItem(nUser.lUser.value, nUser.lPsw.value);
	}
},

//used to access html tags
spellCheck : () => {
	msg = document.querySelector('#newPassword');
	letter = document.querySelector('#letter');
	capital = document.querySelector('#capital');
	number = document.querySelector('#number');
	length = document.querySelector('#length');
	msg.addEventListener('keyup', checkPassword);

//show tips when start type on the password field
function checkPassword() {
	// Validate lowercase letters
	lowerCaseLetters = /[a-z]/g;
	if(msg.value.match(lowerCaseLetters)) {  
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	};

	// Validate capital letters
	upperCaseLetters = /[A-Z]/g;
	if(msg.value.match(upperCaseLetters)) {  
		capital.classList.remove("invalid");
		capital.classList.add("valid");
	} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	};

	// Validate numbers
	numbers = /[0-9]/g;
	if(msg.value.match(numbers)) {  
		number.classList.remove("invalid");
		number.classList.add("valid");
	} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

	// Validate length
	if(msg.value.length >= 6) {
		length.classList.remove("invalid");
		length.classList.add("valid");
	} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
	}
};

},

//nUser end
}
window.addEventListener('load', dwLogin.init);
window.addEventListener('load', nUser.init);

/* USED TO SHOW THE LOGIN SCREEN
*sbmtPsw = document.querySelector('#sbmtPsw');
*sbmtPsw.addEventListener('click', dwLogin.displayLogin);
*
*displayLogin : () => {
*	wrapper = document.querySelector('#wrapper');
*	pswDiv = document.querySelector('#pswDiv');
*	wrapper.style.display = 'flex';
*	pswDiv.style.display = 'none';
*},
*/