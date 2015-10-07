/**
 * @class jsonUtils
 * @author Bhushan
 * Collection of utility helpers to work with JSON objects.
 */

var JsonUtils = function() {

	// Public Functions
	this.getJsonPath = getJsonPath;
	this.isPath = isPath;
	this.getPath = getPath;
	this.getStringFromJsonPath = getStringFromJsonPath;
	this.isEmpty = isEmpty;
	this.convertJsonToArray = convertJsonToArray;
	this.isBlank = isBlank;
	this.isJson = isJson;
	this.isValidFolderName = isValidFolderName;

	if (Ti.Platform.osname == "android") {
		this.sortSRByLastUpdated = sortSRByLastUpdated;
	}

	/**
	 * Get element at the specified JSON path. This is a convenience method to
	 * navigate thru the JSON tree. Typically a blind navigation could result in
	 * "undefined" exceptions. This method adds null checks to make sure we
	 * don't navigate the tree too far without null checks.
	 *
	 * @param jsonObj
	 * @param pathArray
	 * @returns
	 */
	function getJsonPath(jsonObj, pathArray) {

		if (jsonObj == null) {
			return null;

		}

		var curr = jsonObj;
		for (var i in pathArray) {
			if (pathArray.hasOwnProperty(i)) {
				var component = pathArray[i];
				if (curr[component] == null) {

					return null;
				} else {
					curr = curr[component];
				}
			}
		}
		return curr;

	}//getJsonPath()

	/**
	 * Verify if the specified path exists inside the given jsonObj.
	 * Return true if path exists. Return false otherwise.
	 */
	function isPath(jsonObj, path) {

		if (jsonObj == null || jsonObj == undefined) {
			return false;
		}

		var curr = jsonObj;
		var pathArray = path.split(".");

		for (var i = 0; i < pathArray.length; i++) {
			var component = pathArray[i];
			if (curr[component] == null || curr[component] == undefined) {
				return false;
			} else {
				curr = curr[component];
			}
		}
		return true;

	}//isPath()

	/**
	 * Navigate thru the Json Object using the specified dot-separated path.
	 *
	 * @param jsonObj
	 * @param path
	 * @returns
	 */
	function getPath(jsonObj, path) {

		if (jsonObj == null || jsonObj == undefined) {
			return null;
		}

		var pathArray = path.split(".");
		var curr = jsonObj;

		for (var i = 0; i < pathArray.length; i++) {
			var component = pathArray[i];
			if (curr[component] == null || curr[component] == undefined) {
				return null;
			} else {
				curr = curr[component];
			}
		}
		return curr;

	}//getPath()

	/**
	 * Fetch a string value from the specified path in the given jsonObj. If
	 * the path does not exist, return an empty string.
	 */
	function getStringFromJsonPath(jsonObj, path) {

		var val = this.getPath(jsonObj, path);
		return (val == null) ? '' : val;

	}//getStringFromJsonPath()

	/*
	 * Helper util method to convert a JSONlike (Hash of objects) into an Array-like
	 * (Array of objects).
	 */
	function convertJsonToArray(json) {

		var newobjArr = [];
		for (var key in json) {

			if (!(json.hasOwnProperty(key))) {
				continue;
			}

			var newobj = {};
			newobj.id = key;
			var value = json[key];
			for (var itemkey in value) {
				if (value.hasOwnProperty(itemkey)) {
					newobj[itemkey] = value[itemkey];
				}
			}
			newobjArr.push(newobj);

		}
		return newobjArr;

	}//convertJsonToArray()

	/**
	 * Checks for an empty object like {}
	 * @param obj
	 * @returns {Boolean}
	 */
	function isEmpty(obj) {
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop)) {
				return false;
			}
		}
		return true;
	}//isEmpty()

	/**
	 * Is specified string reference null or empty?
	 *
	 * @param field
	 * @returns {Boolean}
	 */
	function isBlank(field) {

		if (field == null || field == undefined) {
			return true;
		}

		if ( typeof field !== "string") {
			return false;

		}

		if (field.trim().length === 0) {
			return true;
		}

		return false;
	}//isBlank()

	/**
	 * Check Given string Valid json or not
	 * @return Boolean
	 */
	function isJson(str) {

		try {
			JSON.parse(str);
		} catch(e) {
			return false;
		}

		return true;
	}//isJson()

	/**
	 * Utility method to sort SR's by Last Updated date.
	 */
	if (Ti.Platform.osname == "android") {
		function sortSRByLastUpdated(object, property) {
			log.trace("[supportRequest] >> [sortSRByLastUpdated]");
			// Error check for object/property param.
			if (!object || !property) {
				log.error("[supportRequest][sortSRByLastUpdated] >> Object/Property value not found.");
				return object;
			}

			var unsorted = true;
			var asc = isAscending ? true : false;

			while (unsorted) {

				// Tracks whether any changes were made, changed to false on any swap
				var complete = true;
				for (var i = 0; i < object.length - 1; i++) {
					// Holds the value for determining whether to swap the current positions
					var swap = false;
					var currentItem = object[i];
					var nextItem = object[i + 1];

					if (new Date(currentItem[property]) == new Date(nextItem[property])) {

					} else if (new Date(currentItem[property]) < new Date(nextItem[property])) {
						swap = true;
					}

					if (swap) {
						object[i] = nextItem;
						object[i + 1] = currentItem;
						complete = false;
					}
				}

				if (complete) {
					unsorted = false;
				}
			}

			// Returns the sorted array.
			return object;
		}

	}
	
	/**
	 *
	 * @param {String} folderName should be string
	 * @desc this function validates the folder name while rename or add folder operations.
	 * 		 validation is done according to the rules provided by the vmware team as :-
	 * 		 1. Folder Name with "Apostrophe" should not be allowed.
	 *	     2. Note: In Portal "The folder name can contain only alphanumeric characters and the following special characters: ! @ # $ % ^ & () - = + . { space }"
	 */
	function isValidFolderName(folderName) {
		// check if the folder name is null or undefined or not string.
		if (_.isNull(folderName) || _.isUndefined(folderName) || !_.isString(folderName)) {
			return false;
		}
		// this regular expressions checks for the rules and validate the name of the folder
		// you can check it more on https://www.regex101.com/ add this reg expression and check for the results
		// if test passes true means string has another char, other than specified.
		if (/[^a-zA-z0-9\!\@\#\$\%\^\&\(\)\-\=\+\.\{\} ]+/gi.test(folderName)) {
			return false;
		}
		// if everything is ok then return true.
		return true;
	}

};
// End Class JsonUtils

// Export Module
module.exports = new JsonUtils();
