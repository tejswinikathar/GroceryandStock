/**
 * @class appUtils
 * @author Akash
 * @desc utility used in app.
 */
var core = require("/utils/core");
var viewUtils = require("/utils/viewUtils");

var appUtils = function() {
	// Exposed operations
	this.doLogout = doLogout;
	this.resetGlobalVar = resetGlobalVar;
	this.showMessageTimeout = showMessageTimeout;
	this.menuBackHandling = menuBackHandling;
	this.showOfflineMessage = showOfflineMessage;
	this.getFormattedDate = getFormattedDate;
	//this.formatServiceNowDate = formatServiceNowDate;
	//this.formatDateConsideringOffset1 = formatDateConsideringOffset1;
	//this.formatDateToString = formatDateToString;
	this.getCalendarEvents = getCalendarEvents;
	this.performCalendarReadFunctions = performCalendarReadFunctions;
	this.pad = pad;
	/**
	 * Makes logout when session expires
	 */
	function doLogout(isToastRequire, parentView) {
		log.trace("[appUtils] >> [doLogout]");

		parentView = parentView ? parentView : Alloy.Globals.lowerDock.mainWin;

		var indicator = viewUtils.createIndicator({
			text : "Logging out...",
			parentView : parentView
		});

		//hiding lower dock
		//Global.bottomView.visible = false;
		indicator.openIndicator();
		var authenticationService = require('/services/authenticationService');
		params = {
			"session" : "1231231"
		};

		//It will make call to logout service
		authenticationService.logout(params, function successCb(response) {
			log.trace("[appUtils] >> [doLogout] >> logout Success");
			indicator.closeIndicator();
			if (isToastRequire) {
				if (Global.osInfo.isAndroid) {
					var toast = Ti.UI.createNotification({
						message : "Session expired. Please re-login.",
						duration : Ti.UI.NOTIFICATION_DURATION_LONG
					});
					toast.show();
				} else {
					//toast for iOS
					showMessageTimeout();
				}
			}

			resetGlobalVar();
			clearTimeout(Global.authTokenTimeout);
			//handle other functionalities
			core.Navigator.openView("login", {}, true);
		}, function failureCb() {
			log.trace("[appUtils] >> [doLogout] >> logout failure");
			indicator.closeIndicator();
			resetGlobalVar();
			clearTimeout(Global.authTokenTimeout);
			//because logout call is non blocking we are still taling user to login screen
			core.Navigator.openView("login", {}, true);
		});
	}

	/**
	 * Clears out all the global variables in case of logout
	 */
	function resetGlobalVar() {
		log.debug("[appUtils] >> [resetGlobalVar] >> logout");
		Global.isNewSessionRequired = false;
		Global["globalFlags"] = {
			"androidBack" : null,
			"demo" : false,
			"eaSidDetails" : {},
			"currentUsageDetails" : {},
			"selRegion" : {},
			"selEaSid" : {},
			lineGraphData : {},
			regionCostData : {},
			thresholdData : {},
			permissionDetails : {},
			authToken : null,
			xVcloudAuthorization : null,
			vdcList : {},
			vmList : {},
			MonthlyStatementList : {}
		};
	}

	function showMessageTimeout() {
		// window container
		indWin = Titanium.UI.createWindow();

		//  view
		var indView = Titanium.UI.createView({
			top : "80%",
			height : 50,
			width : 250,
			borderRadius : 10,
			backgroundColor : '#323232',
			opacity : 0.7
		});

		indWin.add(indView);

		// message
		var message = Titanium.UI.createLabel({
			text : "Session expired. Please re-login.",
			color : '#fff',
			width : 'auto',
			height : 'auto',
			textAlign : 'center',
			font : {
				fontFamily : 'HelveticaNeue-Light',
				fontSize : 12
			}
		});

		indView.add(message);
		indWin.open();

		setTimeout(function() {
			indWin.close({
				opacity : 0,
				duration : 1000
			});
		}, 3000);
	};
	/**
	 * It will handle menu sliders open state and confirmation popup of logout
	 */
	function menuBackHandling() {
		log.trace("[appUtils] >> [menuBackHandling]");
		if (!Global.isMenuOpen) {
			if (core.Navigator.previousControllerName !== "login" && !Alloy.Globals.isIndicatorVisible) {
				var confirmationDialog = Ti.UI.createAlertDialog({
					buttonNames : ['No', 'Yes'],
					message : "Are you sure you want to log out?",
					title : 'Logout!'
				});
				confirmationDialog.show();
				confirmationDialog.addEventListener('click', function(e) {

					if (e.index == 1) {
						doLogout(false);
					}
				});
			}
		} else {
			Alloy.Globals.menu.showMenuSlider();
		}
	}

	/**
	 * Function to show offline dialog message
	 */
	function showOfflineMessage() {
		log.trace("[appUtils] >> [showOfflineMessage]");
		var offlineDialog = Ti.UI.createAlertDialog({
			message : L('myCloud.global.offline_message'),
			title : L('myCloud.global.offline_title')
		});
		offlineDialog.show();
	}

	/**
	 * function to get date in the format dd-mm-yyyy
	 */
	function getFormattedDate(date) {
		log.trace("[appUtils] >> [showOfflineMessage]");
		function pad(s) {
			return (s < 10) ? '0' + s : s;
		}

		var d = new Date(date);
		return [pad(d.getUTCMonth() + 1), pad(d.getUTCDate()), d.getUTCFullYear()].join('-');
	}

	
	/**
	 * give a call to this util when u want to fetch user's calendar for a specific date.
	 * pass 2 parameters to this utility.
	 * 1st parameter shall contain attributes (year, month, date)
	 * 2nd parameter is the callback function
	 * receive an array of events in response
	 */

	/**	appUtils.getCalendarEvents({
	 "year" : "2015",
	 "month" : "9",
	 "date" : "4"
	 },function(events){
	 log.debug("[events] : " + JSON.stringify(events));
	 });
	 */
	function getCalendarEvents(todaysDate, CallbackForUtility) {
		//functionName(locationDetails,availabilityObject);
		log.trace("[appUtils] >> [getCalendarEvents]" + JSON.stringify(todaysDate));
		var selectedCalendarId = null;
		var calendars = null;

		if (Ti.Platform.osname === 'android') {

			//on android, month elsements are from 0 to 11, while on iOS it is from 1 to 12.
			todaysDate.month = todaysDate.month - 1;

			log.debug("[appUtils] [todaysDate] : " + JSON.stringify(todaysDate));

			try {
				calendars = Ti.Calendar.selectableCalendars;
				selectedCalendarId = calendars[0].id;
			} catch(e) {
				log.error("[appUtils.js] >> [getCalendarEvents] : FAILURE >> No calendars setup in this device");
				return CallbackForUtility([]);
			}

			for (var i = 0; i < calendars.length; i++) {
				log.info(JSON.stringify(calendars[i]));
			}

			performCalendarReadFunctions(todaysDate, selectedCalendarId, function(eventsArray) {
				log.info("eventsArray 2 : " + JSON.stringify(eventsArray));
				return CallbackForUtility(eventsArray);
			});
		} else if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
			if (Ti.Calendar.eventsAuthorization == Ti.Calendar.AUTHORIZATION_AUTHORIZED) {
				try {
					calendars = Ti.Calendar.allCalendars;
					log.debug("[appUtils.js] >> [getCalendarEvents] : calendars >> " + JSON.stringify(calendars));
					selectedCalendarId = calendars[0].id;
				} catch(e) {
					log.error("[appUtils.js] >> [getCalendarEvents] : FAILURE >> No calendars setup in this device");
					return CallbackForUtility([]);
				}
				performCalendarReadFunctions(todaysDate, selectedCalendarId, function(eventsArray) {
					log.info("eventsArray 3 : " + JSON.stringify(eventsArray));
					return CallbackForUtility(eventsArray);
				});
			} else {
				Ti.Calendar.requestEventsAuthorization(function(e) {
					if (e.success) {
						try {
							calendars = Ti.Calendar.allCalendars;
							selectedCalendarId = calendars[0].id;
						} catch(e) {
							log.error("[appUtils.js] >> [getCalendarEvents] : FAILURE >> No calendars setup in this device");
							return CallbackForUtility([]);
						}
						performCalendarReadFunctions(todaysDate, selectedCalendarId, function(eventsArray) {
							log.info("eventsArray 4 : " + JSON.stringify(eventsArray));
							return CallbackForUtility(eventsArray);
						});
					} else {
						log.error("[appUtils.js] >> [getCalendarEvents] : FAILURE >> Access to calendar is not allowed");
						return CallbackForUtility([]);
					}
				});
			}
		}
	}

	function performCalendarReadFunctions(todaysDate, selectedCalendarId, CBfunction) {
		
		log.trace("[appUtils] >> [performCalendarReadFunctions]" + JSON.stringify(todaysDate));
		
		//	var calen = Titanium.Calendar.Calendar();
		var eventsArray = [];
		var calen = Ti.Calendar.getCalendarById(selectedCalendarId);
		log.info("calen : " + JSON.stringify(calen));

		todaysDate = new Date(todaysDate.year + "-" + pad(todaysDate.month) + "-" + pad(todaysDate.date));
		var nextDate = new Date(todaysDate.getTime() + 24 * 60 * 60 * 1000);
		var prevDate = new Date(todaysDate.getTime() - 24 * 60 * 60 * 1000);
		log.info("todaysDate : " + JSON.stringify(todaysDate));

		var events = calen.getEventsInDate(todaysDate.getUTCFullYear(), (todaysDate.getUTCMonth() + 1), todaysDate.getDate());
		events = events.concat(calen.getEventsInDate(nextDate.getUTCFullYear(), (nextDate.getUTCMonth() + 1), nextDate.getDate()));
		events = events.concat(calen.getEventsInDate(prevDate.getUTCFullYear(), (prevDate.getUTCMonth() + 1), prevDate.getDate()));

		log.info("events : " + JSON.stringify(events));

		if (events == null || events == undefined) {
			return CBfunction(eventsArray);
		}

		for (var i = 0; i < events.length; i++) {

			if (Ti.Platform.osname === 'iphone' || Ti.Platform.osname === 'ipad') {
				var start = new Date(events[i].begin.split("+")[0]);
				var end = new Date(events[i].end.split("+")[0]);
			} else {
				var start = new Date(events[i].begin);
				var end = new Date(events[i].end);
			}

			log.debug("start : " + start);
			log.debug("end : " + end);

			start = fetchExactDate(start);
			end = fetchExactDate(end);
			
			//if today's date is in between an event
			if (start.getTime() < todaysDate.getTime() && end.getTime() > todaysDate.getTime()) {
				if (todaysDate.getUTCDate() != start.getDate() && todaysDate.getUTCDate() != end.getDate()) {

					eventsArray = [{
						"startHour" : "00",
						"startMinutes" : "00",
						"endHour" : "23",
						"endMinutes" : "59",
						"availability" : events[i].availability,
						"startDate" : pad(todaysDate.getUTCDate()),
						"endDate" : pad(todaysDate.getUTCDate()),
						"status" : events[i].status
					}];
					return CBfunction(eventsArray);
				}
			}
			
			//if today's date is start date and end date is different
			if (todaysDate.getUTCDate() == start.getDate() && start.getDate() != end.getDate()) {

					eventsArray.push({
						"startHour" : pad(start.getHours()),
						"startMinutes" : pad(start.getMinutes()),
						"endHour" : "23",
						"endMinutes" : "59",
						"availability" : events[i].availability,
						"startDate" : pad(start.getDate()),
						"endDate" : pad(end.getDate()),
						"status" : events[i].status
					});
					continue;
			}
			
			//if today's date is end date and start date is different
			if (todaysDate.getUTCDate() == end.getDate() && start.getDate() != end.getDate()) {

					eventsArray.push({
						"startHour" : "00",
						"startMinutes" : "00",
						"endHour" : pad(end.getHours()),
						"endMinutes" : pad(end.getMinutes()),
						"availability" : events[i].availability,
						"startDate" : pad(start.getDate()),
						"endDate" : pad(end.getDate()),
						"status" : events[i].status
					});
					continue;
			}

			if (todaysDate.getUTCDate() == start.getDate() && todaysDate.getUTCDate() == end.getDate()) {
				eventsArray.push({
					"startHour" : pad(start.getHours()),
					"startMinutes" : pad(start.getMinutes()),
					"endHour" : pad(end.getHours()),
					"endMinutes" : pad(end.getMinutes()),
					"availability" : events[i].availability,
					"startDate" : pad(start.getDate()),
					"endDate" : pad(end.getDate()),
					"status" : events[i].status
				});
			}
		}

		log.info("eventsArray : " + JSON.stringify(eventsArray));
		CBfunction(eventsArray);
	}

	function pad(s) {
		return (s < 10) ? '0' + s : s;
	}

	function fetchExactDate(dateObject) {
		log.trace("[appUtils] >> [fetchExactDate]" + JSON.stringify(dateObject));
		
		var locationDetails = {
			"offset" : Alloy.Globals.selLocation.offset,
			"bias" : Alloy.Globals.selLocation.bias,
			"DSTstart" : Alloy.Globals.selLocation.dstStart,
			"DSTend" : Alloy.Globals.selLocation.dstEnd,
			"locationId" : Alloy.Globals.selLocation.locSysId
		};

		log.debug("%s User:%s||[fetchUserDate] >> locationDetails %s" + JSON.stringify(locationDetails));

		//create new date object for storing user's date as per UTC time
		log.debug("%s User:%s||[fetchUserDate] >> dateObject %s", dateObject);
		var usersDateObject = dateObject;
		log.debug("%s User:%s||[fetchUserDate] >> first usersDateObject %s", usersDateObject);
		usersDateObject = new Date(usersDateObject.getUTCFullYear(), usersDateObject.getUTCMonth(), usersDateObject.getUTCDate(), usersDateObject.getUTCHours(), usersDateObject.getUTCMinutes(), usersDateObject.getUTCSeconds(), usersDateObject.getUTCMilliseconds());
		var usersDateObject = new Date(usersDateObject.getTime() - (locationDetails.offset) * 60 * 1000);
		log.debug("%s User:%s||[fetchUserDate] >> second usersDateObject %s", usersDateObject);
		// if offset is negative then make it positive
		var modOffset = parseInt(locationDetails.offset) < 0 ? (parseInt(locationDetails.offset) * -1) : parseInt(locationDetails.offset);

		//calculate hours and minutes for offset
		var offsetHrs = parseInt(modOffset / 60);
		var offsetMins = parseInt(modOffset % 60);
		log.debug("%s User:%s||[fetchUserDate] >> offset : %s : %s", offsetHrs, offsetMins);

		if (locationDetails.bias != undefined && locationDetails.bias != null && locationDetails.bias != "" && locationDetails.bias != "0") {

			try {
				var DSTStart = locationDetails.DSTstart;
				var DSTEnd = locationDetails.DSTend;
				var bias = locationDetails.bias;

				log.debug("%s User:%s||[fetchUserDate] >> DSTStart : %s " + DSTStart);
				log.debug("%s User:%s||[fetchUserDate] >> DSTEnd : %s " + DSTEnd);
				log.debug("%s User:%s||[fetchUserDate] >> bias : %s " + bias);

				var dstStartArray = DSTStart.split("-");
				var dstEndArray = DSTEnd.split("-");

				log.debug("%s User:%s||[fetchUserDate] >> dstStartArray : %s ", dstStartArray);
				log.debug("%s User:%s||[fetchUserDate] >> dstEndArray : %s ", dstEndArray);

				// create Date object for DST Start/End in the following format "2015-09-23T02:00:00-07:00"

				//T02:00:00 is for 2 AM Bias - daylight savings begins/ends at the said time

				var paramStr = dstStartArray[0] + "-" + dstStartArray[1] + "-" + dstStartArray[2] + "T" + "02:00:00" + "-" + pad(offsetHrs) + ":" + pad(offsetMins);
				//log.debug("%s User:%s||[fetchUserDate] >> paramStr : %s " , paramStr);

				var DSTstartDateObject = new Date(paramStr);
				var DSTStartDateEpochAsPerLocation = new Date(DSTstartDateObject.getTime());
				//+  (Number(locationDetails.offset) * 60*1000));
				log.debug("%s User:%s||[fetchUserDate] >> DSTStartDateEpochAsPerLocation : %s ", DSTStartDateEpochAsPerLocation);

				// var DSTHours = DSTStartDate.getHours();
				log.debug("%s User:%s||[fetchUserDate] >> DSTHours : %s ");

				var DSTendDateObject = new Date(dstEndArray[0] + "-" + dstEndArray[1] + "-" + dstEndArray[2] + "T" + "02:00:00" + "-" + pad(offsetHrs) + ":" + pad(offsetMins));
				var DSTendDateEpochAsPerLocation = new Date(DSTendDateObject.getTime());
				//+  (Number(locationDetails.offset) * 60*1000));
				log.debug("%s User:%s||[fetchUserDate] >> DSTendDateEpochAsPerLocation : %s ", DSTendDateEpochAsPerLocation);

				var userDateEpochAsPerLocation = new Date();
				var userDateEpochAsPerLocation = new Date(userDateEpochAsPerLocation.getTime());
				//+  (Number(locationDetails.offset) * 60*1000));
				log.debug("%s User:%s||[fetchUserDate] >> userDateEpochAsPerLocation : %s ", userDateEpochAsPerLocation);

				log.debug("%s User:%s||[fetchUserDate] >> userDateEpochAsPerLocation.getTime() : %s ", userDateEpochAsPerLocation.getTime());
				log.debug("%s User:%s||[fetchUserDate] >> DSTStartDate.getTime() : %s ", DSTStartDateEpochAsPerLocation.getTime());
				log.debug("%s User:%s||[fetchUserDate] >> DSTEndDate.getTime() : %s ", DSTendDateEpochAsPerLocation.getTime());

				//if current location's exact time lies outside Daylight Zone then subtract the bias from offset
				if (userDateEpochAsPerLocation.getTime() > DSTStartDateEpochAsPerLocation.getTime() && userDateEpochAsPerLocation.getTime() < DSTendDateEpochAsPerLocation.getTime()) {
					usersDateObject = new Date(usersDateObject.getTime() - (locationDetails.bias * 60 * 1000));
					log.debug("%s User:%s||[fetchUserDate] >> usersDateObject : %s ", usersDateObject);
				}

			} catch(e) {
				log.error("%s User:%s||[fetchUserDate] Error in TimeZone Utility. In DayLight savings.(In catch) ");
				return;
			}
		}
		log.debug("%s User:%s||[fetchUserDate] >> final usersDateObject %s", usersDateObject);
		return usersDateObject;
	}

};
//end of

//Export Module
module.exports = new appUtils();
