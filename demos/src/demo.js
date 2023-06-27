const oTracking = require('@financial-times/o-tracking').default;
const { init: browsableListsInit } = require('../../main.js');

document.documentElement.classList.add('js', 'enhanced');

oTracking.init({
	context: { product: 'next' },
	test: true
});

oTracking.click.init('cta');

const demoVars = document.getElementById('demo-vars');
const { amplitudeExperiment } = JSON.parse(demoVars.textContent);
browsableListsInit({ amplitudeExperiment, parentSelector: '.rhr' });
