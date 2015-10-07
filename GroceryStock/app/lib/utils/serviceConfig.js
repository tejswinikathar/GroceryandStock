var jsonUtils = require('/utils/jsonUtils');

var apiVersion = "/v1";

var endpointURL = {
	//Authentication endpoint URL
	loginAction : '/auth',
	loginActionForLocal : apiVersion + '/mockAuth',
	getAvailableSlots : "/v2" + '/availability',
	scheduleAppointment : apiVersion + "/scheduleAppointment",
	getUserSysId: apiVersion + "/getUserSysId",
	getAppointmentsList: apiVersion + "/myAppointments",
	getLocations: apiVersion + "/locations",
	cancelAppointment: apiVersion + "/appointment",
	modifyAppointment: apiVersion + "/appointment"
};

exports.initServiceConfig = function() {

	/*
	 * NB - Increment this on releases. Always of format a.b.c where
	 * a = major, b = minor, c = point
	 */
	appConfig["version"] = "1.0", appConfig["current"] = "QA";

	//environments Deatails
	appConfig["environments"] = {
		// Development Environment
		//http://s2-dev-mobile-1.vmware.com:3003/services/v1/getUserSysId
		"development" : {
			logLevel : 0,
			
			// Timeout for all the service endpoints
			timeout : 120000,

			//base url for the app   
			//baseUrl : "https://api-dev.vmware.com/dev/token",
			baseUrl : "https://api-dev.vmware.com",

			path_separator : "/",
			auth : {
				// URL Parameters
				"path" : "dev",
				"url" : "token",

				//Body for Auth service
				authBody : "grant_type=client_credentials",

				//Header for Auth service
				authContentType : "application/x-www-form-urlencoded",

				//Authorization header @TODO: hardcoded at the moment will change as per bussiness requirement
				authToken : "cWRxZTY0bmQzOTJ5OWJnYnFqNGZ1ZHNqOnVjOXJCMmNwRW1zcjRNSmNFbmNURUNEWg=="
			},

			mashery : {   
				host : "https:/",
				
				auth : "/auth",
				token : "/token",
				services : "/dev13",
				version : "/v1",
				//Cloud appID
				appId : "api-dev.vmware.com/dev12",
				//Cloud appID
				redirect_URI : "myvmware://",
				//Cloud response_code
				appdata : "",
				//it has all the endpoint URL's
				endpointURL : endpointURL,
				timeout : 120000
			}
		},
		//
		// QA Environment
		//
		"QA" : {   
			logLevel : 0,
			
			// Timeout for all the service endpoints
			timeout : 120000,

			//base url for the app
			baseUrl : "https://api-test.vmware.com",
			//baseUrl : "https://api-dev.vmware.com/dev/token",

			path_separator : "/",
			auth : {
				// URL Parameters
				"path" : "test",
				"url" : "token",

				//Body for Auth service
				authBody : "grant_type=client_credentials",

				//Header for Auth service
				authContentType : "application/x-www-form-urlencoded",

				//Authorization header @TODO: hardcoded at the moment will change as per bussiness requirement
				//authToken : "cWRxZTY0bmQzOTJ5OWJnYnFqNGZ1ZHNqOnVjOXJCMmNwRW1zcjRNSmNFbmNURUNEWg=="
				authToken : "ejI5cTc2anV3amo5N3U1Z3M4cHh3cWZlOk42WFZCcUJlaGo0d1NCNks5dk03cDNzSA=="
			},
			
			mashery : {
				host : "https:/",
				auth : "/auth",
				token : "/token",
				services : "/services",
				version : "/v1",
				//Cloud appID
				appId : "api-test.vmware.com/test12",
				redirect_URI : "myvmware://",
				appdata : "",
				endpointURL : endpointURL,
				timeout : 120000
			}
		},
		
		"production" : {   
			logLevel : 7,
			
			// Timeout for all the service endpoints
			timeout : 120000,

			//base url for the app
			//baseUrl : "https://api-test.vmware.com",
			baseUrl : "https://api.vmware.com",
			//baseUrl : "https://api-dev.vmware.com/dev/token",

			path_separator : "",
			auth : {
				// URL Parameters
				"path" : "",
				"url" : "/token",

				//Body for Auth service
				authBody : "grant_type=client_credentials",

				//Header for Auth service
				authContentType : "application/x-www-form-urlencoded",

				//Authorization header @TODO: hardcoded at the moment will change as per bussiness requirement
				//authToken : "cWRxZTY0bmQzOTJ5OWJnYnFqNGZ1ZHNqOnVjOXJCMmNwRW1zcjRNSmNFbmNURUNEWg=="
				authToken : "aDNjZmphNnNzejltdndqMnJmZHNwMjQyOlJxelpLcU5SREFUM3htRENxQmVOa0VUWA=="
			},
			
			mashery : {
				host : "https:/",
				auth : "/auth",
				token : "/token",
				services : "/services",
				version : "/v1",
				//Cloud appID
				appId : "api.vmware.com",
				redirect_URI : "myvmware://",
				appdata : "",
				endpointURL : endpointURL,
				timeout : 120000
			}
		},
		
		"local" : {
			logLevel : 0,
			
			timeout : 120000,

			//base url for the app
			baseUrl : "https://api-dev.vmware.com",
			//baseUrl : "https://api-dev.vmware.com/dev/token",

			path_separator : "/",
			auth : {
				// URL Parameters
				"path" : "dev",
				"url" : "token",

				//Body for Auth service
				authBody : "grant_type=client_credentials",

				//Header for Auth service
				authContentType : "application/x-www-form-urlencoded",

				//Authorization header @TODO: hardcoded at the moment will change as per bussiness requirement
				authToken : "cWRxZTY0bmQzOTJ5OWJnYnFqNGZ1ZHNqOnVjOXJCMmNwRW1zcjRNSmNFbmNURUNEWg=="
				 
			},
			
			mashery : {
				host : "http:/",
				auth : "/auth",
				token : "/token",
				services : "/services",
				version : "/v1",
				appId : "192.168.2.93:3003",
				redirect_URI : "myvmware://",
				code : "code",
				appdata : "",
				endpointURL : endpointURL,
				timeout : 120000
			}

		},
/*		"auto" : {
			logLevel : Alloy.CFG.logLevel, //7
			
			// Timeout for all the service endpoints
			timeout : Alloy.CFG.timeout, //120000

			//base url for the app   
			//baseUrl : "https://api-dev.vmware.com/dev/token",
			baseUrl : Alloy.CFG.baseUrl, //"https://api-dev.vmware.com"

			path_separator : Alloy.CFG.path_separator, //"/"
			auth : {
				// URL Parameters
				"path" : Alloy.CFG.auth.path, //"dev"
				"url" : Alloy.CFG.auth.url, //"token"

				//Body for Auth service
				authBody : Alloy.CFG.auth.authBody, //"grant_type=client_credentials"

				//Header for Auth service
				authContentType : Alloy.CFG.auth.authContentType, //"application/x-www-form-urlencoded"

				//Authorization header @TODO: hardcoded at the moment will change as per bussiness requirement
				authToken : Alloy.CFG.auth.authToken //"cWRxZTY0bmQzOTJ5OWJnYnFqNGZ1ZHNqOnVjOXJCMmNwRW1zcjRNSmNFbmNURUNEWg=="
			},
			
			mashery : {   
				host : Alloy.CFG.mashery.host, //"http:/"
				
				auth : Alloy.CFG.mashery.auth, //"/auth"
				token : Alloy.CFG.mashery.token, //"/token"
				services : Alloy.CFG.mashery.services, //"/dev13"
				version : Alloy.CFG.mashery.version, //"/v1"
				//Cloud appID
				appId : Alloy.CFG.mashery.appId, //"s2-dev-mobile-1.vmware.com:3003/services"
				//Cloud appID
				redirect_URI : Alloy.CFG.mashery.redirect_URI, //"myvmware://"
				//Cloud response_code
				appdata : Alloy.CFG.mashery.appdata, //""
				//it has all the endpoint URL's
				endpointURL : endpointURL,
				timeout : Alloy.CFG.mashery.timeout //120000
			}
		}*/

	};
	
};


