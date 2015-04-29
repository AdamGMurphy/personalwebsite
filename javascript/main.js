function navigate(destination) {
	var selectedHTMLCollection = document.getElementsByClassName("nav-selected");
	var selected = [].slice.call(selectedHTMLCollection);

	var destElement = document.getElementById(destination + "-nav");

	function unselectNavElement(element, index, array) {
		var eleClass = element.className;
		eleClass = eleClass.replace("nav-selected", "");
		eleClass = eleClass.replace("  ", " ").trim();
		element.className = eleClass;
	}
	
	if (selected.length != 1 || (selected.length == 1 && destElement.className.indexOf("nav-selected") == -1)) {	
		selected.forEach(unselectNavElement);
	
	}
	else {
		return;
	}
	
	destElement.className = destElement.className + " nav-selected";
}