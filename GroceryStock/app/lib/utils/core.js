/**
 * Lib :  core
 * @author Akshit Kumar
 */

/*
 * App Singleton
 * @type {Object}
 */
var jsonUtils = require("/utils/jsonUtils");
Alloy.Globals = {
	/**
	 * Navigation Widget using for routing controllers
	 * @type {Object}
	 */
	Navigator : {

		//Current View in action
		currentView : null,

		//Current Controller in action
		currentController : null,
		previousController : null,
		//Main Container View
		contentView : null,

		//variable which will hold the name of previously opened controller
		previousControllerName : null,
		currentControllerName : null,

		// Added for main Window Object
		mainWin : null,

		// Adding array variable to handle previous views
		previousViewArray : [],
		
		/**
		 * Function use to initialize this Variables
		 * @params {Object} _params
		 */
		init : function(_params) {
			Ti.API.trace("[core] >> [init]");

			//null check for params
			if (jsonUtils.isEmpty(_params)) {
				Ti.API.error("[core] >> [init] >> core init failed");
				return;
			}
			this.mainWin = _params.mainWin;
			this.currentView = null;
			this.currentController = null;
			this.contentView = _params.contentView;
			this.previousControllerName = null;
			this.previousViewArray = [];
			this.currentControllerName = null;
			this.previousController = null;
		},
		/**
		 * Function use to open new controller on handheld devices
		 * @params {String} _controller : name of Controller
		 * @params {Object} _options :  params that are passed to the next controller
		 */
		openView : function(_controller, _options, isEndOfFlow, isGoingBack) {
			Ti.API.trace("[core] >> [openView]");
			
			//so that hardware back butoon don't work while opening the new controller
			Global.loadingMaskActive = true;
			//check current controller name and it should not same as previous one
			
			if (_controller && this.contentView && (_controller !== this.currentControllerName )) {
				//assigning name of the current controller to the previous controller name variable as it is now going to be opened
				
				this.previousControllerName = this.currentControllerName;
				this.currentControllerName = _controller;
				//this.previousControllerName = _controller;
				
				this.previousController = this.currentController;
				
				//destroying previous controller
				if (this.currentController)
					this.currentController.destroy();

				//assigning newly created controller object to the current controller reference
				this.currentController = Alloy.createController(_controller, _options);
				
					
					
				//adding previous view on to the previous view array
				if (this.currentView) {
					this.previousViewArray[this.previousViewArray.length] = this.currentView;
				}
				//getting new view from the current controller and assigning it to current view reference
				
				
				this.currentView = this.currentController.getView();
				

				//assigning default height and width to the current view
				this.currentView.width = "100%";
				this.currentView.height = "100%";

				if (_controller != "index") {
					if (isGoingBack) {
						this.currentView.left = "-100%";
						this.contentView.add(this.currentView);
						var contentView = this.contentView;
						var preView = this.previousView;
						this.currentView.animate({
							left : "0",
							duration : 200
						});
						if (preView) {
							preView.animate({
								left : "100%",
								duration : 200
							}, function() {
								Alloy.Globals.Navigator.removeChildrensFromContentView();
							});
						}
					} else {
						this.currentView.left = "100%";
						//adding currnt view on to the content View
						this.contentView.add(this.currentView);
						//apply sliding left animation
						this.currentView.animate({
							left : 0,
							duration : 200
						}, function() {
							Alloy.Globals.Navigator.removeChildrensFromContentView();
							Global.loadingMaskActive = false;
						});
					}
				} else {
					//adding currnt view on to the content View
					this.contentView.add(this.currentView);
				}

				//removing all views from the previous view array
				if (isEndOfFlow){
					this.previousViewArray.splice(0, this.previousViewArray.length);
					this.removeChildrensFromContentView();
				}
					
				/*adding or removing events listener for the hardware back button according to the condition*/
				if (this.previousViewArray.length == 1)
					this.mainWin.addEventListener('android:back', Global.backButtonCallBack);
				else if (this.previousViewArray.length == 0)
					this.mainWin.removeEventListener('android:back', Global.backButtonCallBack);

			}
		},
		/*
		 * @desc function which will be used for removing child view from the content view if exists
		 * @parms no params
		 */
		removeChildrensFromContentView : function() {
			//removing childViews
			if (this.contentView.children) {
				for (var i = this.contentView.children.length - 2; i >= 0; i--) {
					this.contentView.remove(this.contentView.children[i]);
				}
			};
		}, //end of removeChildrensFromContentView
		/*
		 * Function use to go to the previous view from the current view
		 */
		goPrevious : function(_prevController, _options) {
			Ti.API.trace("[core] >> [goPrevious]");
			//checking if the loading mask is activated
			if (!Global.loadingMaskActive) {
				this.currentControllerName = this.previousControllerName;
				this.previousControllerName = null;
				
				if (this.currentController)
				{
					this.currentController.destroy();
				}
				
				this.currentController = this.previousController;
				this.previousController = null;
				
				if(_options)
				{
					this.currentController.pickedNewSlot(_options);
				}
				
				if (this.previousViewArray.length > 0) {
					var preView = this.previousViewArray[this.previousViewArray.length - 1];
					preView.left = "-100%";
					var contentView = this.contentView;
					var currentView = this.currentView;

					//adding previous view on to the content view
					this.contentView.add(preView);
					//animating current view
					this.currentView.animate({
						left : "100%",
						duration : 200
					});

					//animating previous view
					preView.animate({
						left : "0%",
						duration : 200
					}, function() {
						contentView.remove(currentView);
					});


					//modifying current view
					this.currentView = this.previousViewArray[this.previousViewArray.length - 1];
					//modifying previous view collection
					this.previousViewArray.splice(this.previousViewArray.length - 1, 1);

					//for handling back button metods
					//if (Global.osInfo.isAndroid && _prevController) {
						//this.currentController = Alloy.createController(_prevController, _options);
					//}

				}
				// if(this.previousViewArray.length==0){
				// //for handling hardware back button removing event listener
				// this.mainWin.removeEventListener('android:back', Global.backButtonCallBack);
				// //removing event listener iff condition is satisfied
				// if(deviceBackButonOption){
				// this.openView(deviceBackButonOption["screen"],{},true);
				// this.mainWin.removeEventListener('android:back', deviceBackButonOption["callBackFunction"]);
				// }
				// }

			}
		}//end of goPrevious
	}
};
module.exports = Alloy.Globals;
