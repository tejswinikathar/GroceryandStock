/**
 *  @file : widgetController for overlay slider.
 *  @description: This contoller initalizes the slider widget and handles different events of slider.
 * 
 */
var menuPos = 0;
var menuVisible = false;
var drawerRight = "20%";

// Initiallise widgets.
exports.initialiseWidget = function(table_JSON,events){
	createListSection(table_JSON,events);
};

// functions to be called from the controller to show and hide the slider.
exports.showHideMenu = function(){
	displayCloseSlider();
};


// function to show and hide the slider.
function displayCloseSlider(){
	
	var l = !menuVisible ? true : false;
	var r = !menuVisible ? drawerRight : "100%";
	
	$.nav.visible = l ;
	
	$.drawer.animate({
		right : r,
		duration : 300
	});
	
	menuVisible = !menuVisible;
}

// function to initialise the table view.
function createCustomTable(table_JSON, events) {
	var tableData = [];
	
	for (var i = 0; i < table_JSON.length; i++) {
		
		// Created section of table view
		//Ti.UI.createListView
		
		var tableSection = Ti.UI.createTableViewSection({
				backgroundColor : "#444444"
		});
		
		// IF scection name exist add it as section header
		if (table_JSON[i].sectionName != null) {

			// View for header
			var header = Ti.UI.createView({
				backgroundColor : '#444444',
				height : "25dp"
			});
			
			// Header label 
			var headerLabel = Ti.UI.createLabel({
				text : table_JSON[i].sectionName,
				textAlign : "center",
				width : "100%",
				font : {
					fontFamily : "HelveticaNeue-Regular",
					fontSize : "14dp"
				},
				color : "#848484"
			});
				
			header.add(headerLabel);
			
			tableSection.applyProperties({
				"headerView" : header
			});
		}

		// Add rows to table view.
		var data1 = table_JSON[i].data;
		
		for (var j = 0; j < data1.length; j++) {
			
			// Created table view row
			var row = Ti.UI.createTableViewRow({
				page : "navSliderDefault",
				height : "44dp",
				selectionStyle: 'none',
				selectedBackgroundColor:"transparent"
			});
			
			// Add a tap effect to table View Row
			
			row.addEventListener("touchstart",function(e){
				var source = e.source ;
				
				if(source.apiName == "Ti.UI.Label" || source.apiName == "Ti.UI.ImageView"){
					source.getParent().backgroundColor = "#fff" ;
				}else{
					source.backgroundColor = "#fff" ;
				}
			});
			row.addEventListener("touchend",function(e){
				var source = e.source ;
				
				if(source.apiName == "Ti.UI.Label" || source.apiName == "Ti.UI.ImageView"){
					source.getParent().backgroundColor = "transparent" ;
				}else{
					source.backgroundColor = "transparent" ;
				}
			});
			
			row.addEventListener("touchcancel",function(e){
				var source = e.source ;
				
				if(source.apiName == "Ti.UI.Label" || source.apiName == "Ti.UI.ImageView"){
					source.getParent().backgroundColor = "transparent" ;
				}else{
					source.backgroundColor = "transparent" ;
				}
			});
			
			// label 
			var menuLabel = Ti.UI.createLabel({
				text : data1[j].LHS,
				font : {
					fontFamily : "Proxima Nova",
					fontWeight : "Light",
					fontSize : "18dp"
				},
				left : "50dp",
				color : "#E8E8E8"
			});
			row.add(menuLabel);

			// icons 
			if (data1[j].icon) {
				var image = Ti.UI.createImageView({
					image : WPATH(data1[j].icon),
					height : "22dp",
					width : "22dp",
					left : "12dp"
				});
				row.add(image);
			}
			//row.selectedBackgroundColor = "#0080B0";
			tableSection.add(row);

		}
		tableData.push(tableSection);
	}

	$.tableView.setSections(tableData);

	if (events != null) {
		assignEvents(events);
	}
}


/**
 * Function to initilaize the event and callback the method depending on event fired.
 */
function assignEvents(events) {

	for (var i = 0; i < events.length; i++) {
		if (events[i].eventFunction != null && events[i].eventType != null) {
			try{
				$.tableView.removeEventListener(events[i].eventType,events[i].eventFunction);
				$.tableView.addEventListener(events[i].eventType,events[i].eventFunction);
			}catch(e){
				console.log("error occured while asssigning events");
			}
			
		}
	}
}

function createListSection(table_JSON, events) {
	
	var tableSections = [] ;
	
	
	for (var i = 0; i < table_JSON.length; i++) {
		var tableData = [];
		
		var tableSection = Ti.UI.createListSection({
				 backgroundColor : "transparent",
				 width:"100%",
				 height:Titanium.UI.SIZE
				 
		});
		
		// Created section of table view
		if (table_JSON[i].sectionName != null) {	

			// View for header
			 listHeader = Ti.UI.createView({
					backgroundColor : '#444444',
					height : "25dp"
			});
				
			// Header label 
			var headerLabel = Ti.UI.createLabel({
				text : table_JSON[i].sectionName,
				textAlign : "center",
				width : "100%",
				font : {
					fontFamily : "HelveticaNeue-Regular",
					fontSize : "14dp"
				},
				color : "#848484"
			});
				
			listHeader.add(headerLabel);
			
			tableSection.setHeaderView(listHeader);
		
		}
		
		// IF scection name exist add it as section header
		
		// Add rows to table view.
		var data1 = table_JSON[i].data;
		
		for (var j = 0; j < data1.length; j++) {
			var item = {
				template : "template1_CA",
				menuIcon : {
					image: WPATH(data1[j].icon)
				},
				menuTitle : {
					text : data1[j].LHS
				},
				//"properties": data1[j].properties
			};
			tableData.push(item);
			
		}
		
		tableSection.setItems(tableData); 
		tableSections.push(tableSection);
	}	 
	

	$.tableView.setSections(tableSections);
	//$.tableView.se

	if (events != null) {
		assignEvents(events);
	}
}

exports.getMenuState =  getMenuState ;

/**
 * @function: getMenuState
 * @description: returns the status of menu whether its in open state or not
 * 
 */

function getMenuState(){
	return menuVisible ;
}

