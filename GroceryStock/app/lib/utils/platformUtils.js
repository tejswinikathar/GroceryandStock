/** @class platformUtils
 * A collection of platform utility functions.
 * @author Bhushan
 */


var PlatFormUtils = function() {

	// Exposed operations
	this.isiOS7Plus = isiOS7Plus;
	this.getOSName = getOSName;
	this.isOnline = isOnline;

	/**
	 * function use to check currnt ios is ios7
	 */
	function isiOS7Plus() {
		log.trace("[platformUtils] >> [isiOS7Plus]");

		// is iOS ??
		if (Titanium.Platform.name == 'iPhone OS') {
			var version = Titanium.Platform.version.split(".");
			var major = parseInt(version[0], 10);

			// Can only test this support on a 3.2+ device
			if (major >= 7) {
				return true;
			}
		}
		return false;
	}//isiOS7Plus()

	/**
	 * Function is used to return current os version of the device (iOS/Android)
	 */

	function getOSName() {
		log.trace("[platformUtils] >> [getOSName]");

		return Ti.Platform.osname;
	}//getOSName()

	/**
	 * Functio is used to  Verify current device is online/offline.
	 */
	function isOnline() {
		log.trace("[platformUtils] >> [isOnline]");

		return Ti.Network.online;
	}//isOnline()

};

//Export Module
module.exports = new PlatFormUtils();

