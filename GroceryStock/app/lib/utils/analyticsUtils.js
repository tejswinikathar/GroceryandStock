//This file will contain the analytics related functions.

/**
 * THis function will log the navigation events.
 * @param {String} arg
 */
exports.logNavEvent = function(arg) {
	// check if arg contains the valid data or not.
	if (_.isEmpty(arg) || _.isUndefined(arg) || _.isNull(arg)) {
		return;
	}
	
	try{
		Titanium.Analytics.featureEvent("NAV:"+ arg.toLowerCase());
		//log.warn("NAV:"+ arg.toLowerCase());
	}catch(e){
		Ti.API.warn("Navigation Analytics failed.");
	}
};

/**
 * This function will log the action events.
 * @param {String} arg
 */
exports.logActEvent = function(arg) {
	// check if arg contains the valid data or not.
	if (_.isEmpty(arg) || _.isUndefined(arg) || _.isNull(arg)) {
		return;
	}
	
	try{
		Titanium.Analytics.featureEvent("ACT:"+ arg.toLowerCase());
		//log.warn("ACT:"+ arg.toLowerCase());
	}catch(e){
		Ti.API.warn("Action Analytics failed.");
	}
};
