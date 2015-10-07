/**
 * @author Mindstix Software
 */

//alert("Hello");

var style = $.createStyle({
			height : Ti.UI.SIZE,
			Color:'Red'
			//width:Ti.UI.SIZE,
		});
var db = Ti.Database.open('Assign2');
	var GrocerylistItems = [];
	
	
	var RS2 = db.execute('SELECT id FROM cust2');
	for (var i = 0; RS2.isValidRow(); i++) {
		var RS = db.execute('SELECT id,name FROM cust WHERE id=?',RS2.fieldByName('id'));
		
		
		var dataId = RS.fieldByName('id');
		var dataName = RS.fieldByName('name');
		GrocerylistItems[i] = {
			id : dataId,
			name : dataName
		};
		RS.close();
		$.ListForGrocery.applyProperties(style);
		RS2.next();
	}
	RS2.close();
	var GrocerylistItemsdata = [];
		var i;
		//console.log(tasks);

		for ( i = 0; i < GrocerylistItems.length; i++) {
			GrocerylistItemsdata.push({
				// // Maps to the title component in the template
				// // Sets the text property of the Label component
				GroceryListItemLabelBindId : {
					text : GrocerylistItems[i].name
				},
				
				// // Sets the regular list data properties
				properties : {
					itemId : GrocerylistItems[i].id,
					accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
					height : '50dp',
					backgroundColor:'#FFFFFF'
				}
			});
		}
		db.close();
		var section = Ti.UI.createListSection();
		section.setItems(GrocerylistItemsdata);
		$.ListForGrocery.sections = [section];

function GroceryListButtonAction(e){
	core.Navigator.openView("masterList");
	
}
$.ListForGrocery.addEventListener('itemclick', function(e) {
	
	core.Navigator.openView("grocery");
});