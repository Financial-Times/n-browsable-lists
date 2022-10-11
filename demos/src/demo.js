const { init: browsableListsInit } = require('../../main.js');

document.documentElement.classList.add('js', 'enhanced');

browsableListsInit({
	parentSelector: '.rhr'
});
