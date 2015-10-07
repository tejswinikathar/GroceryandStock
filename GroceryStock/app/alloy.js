// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};


// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
/**
* Init Loggers Library
*/

/**
* Constants:
* utils/constants.js has some constants values which will be used through out the app.
* Create an instance of utils/constants.js & use the same instance through out the app.
*/

var k=0;
var jsonUtils = require('/utils/jsonUtils');

//var appConfig = {};
var appConfig = require('/utils/serviceConfig');
appConfig.initServiceConfig();
var log = require('/log/log');

//creationg global object which will be containg other objects require for the app
var Global = {};
var globalUtil = require('/utils/global');
globalUtil.initGlobalObj();

var core = require("/utils/core2");
var analyticsUtils = require('/utils/analyticsUtils');

var Constants = require('utils/constants');
Constants = Constants.UserConstants;

var viewUtilsInd = require('utils/viewUtils');

var menuSliderVisible = false; // global variable for app to know if slider is open/close