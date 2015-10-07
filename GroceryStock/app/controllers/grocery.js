var args = arguments[0] || {};

function plusFun(){
	log.trace("plus function");
	var qty=$.qtyTxt.value;
	qty++;
	$.qtyTxt.value=qty;
}

function minusFun(){
	log.trace("minus function");
	var qty=$.qtyTxt.value;
	if(qty>=0)
	{
	qty=qty-1;
	$.qtyTxt.value=qty;
	}
	else{
		alert("Please enter valid Quantity");
	}
}

function selectUnitFun(){
	log.trace("selectUnitFun function");
	// //alert("selectUnitFun");
	// //core.Navigator.openView("unitList");
	 // var unitWin=Alloy.createController('unitList').getView('unitview');
  // unitWin.top="100%";
   // unitWin.height="100%";
  // // win4.width="100%";
  // unitWin.animate({
  	// top: "0%",
  	// duration:300
  // });
  // $.mainView.add(unitWin);
  $.unitview.setVisible(true);
}

function unitClickFun(e){
	log.trace("unitClickFun" + JSON.stringify(e));
	var item1 = $.units.SelectedIndex;
	log.trace(item1);
	//alert(e.itemIndex);
	switch(e.itemIndex) {
		
	case 0:
		
		$.unitTxt.value="Kilogram";
		backToDeatil();
		break;
	case 1:

		$.unitTxt.value="Gram";
		backToDeatil();
		break;
	case 2:
		
		$.unitTxt.value="Liter";
		backToDeatil();
		break;
	case 3:
		
		$.unitTxt.value="Dozen";
		backToDeatil();
		break;
	case 4:
		
		$.unitTxt.value="Piece";
		backToDeatil();
		break;
	}
}

function backToDeatil(){
	log.trace("backToDeatil");
	 $.unitview.setVisible(false);
}
