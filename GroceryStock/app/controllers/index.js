

/*
 *
 *index controller loads when app launch 
 */
var viewUtils = require("/utils/viewUtils");
var responseUtils = require('/utils/responseUtils');
var jsonUtils = require('/utils/jsonUtils');

core.Navigator.indexController = $;

init();
// onload init function 
function init() {
	log.trace("[index.js] >> init()");
	$.mainWin.orientationModes = [Ti.UI.PORTRAIT];
	initializeCore();
	$.mainWin.open();
	core.Navigator.openView("login");
}


//click event for menu slider 
function itemClickFunction(e) {
	log.trace("[index.js] >> itemClickFunction()");
	//console.log(JSON.stringify(table_JSON["data"][e.index].properties));
	//console.log("Item click:"+JSON.stringify(e.section.getItemAt(e.itemIndex)));
	var item = e.section.getItemAt(e.itemIndex);
	switch(item.menuTitle.text) {
	case "Grocery":
	
		core.Navigator.openView("grocery");
		
		break;
	case "Stocks":


		break;
	case "Logout":
		//Added analytics event for menu option
		analyticsUtils.logActEvent("menu.logout");

		core.Navigator.openView("login");
		break;
	}
	//menuSliderVisible = !menuSliderVisible;
	$.menuSliderWidget.showHideMenu();
}


// initialize navigation slider 
exports.initializeNavigationDrawer = function() {
	log.trace("[index.js] >> initializeNavigationDrawer()");

	var table_JSON = [{
		"sectionName" : Ti.App.Properties.getString("username"),
		"data" : [{
			"id" : "groceryID",
			"LHS" : "Grocery",
			"icon" : "/images/xxxxxxxx.png"
		}, {
			"id" : "stocksID",
			"LHS" : "Stocks",
			"icon" : "/images/xxxxxxxx.png"
		},{
			"id" : "item2",
			"LHS" : "Logout",
			"icon" : "/images/xxxxxxxx.png"
		}]
	}];

	var eventsList = [{
		"eventType" : "itemclick",
		"eventFunction" : itemClickFunction
	}];

	$.menuSliderWidget.initialiseWidget(table_JSON, eventsList);

};
//initialize main window 
function initializeCore() {
	Ti.API.trace("[index] >> [initializeCore]");
	core.Navigator.init({
		"mainWin" : $.mainWin,
		"contentView" : $.contentView
	});
}

exports.showHideSlider = function() {
	log.trace("[index.js] >> showHideSlider()");
	//menuSliderVisible = !menuSliderVisible;
	$.menuSliderWidget.showHideMenu();

	if ($.menuSliderWidget.getMenuState()) {
		// Added Navigation event for Slider screen
		analyticsUtils.logNavEvent("menuSlider");
	}

};

$.mainWin.addEventListener('android:back', function(e) {
	log.trace("[index.js] >>  addEventListener for androidback()");
	
	if(Global.isIndicatorActive){
		return;
	}
	//added condition for the fix : menu slider opens on login screen
	if ($.menuSliderWidget.getMenuState() && !(core.Navigator.controllerStack[core.Navigator.controllerStack.length -1].controllerName == "login")) {
		$.showHideSlider();
	} else {
		core.Navigator.controllerStack[core.Navigator.controllerStack.length -1].controllerObject.androidBackButtonPressed();
	}
});


