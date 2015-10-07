/**
 * @author Mindstix Software
 */
var data1 = [];
var section;
var db = Ti.Database.open('Assign2');
//db.execute('DROP TABLE IF EXISTS cust');
db.execute('CREATE TABLE IF NOT EXISTS cust(id INTEGER PRIMARY KEY,name TEXT);');
//var k=0;
function clk(e){
var AlertInsertIntoDatabase1 = Ti.UI.createAlertDialog({
		title : 'Enter new item?',
		style : Ti.UI.iPhone.AlertDialogStyle.PLAIN_TEXT_INPUT,
		buttonNames : ['OK', 'cancel']
	});
	
	AlertInsertIntoDatabase1.show();
	AlertInsertIntoDatabase1.addEventListener('click', function(e1) {
		data1 = [];
		var db = Ti.Database.open('Assign2');
		db.execute('INSERT INTO cust (id,name) VALUES (?,?)',k,e1.text);
		k++;
		
		style = $.createStyle({
			height : Ti.UI.SIZE,
			Color:'Red'
			//width:Ti.UI.SIZE,
		});
var db = Ti.Database.open('Assign2');
	var tasks = [];
	var RS = db.execute('SELECT id,name FROM cust');
	for (var i = 0; RS.isValidRow(); i++) {
		var dataId = RS.fieldByName('id');
		var dataName = RS.fieldByName('name');
		tasks[i] = {
			id : dataId,
			name : dataName
		};
		RS.next();
		$.ListForMaster.applyProperties(style);
	}
	RS.close();
	var data = [];
		var i;
		//console.log(tasks);

		for ( i = 0; i < tasks.length; i++) {
			data1.push({
				// // Maps to the title component in the template
				// // Sets the text property of the Label component
				MasterlistItemLabelBindId : {
					text : tasks[i].name
				},
				
				// // Sets the regular list data properties
				properties : {
					itemId : tasks[i].id,
					accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
					height : '50dp',
					backgroundColor:'#FFFFFF'
				}
			});
		}
		db.close();
		section = Ti.UI.createListSection();
		section.setItems(data1);
		$.ListForMaster.sections = [section];
		
		
	});
}
/*
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',0,'Sugar');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',1,'Salt');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',2,'Apple');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',3,'Pineapple');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',4,'Banana');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',5,'Strawberry');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',6,'Grapes');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',7,'Tomato');
db.execute('INSERT INTO cust (id,name) VALUES (?,?)',8,'Spinach');*/
//db.close();
//function datalist2(e){
var style = $.createStyle({
			height : Ti.UI.SIZE,
			Color:'Red'
			//width:Ti.UI.SIZE,
		});
var db = Ti.Database.open('Assign2');
	var tasks = [];
	var RS = db.execute('SELECT id,name FROM cust');
	for (var i = 0; RS.isValidRow(); i++) {
		var dataId = RS.fieldByName('id');
		var dataName = RS.fieldByName('name');
		tasks[i] = {
			id : dataId,
			name : dataName
		};
		RS.next();
		$.ListForMaster.applyProperties(style);
	}
	RS.close();
	var data = [];
		var i;
		//console.log(tasks);

		for ( i = 0; i < tasks.length; i++) {
			data.push({
				// // Maps to the title component in the template
				// // Sets the text property of the Label component
				MasterlistItemLabelBindId : {
					text : tasks[i].name
				},
				
				// // Sets the regular list data properties
				properties : {
					itemId : tasks[i].id,
					accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_NONE,
					height : '50dp',
					backgroundColor:'#FFFFFF'
				}
			});
		}
		db.close();
		section = Ti.UI.createListSection();
		section.setItems(data);
		$.ListForMaster.sections = [section];
		var db = Ti.Database.open('Assign2');

		db.execute('DROP TABLE cust1');
		db.execute('CREATE TABLE IF NOT EXISTS cust1(id INTEGER PRIMARY KEY);');
		//db.execute('DROP TABLE cust2');
		db.execute('CREATE TABLE IF NOT EXISTS cust2(id INTEGER PRIMARY KEY);');
		db.execute('DELETE FROM cust1');
//}
//datalist2();
		$.ListForMaster.addEventListener('itemclick', function(e) {
			item = section.getItemAt(e.itemIndex);
			ItemIndex = e.itemIndex;
			//alert(e.itemIndex);
			try{
				db.execute('INSERT INTO cust1 (id) VALUES (?)',ItemIndex);
				//item.properties.backgroundColor = "#0395D2";
				item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
 				//item.template = 'check';
 				section.updateItemAt(e.itemIndex, item);
 				//alert(item);
			}
			catch(e1){
				//item.properties.backgroundColor = 'green';
				db.execute('DELETE FROM cust1 WHERE id=?',e.itemIndex);
				item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
				section.updateItemAt(e.itemIndex, item);
			}
			
		});
		//db.close();
		function masterListButtonAction(e){
			
			var db = Ti.Database.open('Assign2');
			var RS1 = db.execute('SELECT id FROM cust1');
			
			for ( i = 0; RS1.isValidRow(); i++) {
			var RS2 = db.execute('SELECT id FROM cust2 WHERE id=?',RS1.fieldByName('id'));
			if(RS2.isValidRow())
			{
				RS2.close();
				RS1.next();
				continue;
			}
			db.execute('INSERT INTO cust2 (id) VALUES (?)',RS1.fieldByName('id'));
			RS1.next();
			}
			
			RS1.close();
			db.close();
			log.trace("[btnLogin][login] >> masterListButtonAction click");
			core.Navigator.openView("GroceryList");
			//core.Navigator.goPrevious();
		}

