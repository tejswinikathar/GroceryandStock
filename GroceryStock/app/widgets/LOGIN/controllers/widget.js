/**
 *  @file : LOGIN widget.
 *  @description: This file initiates LOGIN widget and provides definition for LOGIN's API methods.
 *  @author : Prafulla Bansode
 */

$.swiStaySignedIn.transform = Titanium.UI.create2DMatrix().scale('0.8', '0.8');

var JSONElements = ["appName", "version", "textField", "buttonLogin", "StaySignedIn", "ForgotPassword"];
var loginJSON;
// making JSON global using this loginJSON

// Receiving data in the form of JSON from controller and assigning it to the controls in the widget
exports.init = function(login_JSON) {
	Ti.API.info("[LoginWidget] >> [init]");

	if (!_.has(login_JSON, "appName"))
		login_JSON.appName = "";

	if (!_.has(login_JSON, "version"))
		login_JSON.version = "";

	if (!_.has(login_JSON, "textField")) {
		login_JSON.textField = {
			"emailTextField" : {
				"hintText" : ""
			},
			"passwordTextField" : {
				"hintText" : ""
			}
		};
	}

	if (!_.has(login_JSON, "buttonLogin")) {
		login_JSON.buttonLogin = {
			"title" : "",
			"callbackFunction" : ""
		};
	}

	if (!_.has(login_JSON, "StaySignedIn")) {
		login_JSON.StaySignedIn = {
			"title" : "",
			"callbackFunction" : ""
		};
	}

	if (!_.has(login_JSON, "ForgotPassword")) {
		login_JSON.ForgotPassword = {
			"title" : "",
			"callbackFunction" : ""
		};
	}

	loginJSON = login_JSON;

	Ti.API.trace("[LoginWidget] >> [init] >> [login_JSON] : " + JSON.stringify(login_JSON));

	// assigning Appname + version on label
	$.lblVersion.text = login_JSON.appName + " " + login_JSON.version;

	$.txtUsername.hintText = login_JSON.textField.emailTextField.hintText;
	$.txtPassword.hintText = login_JSON.textField.passwordTextField.hintText;

	// emailTextField events starts
	// assigning return event which shifts the focus to password textfield when return key pressed

	$.txtUsername.addEventListener('return', function() {
		Ti.API.trace("[LoginWidget] >> [emailTextField] >> return event");
		$.txtPassword.focus();
	});

	// scrolling the scrollview with txtUsername's focus event
	if (Ti.Platform.name == 'iPhone OS') {
		$.txtUsername.addEventListener('focus', function() {
			Ti.API.trace("[LoginWidget] >> [emailTextField] >> focus event");
			$.scrollView.scrollTo(0, $.imgTopRightStrip.toImage().height);
		});
	}

	// delete image visibled true with change event in email's textfield
	$.txtUsername.addEventListener('change', function() {
		Ti.API.trace("[LoginWidget] >> [emailTextField] >> change event");
		if ($.txtUsername.value == "")
			$.imgDeleteEmail.visible = false;
		else
			$.imgDeleteEmail.visible = true;
	});

	// delete image visibled false with blur event in email's textfield
	$.txtUsername.addEventListener('blur', function() {
		Ti.API.trace("[LoginWidget] >> [emailTextField] >> blur event");
		if ($.txtUsername.value == "")
			$.imgDeleteEmail.visible = false;
		else
			$.imgDeleteEmail.visible = true;
	});

	// emailTextField events ends

	//passwordTextField events starts
	// assigning return event which fires the click event of login button when return key pressed
	$.txtPassword.addEventListener('return', function() {
		Ti.API.trace("[LoginWidget] >> [passwordTextField] >> return event");

		$.btnLogin.fireEvent('click');
	});
	
	// scrolling the scrollview with txtUsername's focus event
	if (Ti.Platform.name == 'iPhone OS') {
		$.txtPassword.addEventListener('focus', function() {
			Ti.API.trace("[LoginWidget] >> [passwordTextField] >> focus event");
			$.scrollView.scrollTo(0, $.imgTopRightStrip.toImage().height);
		});
	}

	// delete image visibled true with change event in password's textfield
	$.txtPassword.addEventListener('change', function() {
		Ti.API.trace("[LoginWidget] >> [passwordTextField] >> change event");
		if ($.txtPassword.value == "")
			$.imgDeletePassword.visible = false;
		else
			$.imgDeletePassword.visible = true;
	});

	// delete image visibled false with blur event in password's textfield
	$.txtPassword.addEventListener('blur', function() {
		Ti.API.trace("[LoginWidget] >> [passwordTextField] >> blur event");
		if ($.txtPassword.value == "")
			$.imgDeletePassword.visible = false;
		else
			$.imgDeletePassword.visible = true;
	});

	// passwordTextField events ends

	// assiging title to login button
	if (login_JSON.buttonLogin.title != "" && login_JSON.buttonLogin.title != null)
		$.btnLogin.title = login_JSON.buttonLogin.title;
	else
		$.btnLogin.title = "Login";

	// assigning click event to Login button
	if (!_.isUndefined(login_JSON.buttonLogin.callbackFunction) && login_JSON.buttonLogin.callbackFunction)
		$.btnLogin.addEventListener('click', login_JSON.buttonLogin.callbackFunction);

	// Stay Signed in start

	// assigning text to Stay Signed In label
	if (login_JSON.StaySignedIn.title != "" && login_JSON.StaySignedIn.title != null)
		$.lblStaySignedIn.text = login_JSON.StaySignedIn.title;
	else {
		$.swiStaySignedIn.visible = false;
		$.lineUpSSI.backgroundColor = '#FFFFFF';
		$.lineDownSSI.backgroundColor = '#FFFFFF';
	}

	if (!_.isUndefined(login_JSON.StaySignedIn.callbackFunction) && login_JSON.StaySignedIn.callbackFunction)
		$.swiStaySignedIn.addEventListener("change", login_JSON.StaySignedIn.callbackFunction);

	// Stay Signed in end

	// forgot password start
	// assigning text to Forgot Password Label
	if (login_JSON.ForgotPassword.title != "" && login_JSON.ForgotPassword.title != null)
		$.lblForgotPassword.text = login_JSON.ForgotPassword.title;

	if (!_.isUndefined(login_JSON.ForgotPassword.callbackFunction) && login_JSON.ForgotPassword.callbackFunction)
		$.lblForgotPassword.addEventListener('click', login_JSON.ForgotPassword.callbackFunction);

	// forgot password end
};

// hiding the keyboard when clicked outside of the textfield i.e. on scrollview
$.scrollView.addEventListener('click', function() {
	Ti.API.trace("[LoginWidget] >> [scrollView] >> click event");
	$.txtUsername.blur();
	$.txtPassword.blur();
});

exports.hideKeyboard = function(){
	$.scrollView.fireEvent('click');
};

// clearing the textfield according to delete image click
function clearText(e) {
	Ti.API.trace("[LoginWidget] >> [clearText]");
	if (e.source.id == "imgDeleteEmail") {
		$.txtUsername.value = '';
		$.txtUsername.focus();
		$.imgDeleteEmail.visible = false;
	} else if (e.source.id == "imgDeletePassword") {
		$.txtPassword.value = '';
		$.txtPassword.focus();
		$.imgDeletePassword.visible = false;
	}
}

/*
*  API methods
***********************************************************************************/

// accepts textfield's id and returns its value
exports.getValues = function() {
	Ti.API.trace("[LoginWidget] >> [getValues]");
	if ($.txtUsername.value != "" && $.txtPassword.value != "") {
		var arrayValues = [];
		arrayValues.push($.txtUsername.value.trim());
		arrayValues.push($.txtPassword.value.trim());
		return arrayValues;
	}
	return null;
};

// accepts id of the textField and sets the hintText to it
exports.setHintText = function(key, text) {
	Ti.API.trace("[LoginWidget] >> [setHintText]");
	if (key == "emailTextField")
		$.txtUsername.hintText = text;
	else if (key == "passwordTextField")
		$.txtPassword.hintText = text;
};

// returns boolean status of Stay Signed In switch
exports.staySignedInStatus = function() {
	Ti.API.trace("[LoginWidget] >> [staySignedInStatus]");
	return $.swiStaySignedIn.value;
};

// clears the textfields
exports.clear = function() {
	Ti.API.trace("[LoginWidget] >> [clear]");
	$.txtUsername.value = "";
	$.txtPassword.value = "";
};
