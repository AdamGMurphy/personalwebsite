var BANNER_HEIGHT_PIXELS = 250;

function onMouseEnterBanner(event) {
	var banner = event.target;
	banner.style.transitionDuration = '0.1s, 1s';
	banner.style.filter = 'sepia(0%)';
}

function onMouseLeaveBanner(event) {
	var banner = event.target;
	banner.style.transitionDuration = '1s';
	banner.style.backgroundPosition = '0% 100%';
	banner.style.filter = 'sepia(50%)';
}

function onMouseMoveBanner(event) {
	var banner = event.target;
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
