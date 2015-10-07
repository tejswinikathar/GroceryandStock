/**
 * Lib :  core
 * @author Aditya Goyal
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

		//Main Container View
		contentView : null,

		//variable which will hold the name of previously opened controller

		// Added for main Window Object
		mainWin : null,

		// Adding stack to handle previous controllers
		/**Format for each element
		 *{ controllerName : "",
		 * controllerObject : obj,
		 * }
		 */
		controllerStack : [],

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
			this.controllerStack = [];
		},
		/**
		 * Function use to open new controller on handheld devices
		 * @params {String} _controller : name of Controller
		 * @params {Object} _options :  params that are passed to the next controller
		 */
		openView : function(_controller, _options, isEndOfFlow) {

			Ti.API.trace("[core] >> [openView]");

			//so that hardware back butoon don't work while opening the new controller
			Global.loadingMaskActive = true;

			/*
			* checking 3 conditions in the following if condition
			* 1. if controller name has been passed or not
			* 2. if content view has been initialized in index.xml or not
			* 3. check if new controller to be opened is the same one as the previous one or not
			*/
			//
			//
			if (_controller && this.contentView && (this.controllerStack.length > 0 ? (_controller !== this.controllerStack[this.controllerStack.length - 1].controllerName) : true)) {
				//assigning name of the current controller to the previous controller name variable as it is now going to be opened

				this.controllerStack.push({
					controllerName : _controller,
					controllerObject : Alloy.createController(_controller, _options),
				});

				this.currentView = this.controllerStack[this.controllerStack.length - 1].controllerObject.getView();

				//assigning default height and width to the current view
				this.currentView.width = "100%";
				this.currentView.height = "100%";

				//if (_controller == "login" && this.controllerStack.length != 1) {
				if (_controller == "login" || isEndOfFlow) {
					core.Navigator.removeChildrenFromContentView();

					this.currentView.left = "100%";
					//adding currnt view on to the content View
					this.contentView.add(this.currentView);
					//apply sliding left animation
					this.currentView.animate({
						left : 0,
						duration : 200
					}, function() {
						Global.loadingMaskActive = false;
					});

				} else {
					this.currentView.left = "100%";
					//adding currnt view on to the content View
					this.contentView.add(this.currentView);
					//apply sliding left animation
					this.currentView.animate({
						left : 0,
						duration : 200
					}, function() {
						Global.loadingMaskActive = false;
					});
				}
			}
		},
		/*
		 * @desc function which will be used for removing child view from the content view if exists
		 * @parms no params
		 */
		removeChildrenFromContentView : function() {
			//removing childViews
			log.trace("[core] >> [removeChildrenFromContentView]");

			if (this.contentView.children) {
				for (var i = this.contentView.children.length - 1; i > 0; i--) {
					this.contentView.children[i] = null;
					this.contentView.remove(this.contentView.children[i]);
				}
			};

			for (var i = 0; i < this.controllerStack.length; i++) {
				this.controllerStack[i].controllerObject.destroy();
			}
			this.controllerStack = [];

		}, //end of removeChildrenFromContentView

		/*
		 * Function usee to remove top most view from content view i.e. the current controller
		 */
		removeTopViewFromContentView : function(_prevController, _options) {
			if (this.contentView.children) {
				this.currentView = null;
				this.contentView.children[this.contentView.children.length - 1] = null;
				this.contentView.remove(this.contentView.children[this.contentView.children.length - 1]);
			};

			//make the previous view as the current content view after checking if it has gone empty or not
			if (this.contentView.children.length > 0) {
				this.currentView = this.contentView.children[this.contentView.children.length - 1];
			}

		},

		/*
		 * Function use to go to the previous view from the current view
		 */
		goPrevious : function(_options) {
			log.trace("[core] >> [goPrevious]");
			//checking if the loading mask is activated
			if (!Global.loadingMaskActive) {
				this.currentView.animate({
					left : "100%",
					duration : 200
				}, function() {
					core.Navigator.removeTopViewFromContentView();

				});
			}

			this.controllerStack[this.controllerStack.length - 1].controllerObject.destroy();
			this.controllerStack.pop();

			if (this.controllerStack.length > 0) {
				this.controllerStack[this.controllerStack.length - 1].controllerObject.callbackFunctionOnBackButtonPressedFromSuccessingController(_options);
			}

		}//end of goPrevious
	}
};
module.exports = Alloy.Globals;
