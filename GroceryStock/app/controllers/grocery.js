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