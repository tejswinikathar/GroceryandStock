// Dependencies


var jsonUtils = require('/utils/jsonUtils');

/*
 * NodeJS Module for a logger.
 *
 * @author Bhushan
 */
var Logger = function() {

	// Public Functions
	this.trace = trace;
	this.debug = debug;
	this.info = info;
	this.warn = warn;
	this.error = error;
	this.logLevels = ["trace", "debug", "info", "warn", "error"];
	this.logLevelStatus = {
		TRACE : 0,
		DEBUG : 1,
		INFO : 2,
		WARN : 3,
		ERROR : 4,
		OFF : 5
	};
	//
	// Methods for Logging.
	//
	function trace(message,jsonStructure) {
		if (validate(this.logLevelStatus.TRACE, message)) {
			log(this.logLevels[this.logLevelStatus.TRACE], message, jsonStructure);
		}
	}

	function debug(message,jsonStructure) {
		if (validate(this.logLevelStatus.DEBUG, message)) {
			log(this.logLevels[this.logLevelStatus.DEBUG], message, jsonStructure);
		}
	}

	function info(message,jsonStructure) {
		if (validate(this.logLevelStatus.INFO, message)) {
			log(this.logLevels[this.logLevelStatus.INFO], message, jsonStructure);
		}
	}

	function warn(message,jsonStructure) {
		if (validate(this.logLevelStatus.WARN, message)) {
			log(this.logLevels[this.logLevelStatus.WARN], message, jsonStructure);
		}
	}

	function error(message,jsonStructure) {
		if (validate(this.logLevelStatus.ERROR, message)) {
			log(this.logLevels[this.logLevelStatus.ERROR], message, jsonStructure);
		}
	}

	function log(level, message,jsonStructure) {
		// Level not specified or not a supported log level.
		if (level == null) {
			Ti.API.error("Bad log level: " + level + " for message: " + message);
			return;
		}

		var now = new Date();
		var datePrefix = now.toJSON();
		
		if(_.isUndefined(jsonStructure)){
			Ti.API.log(level, datePrefix + ":" + message);
		}else{
			Ti.API.log(level, datePrefix + ":" + message + " Json : " + jsonStructure);	
		}

		

	}

	/**
	 * Validate if we are ok to log this message?
	 */
	function validate(level, message) {
    
		// Have message? Silently skip.
		if (message == null) {
			return false;
		}
		
		var configLogLevel = jsonUtils.getPath(appConfig.environments[appConfig.current], "logLevel");
		
		if (configLogLevel == 0) {
		    
			return true;
		};
		
		if (configLogLevel != level) {
		    
			return false;
		};

		return true;
	}

};
// End Logger

// Export Module
module.exports = new Logger();
