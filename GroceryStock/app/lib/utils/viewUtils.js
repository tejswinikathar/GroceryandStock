/**
 * @class utils/viewUtils.js
 * Author : 
 * Helps creating views BusyIndicator,Mask,Error pop ups.
 */
var ViewUtils = function() {

    this.createIndicator = createIndicator;
    this.animate = animate;
    this.getHeightInDp = getHeightInDp;
    this.showHidePopStripe = showHidePopStripe;
    this.dateDiff = dateDiff;
    this.addPressEffect = addPressEffect;
    this.removePressEffect = removePressEffect;

    /**
     * Create View for BusyMask
     * @param {Object} args
     *
     * if ParentView --> automatically adds busyMask to its parent and return BusyMask
     *  Can change LabelText By using Current Object
     *  Can Check BusyMask Currently active or not By visble property
     */
    function createIndicator(args) {
        log.trace("[viewUtils] >> [createIndicator]");

        var width = '100%',
            height = '100%';

        var args = args || {};
        var top = args.top || 0;
        var spinnerText = args.text || "Fetching data";
        var leftPosition = args.left || '0';

        //create outerView
        var outerView = Titanium.UI.createView({
            height : height,
            width : width,
            left : 0,
            top : 0,
            borderRadius : 0,
            touchEnabled : true,
            backgroundColor : "#000000",
            opacity : 0.8,
            visible : false
        });

        outerView.visible = false;

        //indicator Style
        function osIndicatorStyle() {
            
             if(Global.osInfo.isAndroid){
                  style = Ti.UI.ActivityIndicatorStyle.BIG_DARK;
             }else{
                 style = Ti.UI.iPhone.ActivityIndicatorStyle.PLAIN;
             }
            return style;
        }
		
        //Indicator Width
        function getIndicatorWidth() {
            if (Global.osInfo.isAndroid) {
                indicatorWidth = "30dp";
            }else{
            	indicatorWidth = "40dp";
            }
            return indicatorWidth;
        }

        //create Activity Indicator
        var activityIndicator = Ti.UI.createActivityIndicator({
            style : osIndicatorStyle(),
            height : Ti.UI.FILL,
            width : getIndicatorWidth(),
            top : args.activityTop ? args.activityTop : ""
        });

        outerView.add(activityIndicator);

        var label = Titanium.UI.createLabel({
            width : "60%",
            height : "5%",
            text : spinnerText,
            color : 'white',
            font : {
                fontSize : Global.deviceInfo.isHandheld ? "16dp" : "20dp"
            },
            top : "53%",
            textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
        });

        //innrerView.add(label);
        outerView.add(label);

        /*
         * Function use to show BusyIndicator
         */
        function openIndicator() {
            outerView.visible = true;
            activityIndicator.show();
            Global.isIndicatorActive = true;
        }
        outerView.openIndicator = openIndicator;

        /*
         * Function use to hide BusyIndicator
         */
        function closeIndicator() {
            activityIndicator.hide();
            outerView.visible = false;
             Global.isIndicatorActive = false;
        }

        outerView.closeIndicator = closeIndicator;
        outerView.label = label;

        //check parentview passed or not if yes add this view to parent View
        if (args.parentView != null || args.parentView != undefined) {
            args.parentView.add(outerView);
        }
        return outerView;
    };

    /**
     * Animate View
     * @param {string} type(left,right)
     * @param {Ti.UI.View} oldView
     * @param {Ti.UI.View} newView
     * @param {Success Callback} sucessAnimation
     * @param {failure CallBack} failureAnimation
     * @Condition:-
     * 			1. New View should be added before using
     * 			2. New View visible property should be false
     */
    function animate(type, oldView, newView, sucessAnimation, failureAnimation) {
        log.trace("[viewUtils] >> [animate]");

        //null check
        if (!type || !oldView || !newView) {
            log.error("[viewUtils] >> [animate] >>Can't apply animation of unknowns");
            if (failureAnimation) {
                return failureAnimation("Can't apply animation of unknowns");
            } else {
                return;
            };
        }

        //Sliding Left animation
        if (type == "left") {
            var animation = Titanium.UI.createAnimation();
            animation.right = 0;
            animation.duration = 300;

            newView.right = Ti.Platform.displayCaps.platformWidth;
            newView.visible = true;
            newView.animate(animation);

            oldView.left = 0;
            oldView.animate({
                left : Ti.Platform.displayCaps.platformWidth,
                duration : 300
            });

            animation.addEventListener('complete', function() {
                if (sucessAnimation) {
                    return sucessAnimation("Animation Completed");
                } else {
                    return;
                }
            });
        }
        //Sliding Right animation
        else if (type == "right") {

            newView.left = Ti.Platform.displayCaps.platformWidth;
            newView.visible = true;
            newView.animate({
                left : 0,
                duration : 300
            });

            var animation = Titanium.UI.createAnimation();
            animation.right = Ti.Platform.displayCaps.platformWidth;
            animation.duration = 300;

            oldView.right = 0;
            oldView.animate(animation);

            animation.addEventListener('complete', function() {
                if (sucessAnimation) {
                    return sucessAnimation("Animation Completed");
                } else {
                    return;
                }
            });

        } else {
            if (failureAnimation) {
                failureAnimation("Animation Failed");
            }
            return;
        }
    };

    /**
     * Returns the difference between two passed dates.
     */
    function dateDiff(dateFrom, dateTo) {

        var from = {
            d : dateFrom.getDate(),
            m : dateFrom.getMonth() + 1,
            y : dateFrom.getFullYear()
        };

        var to = {
            d : dateTo.getDate(),
            m : dateTo.getMonth() + 1,
            y : dateTo.getFullYear()
        };

        var daysFebruary = to.y % 4 != 0 || (to.y % 100 == 0 && to.y % 400 != 0) ? 28 : 29;
        var daysInMonths = [0, 31, daysFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if (to.d < from.d) {
            to.d += daysInMonths[parseInt(to.m)];
            from.m += 1;
        }
        if (to.m < from.m) {
            to.m += 12;
            from.y += 1;
        }

        return {
            days : to.d - from.d,
            months : to.m - from.m,
            years : to.y - from.y
        };
    }

    /**
     * Add Press effect by changing the color and/or opacity of Buttons/Labels
     */
    function addPressEffect(component, color) {

    }

    /**
     * Remove Press effect by reseting the color and/or opacity of Buttons/Labels
     */
    function removePressEffect(component, color) {

    }

    /**
     * Function use to get Size In dp according to platfrom height
     * @param {number} size
     */
    function getHeightInDp(size) {
        log.trace("[viewUtils] >>[getHeightInDp]");

        var tempSize = Global.platformHeight - (size * Ti.Platform.displayCaps.logicalDensityFactor);

        if (Global.isAndroid) {
            tempSize = tempSize / Ti.Platform.displayCaps.logicalDensityFactor;

            return tempSize + "dp";
        } else {
            return tempSize;
        }
    }

    /**
     * @desc function to add the pop up stripe at the bottom
     */
    function showHidePopStripe(args) {
        Ti.API.trace("[viewUtils] >> [showHidePopStripe]");
        // view to be added at bottom
        var stripeView = Ti.UI.createView({
            height : "30dp",
            bottom : 0,
            width : "100%",
            backgroundColor : "#0080b0",
            visible : true
        });

        // add the label to view
        
      var stripe = Ti.UI.createLabel({
            text : args.labelText,
            font : {
                fontFamily : 'HelveticaNeue-Medium',
                fontSize : '15dp'
            },
            color : "#FFFFFF",
            left : "14dp",
        });

        // add the label to view
        stripeView.add(stripe);

        //check parentview passed or not if yes add this view to parent View
        if (args.parentView != null || args.parentView != undefined) {
            args.parentView.add(stripeView);
        }

        // close the view after specific interval
        setTimeout(function() {
            args.parentView.remove(stripeView);
            stripe = null;
            stripeView = null;
        }, 2000);
    }

};
// End Class ViewUtils

// Export Module
module.exports = new ViewUtils();

