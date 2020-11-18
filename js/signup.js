var priv = document.getElementsByClassName('sign-btn')[0];
var comp = document.getElementsByClassName('sign-btn')[1];

var prForm = document.getElementById('private');
var coForm = document.getElementById('company');

var closeBtn = document.getElementById('close');
var formsHolder = document.getElementById('forms-holder');
var verifyHolder = document.getElementById('verify-holder');

var privForm = document.forms['privForm'];
var name = document.forms['privForm']['uName'];
var mail = document.forms['privForm']['uMail'];
var confBtn = document.forms['privForm']['confBtn'];

var verifyForm = document.forms['verif'];
var confNumForm = document.forms['confNum'];
var telSelect = document.forms['verif']['tel'];
var telInput = document.forms['verif']['phone'];
var verifBtn = document.forms['verif']['confirm'];

function blueChangeP() {
	if (priv.id == '' && comp.id == 'checked') {
		comp.id = '';
		priv.id = 'checked';
		coForm.classList.add('hide');
		prForm.classList.remove('hide');
	}
}

function blueChangeC() {
	if (comp.id == '' && priv.id == 'checked') {
		priv.id = '';
		comp.id = 'checked';
		prForm.classList.add('hide');
		coForm.classList.remove('hide');
	}
}

function closeForm() {
	formsHolder.classList.add('hide');
	verifyHolder.classList.remove('hide');
}

function telConf() {
	verifyForm.classList.add('hide');
	confNumForm.classList.remove('hide');
}

function validateForm(a) {
    if (a.value == '') {
    	a.id = 'red';
    };
    return false;
};



priv.onclick = blueChangeP;
comp.onclick = blueChangeC;
closeBtn.onclick = closeForm;
verifBtn.onclick = telConf;
// confBtn.addEventListener('submit', validateForm(name));
//confBtn.onsubmit = validateForm(name);
// validateForm();
