/**
 * Global Object Accessible to all controller
 * Include only in index.js(Initialize)
 * @Bhushan
 */

var platformUtils = require("/utils/platformUtils");

/**
 * Function use to initialize Global Object
 */
exports.initGlobalObj = function() {
	// log.trace("[global] >> [initGlobalObj]");

	Global = {
		"previousController" : null,

		"preView" : null,

		"regionData" : {},
		
		"isNewSessionRequired" : false,
		
		"isIndicatorActive" : false,
		
		"isMenuOpen" : false,
		
		"availableDates" : [],

		//Device Information to log into cetas event
		"deviceInfo" : {

			//Check current device is Tablet
			"isTablet" : Alloy.isTablet,

			//Check current device is handHeld
			"isHandheld" : Alloy.isHandheld,

			//Device height
			"platformHeight" : Ti.Platform.displayCaps.platformHeight,

			//Device Width
			"platformWidth" : Ti.Platform.displayCaps.platformWidth,

			//iphone
			"iphone" : Ti.Platform.name == "iPhone OS" ? (Alloy.isHandheld ? (Ti.Platform.displayCaps.platformHeight === 480 ? "4" : Ti.Platform.displayCaps.platformHeight === 568 ? "5" : Ti.Platform.displayCaps.platformHeight === 667 ? "6" : "6Plus") : false) : false
		},

		"osInfo" : {
			//Check current device is os version
			"osVersion" : Ti.Platform.version,

			//Check current device is Android
			"isAndroid" : Ti.Platform.osname == "android" ? true : false,

			//Check current device is iOS
			"isIos" : Ti.Platform.name == "iPhone OS" ? true : false,

			//To check iOS version is iOS7
			"isiOS7" : platformUtils.isiOS7Plus(),
		},

		"serviceFlags" : {
			//Store all services inprogress here to clear on going service request to stop
			"servicesInProgress" : {},

		},
		"globalFlags" : {

			//Use to Handle Android hardware back Button
			"androidBack" : null,

			//To show Demo login in Application
			"demo" : false,

			"eaSidDetails" : {},

			"currentUsageDetails" : {},

			//Stores selected region
			"selRegion" : {},

			//stores selected
			"selEaSid" : {},

			//stores line graph data
			lineGraphData : {},

			//Stores regions and corresponding cost data to show on card 2
			regionCostData : {},

			//Stores the threshold values
			thresholdData : {},
			username:{},
			password:{},
			selectedAppdetails : {},
			//stores permssion matrix
			permissionDetails : {},

			//storing authtoken
			authToken : null,
			
			xVcloudAuthorization : null,
			
			vdcList : {},
			
			vmList : {},
			
			thresholdData : {},
			
			MonthlyStatementList : {},

		},
		//"loadingMaskActive" : false,
		"backButtonCallBack" : function(e) {
			// if (core.Navigator.contentView.getChildren().length > 0) {
				// core.Navigator.goPrevious();
			// }
		}
	};

};
