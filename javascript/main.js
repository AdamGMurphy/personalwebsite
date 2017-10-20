var BANNER_HEIGHT_PIXELS = 250;

function navigate(destination) {
	var selectedHTMLCollection = document.getElementsByClassName('nav-selected');
	var selected = [].slice.call(selectedHTMLCollection);

	var destNavElement = document.getElementById(destination + '-nav');
	var destContentElement = document.getElementById(destination + '-content');

	function unselectNavElement(element, index, array) {
		var eleClass = element.className;
		eleClass = eleClass.replace('nav-selected', '');
		eleClass = eleClass.replace('  ', ' ').trim();
		element.className = eleClass;

		document.getElementById(element.id.replace('-nav', '-content')).style.display = 'none';
	}

	if (selected.length !== 1 || (selected.length === 1 && destNavElement.className.indexOf('nav-selected') === -1)) {
		selected.forEach(unselectNavElement);
	}
	else {
		return;
	}

	destNavElement.className = destNavElement.className + ' nav-selected';
	destContentElement.style.display = 'block';
}

function onMouseEnterBanner() {
	var banner = document.getElementById('banner');
	banner.style.transitionDuration = '0.1s, 1s';
	banner.style.filter = 'sepia(0%)';
}

function onMouseLeaveBanner() {
	var banner = document.getElementById('banner');
	banner.style.transitionDuration = '1s';
	banner.style.backgroundPosition = '0% 100%';
	banner.style.filter = 'sepia(50%)';
}

function onMouseMoveBanner(event) {
	var banner = document.getElementById('banner');
	var yPositionPercentage = (event.clientY / BANNER_HEIGHT_PIXELS) * 100;
	banner.style.backgroundPosition = '0% ' + yPositionPercentage + '%';
}

function setup() {
	var banner = document.getElementById('banner');

	if (banner === null) {
		return;
	}

	banner.addEventListener('mouseenter', onMouseEnterBanner, false);
	banner.addEventListener('mouseleave', onMouseLeaveBanner, false);
	banner.addEventListener('mousemove', onMouseMoveBanner, false);
}

window.onload = setup;
