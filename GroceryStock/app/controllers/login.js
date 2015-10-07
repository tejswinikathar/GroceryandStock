/*
 *
 *login  controller use for get user Authenticationtoken and oasis sysID
 * @author - sriniavs
 */

var args = arguments[0] || {};
var viewUtils = require("/utils/viewUtils");
var responseUtils = require('/utils/responseUtils');
var jsonUtils = require('/utils/jsonUtils');
//var CryptoJS = require('/utils/aes');//remember me functionality

init();

function init() {
	// Added Navigation event for Login screen
	log.trace("[login.js] >> init()");
	//remember me functionality

}

var login_JSON = {
	"appName" : "Baseline", // App Name can come from the configuration file
	"version" : Ti.App.version, // version number can come from the configuration file
	"textField" : {
		"emailTextField" : {
			"hintText" : "Username"// hintText for Email textField
		},
		"passwordTextField" : {
			"hintText" : "Password" // hintText for Password textField
		}
	},
	"buttonLogin" : {
		"title" : "Login", // title for Login Button
		"callbackFunction" : login // callback function for Login Button's click event
	},
	"StaySignedIn" : {
		"title" : "", // title for Stay Signed In label
		"callbackFunction" : "" // callback function for Stay Signed In Switch's change event
	},
	"ForgotPassword" : {
		"title" : "", // title for Forgot Password's label
		"callbackFunction" : login // callback function for forgot password's click event
	}
};
$.widgetLogin.init(login_JSON);

function login() {
	log.trace("[btnLogin][login] >> btnLogin click");

	//Added analytics event for logout Action
	analyticsUtils.logActEvent("login");

	var loginValues = $.widgetLogin.getValues();
	$.widgetLogin.hideKeyboard();
core.Navigator.openView("GroceryList");
	if (loginValues != null && (loginValues[0].trim() !== "" || loginValues[1].trim() !== "")) {

/*		if(getUserName.indexOf(' ') >= 0){
			var dialog = Ti.UI.createAlertDialog({
								ok : "ok",
								buttonNames : ['OK'],
								title : "Invalid email",
								message : "Please enter a valid email address"
							});
				dialog.show();
				return;
		}
		if (FetchUserName[1]!=undefined) {
			if(FetchUserName[1]!="vmware.com" || FetchUserName.length>2){
				var dialog = Ti.UI.createAlertDialog({
								ok : "ok",
								buttonNames : ['OK'],
								title : "Invalid email",
								message : "Please enter a valid email address"
							});
				dialog.show();
				return;
			}	
		}
	*/	

		var creds = {
			uName : loginValues[0].trim(),
			pass : loginValues[1].trim()
		};
		
		core.Navigator.indexController.initializeNavigationDrawer();
		
		//core.Navigator.indexController.showHideSlider();
		
		// setTimeout(function(){
			// core.Navigator.indexController.showHideSlider();
		// },2000);
	} else {

		// Added Navigation event for login failure screen
		analyticsUtils.logNavEvent("login.failure");

		var dialog = Ti.UI.createAlertDialog({
			ok : "ok",
			buttonNames : ['OK'],
			title : Constants.RESP_Codes.UNAUTHORISED_USER_TITLE,
			message : Constants.RESP_Codes.UNAUTHORISED_USER_MSG
		});
		dialog.show();
		
	}
}

/*
* Login module ends
*/

exports.androidBackButtonPressed = function(params) {
	log.trace("[login.js] >> androidBackButtonPressed()");
	core.Navigator.mainWin.close();
};

exports.callbackFunctionOnBackButtonPressedFromSuccessingController = function(params) {
	log.trace("login.js] >> callbackFunctionOnBackButtonPressedFromSuccessingController()" + params);
	
};
