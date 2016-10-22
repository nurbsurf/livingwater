"use strict";

var MenuCtrl = function($scope) {
	$scope.menuItems = menuItems;
};

	var menuItems = 
	[
		"Thirst Gauge",
		"Why Water?", 
		"Why Us?", 
		"Take Action", 
		"About Living Water", 
		"Store"
	];

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	// Toggle button
	document.querySelector('.toggle-button').addEventListener('click', function() {
		slideout.toggle();
	});

module.exports = MenuCtrl;