/**
 *  Utility Name : serviceUtils.js
 *  Provide endpoint which make rest service call as per provided input names
 *  Author : @Aditya
 */

var refreshUtil = require('/utils/masheryTokenRefreshUtil');

var jsonUtils = require('/utils/jsonUtils');
var responseUtils = require('/utils/responseUtils');

var serviceUtils = function() {

	this.makeRequest = makeRequest;
	this.makeGetRequest = makeGetRequest;
	this.makePutRequest = makePutRequest;
	this.makeDeleteRequest = makeDeleteRequest;

	function makeRequest(requestParams, requestName, cbSuccessFromServiceUtil, cbFailureFromServiceUtil) {
		log.trace("[serviceUtil] [" + requestName + "] >> makeRequest");
		//log.debug("[serviceUtil] [" + requestName + "] >> makeRequest", JSON.stringify(requestParams));

		var currentEnv = appConfig.current;
		var path;
		var mashery = appConfig.environments[appConfig.current].mashery;
		
		if (currentEnv === "local") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + services + requestName;
		} else if (currentEnv === "development") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
		} else {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
			//path = host + "/" + appId + requestName ;
		}

		var tokenId = Ti.App.Properties.getString("expiryTime");

		refreshUtil.checkTokenExpire(tokenId, function utilSuccessCb(utilResponse) {
			var client = Ti.Network.createHTTPClient({
				// function called when the response data is available

				onload : function(e) {
					log.trace("[serviceUtil] [" + requestName + "]>> Success");

					Global.serviceFlags.servicesInProgress[requestName] = null;

					//check valid json or not
					if (!jsonUtils.isJson(this.responseText)) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);

					}
					//Parse success response
					var respJson = JSON.parse(this.responseText);
					
					var code = jsonUtils.getPath(respJson, "error.status");
					
					if(code)
					{
						return cbFailureFromServiceUtil(respJson);
					}
					
					//Printing success response for debugging purpose
					log.debug("[serviceUtil] [" + requestName + "]>> Success", JSON.stringify(respJson));

					//Validate null response
					if (respJson == null) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}

					return cbSuccessFromServiceUtil(respJson);
				},

				// function called when an error occurs, including a timeout
				onerror : function(e) {
					log.error("[serviceUtil] [" + requestName + "]>> Onerror : -->  eror Message -->" + JSON.stringify(e));

					// Parsing Response if its unformatted
					var response;
					if (jsonUtils.isJson(this.responseText)) {
						response = JSON.parse(this.responseText);
						var res = responseUtils.constructErrorResponseJson(response.code, response.error);
						return cbFailureFromServiceUtil(res.payload);
					} else {
						response = this.responseText;
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}
				},
				timeout : jsonUtils.getPath(mashery, "timeout") // in milliseconds
			});

			log.trace("[ServiceUtils] >>>> path for POST >> ]" + path);
			client.open("POST", path);
			client.setRequestHeader("Content-type", "application/json");
			//client.setRequestHeader("Accept", "application/json");
			client.setRequestHeader("Authorization", "Bearer " + tokenAccessCode);
			
			client.send(JSON.stringify(requestParams));

		}, function utiFailureCb(res) {
			log.trace("[ServiceUtils] >>>> >>> - [Failure]");

			return failureCb(res);
		});

	}

	function makeGetRequest(requestURL, cbSuccessFromServiceUtil, cbFailureFromServiceUtil) {
		log.trace("[serviceUtil] [" + requestURL + "] >> makeGetRequest");
		//log.debug("[serviceUtil] [" + requestName + "] >> makeGetRequest", JSON.stringify(requestParams));
		var currentEnv = appConfig.current;
		var path;
		var mashery = appConfig.environments[appConfig.current].mashery;

		if (currentEnv === "local") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + services + requestURL;
		} else if (currentEnv === "development") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestURL;
		} else {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestURL;
			//path = host + "/" + appId + requestName ;
		}

		var tokenId = Ti.App.Properties.getString("expiryTime");

		refreshUtil.checkTokenExpire(tokenId, function utilSuccessCb(utilResponse) {
			var client = Ti.Network.createHTTPClient({
				// function called when the response data is available

				onload : function(e) {
					log.trace("[serviceUtil] [" + requestURL + "]>> Success");

					Global.serviceFlags.servicesInProgress[requestURL] = null;

					//check valid json or not
					if (!jsonUtils.isJson(this.responseText)) {
						Ti.API.warn("[serviceUtil] [" + requestURL + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);

					}
					//Parse success response
					var respJson = JSON.parse(this.responseText);
					
					var code = jsonUtils.getPath(respJson, "error.status");
					
					if(code)
					{
						return cbFailureFromServiceUtil(respJson);
					}
					
					//Printing success response for debugging purpose
					log.debug("[serviceUtil] [" + requestURL + "]>> Success", JSON.stringify(respJson));

					//Validate null response
					if (respJson == null) {
						Ti.API.warn("[serviceUtil] [" + requestURL + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}

					return cbSuccessFromServiceUtil(respJson);
				},

				// function called when an error occurs, including a timeout
				onerror : function(e) {
					log.error("[serviceUtil] [" + requestURL + "]>> Onerror : -->  eror Message -->" + JSON.stringify(e));

					// Parsing Response if its unformatted
					var response;
					if (jsonUtils.isJson(this.responseText)) {
						response = JSON.parse(this.responseText);
						var res = responseUtils.constructErrorResponseJson(response.code, response.error);
						return cbFailureFromServiceUtil(res.payload);
					} else {
						response = this.responseText;
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}
				},
				timeout : jsonUtils.getPath(mashery, "timeout") // in milliseconds
			});

			log.trace("[ServiceUtils] >>>> path for GET >> ]" + path);
			client.open("GET", path);
			client.setRequestHeader("Content-type", "application/json");
			//client.setRequestHeader("Accept", "application/json");
			client.setRequestHeader("Authorization", "Bearer " + tokenAccessCode);
			
			client.send();

		}, function utiFailureCb(res) {
			log.trace("[ServiceUtils] >>>> >>> - [Failure]");

			return failureCb(res);
		});

	}

	function makeDeleteRequest(requestParams, requestName, cbSuccessFromServiceUtil, cbFailureFromServiceUtil) {
		log.trace("[serviceUtil] [" + requestName + "] >> makeDeleteRequest");
		log.debug("[serviceUtil] [" + requestName + "] >> makeDeleteRequest", JSON.stringify(requestParams));
		
		var currentEnv = appConfig.current;
		var path;
		var mashery = appConfig.environments[appConfig.current].mashery;
		
		if (currentEnv === "local") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + services + requestName;
		} else if (currentEnv === "development") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
		} else {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
		}

		var tokenId = Ti.App.Properties.getString("expiryTime");

		refreshUtil.checkTokenExpire(tokenId, function utilSuccessCb(utilResponse) {
			var client = Ti.Network.createHTTPClient({
				// function called when the response data is available

				onload : function(e) {
					log.trace("[serviceUtil] [" + requestName + "]>> Success");

					Global.serviceFlags.servicesInProgress[requestName] = null;

					//check valid json or not
					if (!jsonUtils.isJson(this.responseText)) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);

					}
					//Parse success response
					var respJson = JSON.parse(this.responseText);
					
					var code = jsonUtils.getPath(respJson, "error.status");
					
					if(code)
					{
						return cbFailureFromServiceUtil(respJson);
					}
					
					//Printing success response for debugging purpose
					log.debug("[serviceUtil] [" + requestName + "]>> Success", JSON.stringify(respJson));

					//Validate null response
					if (respJson == null) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}

					return cbSuccessFromServiceUtil(respJson);
				},

				// function called when an error occurs, including a timeout
				onerror : function(e) {
					log.error("[serviceUtil] [" + requestName + "]>> Onerror : -->  eror Message -->" + JSON.stringify(e));

					// Parsing Response if its unformatted
					var response;
					if (jsonUtils.isJson(this.responseText)) {
						response = JSON.parse(this.responseText);
						var res = responseUtils.constructErrorResponseJson(response.code, response.error);
						return cbFailureFromServiceUtil(res.payload);
					} else {
						response = this.responseText;
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}
				},
				timeout : jsonUtils.getPath(mashery, "timeout") // in milliseconds
			});

			log.trace("[ServiceUtils] >>>> path for DELETE >> ]" + path);
			client.open("DELETE", path);
			client.setRequestHeader("Content-type", "application/json");
			//client.setRequestHeader("Accept", "application/json");
			client.setRequestHeader("Authorization", "Bearer " + tokenAccessCode);
			
			client.send(JSON.stringify(requestParams));

		}, function utiFailureCb(res) {
			log.trace("[ServiceUtils] >>>> >>> - [Failure]");

			return failureCb(res);
		});

	}

	function makePutRequest(requestParams, requestName, cbSuccessFromServiceUtil, cbFailureFromServiceUtil) {
		log.trace("[serviceUtil] [" + requestName + "] >> makePutRequest");
		log.debug("[serviceUtil] [" + requestName + "] >> makePutRequest", JSON.stringify(requestParams));
		
		var currentEnv = appConfig.current;
		var path;
		var mashery = appConfig.environments[appConfig.current].mashery;
		
		if (currentEnv === "local") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + services + requestName;
		} else if (currentEnv === "development") {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
		} else {
			var host = jsonUtils.getPath(mashery, "host");
			var appId = jsonUtils.getPath(mashery, "appId");
			var services = jsonUtils.getPath(mashery, "services");
			var version = jsonUtils.getPath(mashery, "version");
			path = host + "/" + appId + requestName;
		}

		var tokenId = Ti.App.Properties.getString("expiryTime");

		refreshUtil.checkTokenExpire(tokenId, function utilSuccessCb(utilResponse) {
			var client = Ti.Network.createHTTPClient({
				// function called when the response data is available

				onload : function(e) {
					log.trace("[serviceUtil] [" + requestName + "]>> Success");

					Global.serviceFlags.servicesInProgress[requestName] = null;

					//check valid json or not
					if (!jsonUtils.isJson(this.responseText)) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);

					}
					//Parse success response
					var respJson = JSON.parse(this.responseText);
					
					var code = jsonUtils.getPath(respJson, "error.status");
					
					if(code)
					{
						return cbFailureFromServiceUtil(respJson);
					}
					
					//Printing success response for debugging purpose
					log.debug("[serviceUtil] [" + requestName + "]>> Success", JSON.stringify(respJson));

					//Validate null response
					if (respJson == null) {
						Ti.API.warn("[serviceUtil] [" + requestName + "] OnLoad >> SUCCESS CALLBACK responseText is Missing");

						//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}

					return cbSuccessFromServiceUtil(respJson);
				},

				// function called when an error occurs, including a timeout
				onerror : function(e) {
					log.error("[serviceUtil] [" + requestName + "]>> Onerror : -->  eror Message -->" + JSON.stringify(e));

					// Parsing Response if its unformatted
					var response;
					if (jsonUtils.isJson(this.responseText)) {
						response = JSON.parse(this.responseText);
						var res = responseUtils.constructErrorResponseJson(response.code, response.error);
						return cbFailureFromServiceUtil(res.payload);
					} else {
						response = this.responseText;
						var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
						return cbFailureFromServiceUtil(res.payload);
					}
				},
				timeout : jsonUtils.getPath(mashery, "timeout") // in milliseconds
			});

			log.trace("[ServiceUtils] >>>> path for PUT >> ]" + path);
			client.open("PUT", path);
			client.setRequestHeader("Content-type", "application/json");
			//client.setRequestHeader("Accept", "application/json");
			client.setRequestHeader("Authorization", "Bearer " + tokenAccessCode);
			
			client.send(JSON.stringify(requestParams));

		}, function utiFailureCb(res) {
			log.trace("[ServiceUtils] >>>> >>> - [Failure]");

			return failureCb(res);
		});

	}



};

module.exports = new serviceUtils();
