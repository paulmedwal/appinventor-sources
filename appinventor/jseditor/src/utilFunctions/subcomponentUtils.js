/**
 * Called in ComponentsContainer.js and Container.js
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file.
 * This is a nested object, where the Components for each component is
 * an array of its children objects
 * This tree is rooted at the screen object with ID = screenId
 * @return proj (object): JSON object that will be in the Scheme file
 */
export function create_tree(arr, screenId) {
	var allObjs = {}
	var proj = {};

	// Create an object containing all component objects
	// Keys are the component Ids, values are the objects
	allObjs = create_all_objects(arr,true);

	// for each component object
	for (var i = 0; i < arr.length; i++) 
	{
		var entry = arr[i];
		var entryId = entry["Uuid"];

		// if the component has subcomponents, 
		if (entry.hasOwnProperty("children") && entry["children"].length > 0)
		{
			allObjs[entryId]["$Components"] = []
			// add the subcomponent objects to a property called "$Components" (array)
			for (var k = 0; k < entry["children"].length; k++)
			{
				var childId = entry["children"][k];
				if (!allObjs.hasOwnProperty(childId))
				{
					allObjs[childId] = {};
				}
				allObjs[entryId]["$Components"].push(allObjs[childId])
			}
		}

		// if the component is a Screen/Form, set that as the root component.
		if (entry["Uuid"] === screenId) proj = allObjs[entryId];
	}

	// console.log(proj)
	return proj;
}

/** 
 * called by create_tree() above
 * Given the data array (of component objects), creates a dictionary
 * of JSON objects, which contain name and id values.
 * Dictionary maps the component's unique ID to its JSON object
 */
 /*
function create_all_objects(arr) {
	var objs = {}
	// FOR EACH ENTRY IN THE ARRAY...
	for (var i = 0; i < arr.length; i++)
	{
		var entry = arr[i];
		var obj = {};
		obj["$Name"] = entry["name"];
		obj["Uuid"] = entry["Uuid"];
		obj["type"] = entry["componentType"];
		
		var id = entry["Uuid"];
		objs[id] = obj;
	} 
	return objs;
}
*/
// called by reducers/components.js and hasChildSelected() below
export function getAllSubcomponents(id, allComps, subComps={}) {
  subComps[id] = true;
  var idObj = findIdObj(id, allComps);
  if (idObj && idObj.children) {
    for (var j=0; j<idObj.children.length;j++) {
      getAllSubcomponents(idObj.children[j], allComps, subComps);
    }
  }
  return subComps;
}

// called by getAllSubcomponents() above
// given the component ID, returns its corresponding object
function findIdObj(id, comps) {
  for (var i=0; i<comps.length; i++) {
    if (comps[i].Uuid === id) {
      return comps[i]
    }
  }
  return null
}

// called by ComponentNodeContainer.js
// helper for toggleComponent - checks if a component has a subcomponent that is selected.
export function hasChildSelected(id, components, selected) {
  return getAllSubcomponents(id, components).hasOwnProperty(selected);
}






/**
 * Converts the given data array into a JSON object, then turns the object into
 * a string that will be the body content of the Scheme file.
 */
export function convert_scm_to_string(arr) {
	var obj = convert_arr_to_scm(arr);
	var result = JSON.stringify(obj);
	return result;
}

/**
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file
 * @return proj (object): JSON object that will be in the Scheme file
 */
function convert_arr_to_scm(arr) {
	var allObjs = {}

	// INITIALIZE PROJECT
	var proj = {}
	proj["authURL"] = ["ai2.appinventor.mit.edu"];
	proj["YaVersion"] = "158";
	proj["Source"] = "Form";
	proj["Properties"] = {};

	allObjs = create_all_objects(arr);
	// console.log(allObjs);

	for (var i = 0; i < arr.length; i++) 
	{
		var entry = arr[i];
		var entryId = entry["Uuid"];
		if (entry.hasOwnProperty("children") && entry["children"].length > 0)
		{
			allObjs[entryId]["$Components"] = []
			for (var k = 0; k < entry["children"].length; k++)
			{
				var childId = entry["children"][k];
				if (!allObjs.hasOwnProperty(childId))
				{
					allObjs[childId] = {};
				}
				allObjs[entryId]["$Components"].push(allObjs[childId])
			}
		}

		if (entry["componentType"] === "Form")
		{
			proj["Properties"] = allObjs[entryId];
		}
	}
	return proj;
}

/** 
 * Given the data array (of component objects), creates a dictionary
 * of JSON objects that will be used in Scheme file.
 * Dictionary maps the component's unique ID to its JSON object
 */
 
function create_all_objects(arr, fromCreateTree) {
	var objs = {}
	// FOR EACH ENTRY IN THE ARRAY...
	for (var i = 0; i < arr.length; i++)
	{
		// INITIALIZE OBJECT AND COMMON VARIABLES
		var entry = arr[i];
		var obj = {};
		obj["$Name"] = entry["name"];
		obj["$Type"] = entry["componentType"];
		obj["$Version"] = entry["version"];
		obj["Uuid"] = entry["Uuid"];
		var id = entry["Uuid"];
		if(fromCreateTree) {
		  obj["type"] = entry["componentType"];
		}
		// Add all other properties
		
		var entryProperties = Object.keys(entry);
		for (var j = 0; j < entryProperties.length; j++)
		{
			var entryProperty = entryProperties[j];
			if (!special_property(entryProperty))
			{
				obj[entryProperty] = entry[entryProperty];
			}
		}

		objs[id] = obj;
	}
	return objs;
}

/**
 * Checks if the given property is a special property
 * "special" means that the property name in Scheme is different
 * from the property name in the JSON data
 * Ex. "name" in JSON is "$Name" in Scheme
 * @return true if property is special, else false
 */
function special_property(str) {
	var properties = ["name", "version", "Uuid", "componentType", "children"];
	return contains(str, properties);
}

/**
 * Checks if an element is in an array
 * @return true if element is in array, else false
 */
function contains(elmt, arr) {
	for (var a = 0; a < arr.length; a++)
	{
		if (arr[a] === elmt) return true;
	}
	return false;
}
