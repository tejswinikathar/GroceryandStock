/**
 *  Utility to check if the current Mashery token is expired or not
 *  And in case if its expired refresh it
 *  Author : @Gourav
 *
 *  @Params : auth token(Provided in the params from the service layer)
 *  @Params : expiry time out (Stored in the properties with the key value "expiryTime")
 *
 *  // expiry timeout is created by adding ( current timestamp and expiry time out)
 *
 *  Case 1 :
 *  If its Not expired gives a success response
 *  {
 * 	  "authTokenExpire" : false,
 *    "response" : {}
 *  }
 *
 *  Case 2 :
 *  If its expired gives a success response
 *  // and provide the same response which provided by the service
 *  {
 * 	 "authTokenExpire" : true,
 *   "response" : {"access_token":"pj4xz5kwy8fsczv2eh59cmnd","token_type":"bearer","expires_in":86400}
 *  }
 *  Case 3 :
 *  if anyhow service fails will return it in failure Cb
 *  and will return the same response as it is which we get from the auth service
 *  Because we are already creating a standard structure in auth service layer
 */

//Dependices
var jsonUtils = require('/utils/jsonUtils');
var responseUtils = require('/utils/responseUtils');

var RefreshUtil = function() {

	this.checkTokenExpire = checkTokenExpire;

	function checkTokenExpire(params, successCb, failureCb) {
		log.trace("[masheryTokenRefreshUtil] >>>> [checkTokenExpire]");

		var expiryTime = Ti.App.Properties.getString("expiryTime");
		var currentTimestamp = Math.round(new Date() / 1000);

		// Condition where token is not expired
		if (expiryTime > currentTimestamp) {
			log.trace("[masheryTokenRefreshUtil] >>>> [checkTokenExpire] >>> [session not expired]");
			return successCb({
				"authTokenExpire" : false,
				"response" : {}
			});
		}
		// Condition where auth token expires
		// So reauthenticate the user and respond with the new response
		else {
			log.trace("[masheryTokenRefreshUtil] >>>> [checkTokenExpire] >>> [session expired]");
			
			var authenticationService = require("/services/authenticationService");
			//TODO:@Gourav : Sending params as null as requirement are still not clear
			var params = "";
			authenticationService.authService(params, function (res) {
				log.trace("[masheryTokenRefreshUtil] >>>> [checkTokenExpire] >>> [authenticationService] >>>> [Success]");
				tokenAccessCode = jsonUtils.getPath(res, "access_token");
				var timeout = jsonUtils.getPath(res, "expires_in");
				
				log.debug("[masheryTokenRefreshUtil] >>>> [checkTokenExpire] >>> [authenticationService] >>>> [Success]" + timeout);
				// Function to fetch deals list
				if (timeout) {
					var currentTimestamp = Math.round(new Date() / 1000);
					var expiryTime = currentTimestamp + timeout;
					Ti.App.Properties.setString("expiryTime", expiryTime);
					
					return successCb({
						"authTokenExpire" : true,
						"response" : res
					});
				}else{
					//var res = responseUtils.constructErrorResponseJson(Constants.UserConstants.RESP_Codes.DEFAULT_TITLE, Constants.UserConstants.RESP_Codes.DEFAULT_MSG);
					var res = responseUtils.constructErrorResponseJson(Constants.RESP_Codes.DEFAULT_TITLE, Constants.RESP_Codes.DEFAULT_MSG);
					return failureCb(res.payload);
				}

			}, function(res) {
				log.trace("[masheryTokenRefreshUtil] >>>> [checkTokenExpire] >>> [authenticationService] >>>> [Failure]");
				
				// Return the same failure response as its already formatted in the auth service
				return failureCb(res);
			});

		}
	}

};

//Export Module
module.exports = new RefreshUtil();
