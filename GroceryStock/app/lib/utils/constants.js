/**
 * Constant file.
 * @author Bhushan
 */

//[Add desc here]

    Constants = {
        // Colors Constants
        Colors : {
            WHITE : "#FFFFFF",
            BLACK : "#000000",
        },
        // Font Family Constants
        Font_Family : {
            ROBOTO_BOLD : "Roboto-Bold",
            ROBOTO_LIGHT : "Roboto-Light",
            ROBOTO_MEDIUM : "Roboto-Medium",
            ROBOTO_REGULAR : "Roboto-Regular",
            HELVETICANEUE_MEDIUM : "HelveticaNeue-Medium",
            HELVETICANEUE_BOLD : "HelveticaNeue-Bold",
            HELVETICANEUE_LIGHT : "HelveticaNeue-Light",
            HELVETICANEUE_REGULAR : "HelveticaNeue-Regular",
            PROXIMANOVA_SEMIBOLD : "ProximaNova-Semibold",
        },
        Touch_Effect:{
        	TouchOpacity:"0.4",
        	OriginalOpacity:"1.0",
        	tappedHeaderColor:"#e7e7e7",
        	OriginalHeaderColor:"#F7F7F7",
        	TappedEffect:"#e5e5e5"
        	
        },
        // Various response error codes from the server
        RESP_Codes : {
            RESP_PROCESSING : "SUCCESS_102",
            RESP_SUCCESS : "SUCCESS_200",
            RESP_RED_SUCCESS : "SUCCESS_302",
            RESP_INACTIVE_ENROLL : "ERR_402",
            RESP_BAD_INPUT : "ERR_400",
            RESP_AUTH_FAILED : "ERR_401",
            RESP_SERVER_ERROR : "ERR_500",
            RESP_SOAP_FAULT : "ERR_520",
            RESP_SOAP_TIMEOUT : "ERR_521",
            RESP_SOAP_BAD_RESP : "ERR_522",
            EOL : "EOL",
            UPGRADE : "UPGRADE",
            OFFLINE_TITLE : "Network Error",
			OFFLINE_MSG : "Please check your internet connection.",
			MISSING_PARAMETER : "missing_parameter",
			AUTHENTICATION_FAILED : "Authentication Failed",
			DEFAULT_TITLE : "Error Occurred",
			DEFAULT_MSG : "Unable to process your request now. Please try after some time.",
			UNAUTHORISED_USER_TITLE : "Invalid User",
			UNAUTHORISED_USER_MSG : "Incorrect login credentials. Please enter valid credentials.",
			EMPTY_DESCRIPTION_TITLE : "Description Field Empty",
			EMPTY_DESCRIPTION : "Please provide some description to your problem.",
			INVALID_DATE_TITLE : "Invalid Date",
			INVALID_DATE_DESCRIPTION : "The date you have selected is unavailable for booking at this current time, please select a different date or try again later.",
			
			FAILED_TO_FETCH_FIRST_AVAILABLE_SLOT : "Failed to fetch First Available Slot.",
			FAILED_TO_FETCH_USERS_SYS_ID : "Cannot fetch User Details. Please try again.",
			
			INVALID_SLOT_TITLE : "Invalid Appointment Slot",
			INVALID_SLOT_DESCRIPTION : "Please select an Appointment Slot.",
			EMPTY_RESPONSE : "Empty Response",
			EMPTY_RESPONSE_MESSAGE : "No data found for this request. Please try again later.",
			
			SCHEDULE_APPOINTMENT_ERROR : "Schedule Appointment Error!",
			SCHEDULE_APPOINTMENT_ERROR_MSG : "Failed to schedule this appointment. Please try again for a different slot.",
			EMPTY_DATA_ERROR_TITLE :  "No Data Found",
			EMPTY_DATA_ERROR_MESSAGE : "No data found for this request.",
			EMPTY_DATA_ERROR_MESSAGE_FOR_NO_AVAILABLE_SLOTS : "The date you have selected is unavailable for booking at this current time, please select a different date or try again later.",
			FAILURE_CANCEL_REQUEST_TITLE : "Cancel Appointment Failure",
			FAILURE_CANCEL_REQUEST_MSG : "Unable to cancel this request now.",
			FAILURE_MODIFY_REQUEST_TITLE : "Modify Appointment Failure",
			FAILURE_MODIFY_REQUEST_MSG : "Unable to modify this request now."
        },
        RESP_CODES :{
        	UNAUTHORISED_USER: 401,
        	INTERNAL_SERVER_ERROR : 500,
        	UNAUTHORISED_ERROR_TEXT : "UNAUTHORIZED_ACCESS"
        },
        
        

        UI_Const : {
            OPECITY : "0.4",
            FULL_OPECITY : "1.0",
        },
        
        
    };
    
    
function makeConstants(obj) {  
    for (var prop in obj) {

        if (obj.hasOwnProperty(prop)) {

            var size = _.size(obj[prop]);

            var desc = Object.getOwnPropertyDescriptor(obj, prop);

            desc.writable = false;
            desc.configurable = false;
            Object.defineProperty(obj, prop, desc);

            if (size > 0 && _.isObject(obj[prop]))         {            
                makeConstants(obj[prop]);        
            }  
        }
    }
    return Object.preventExtensions( obj );
}


exports.UserConstants= makeConstants(Constants);
