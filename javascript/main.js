function navigate(destination) {
	var selectedHTMLCollection = document.getElementsByClassName("nav-selected");
	var selected = [].slice.call(selectedHTMLCollection);

	var destNavElement = document.getElementById(destination + "-nav");
	var destContentElement = document.getElementById(destination + "-content");
	
	function unselectNavElement(element, index, array) {
		var eleClass = element.className;
		eleClass = eleClass.replace("nav-selected", "");
		eleClass = eleClass.replace("  ", " ").trim();
		element.className = eleClass;
		
		document.getElementById(element.id.replace("-nav", "-content")).style.display = "none";
	}
	
	if (selected.length != 1 || (selected.length == 1 && destNavElement.className.indexOf("nav-selected") == -1)) {	
		selected.forEach(unselectNavElement);
	
	}
	else {
		return;
	}
	
	destNavElement.className = destNavElement.className + " nav-selected";
	destContentElement.style.display = "block";
}