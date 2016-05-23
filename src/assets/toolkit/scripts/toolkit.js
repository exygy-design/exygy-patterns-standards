/**
 * Toolkit JavaScript
 */

'use strict';

// Add ES2015 polyfills
require('babel-polyfill');

// For Node Modules
// Because no path was specified, Module will be included from "node_modules"
//var $ = require('jquery');

// For Bower Components
// Because Bower does not force a module structure, you have use a more specific path.

// Loading foundation from node
var foundation = require('../../vendor/foundation-sites/js/foundation.core.js');
var foundationMediaQuery = require('../../vendor/foundation-sites/js/foundation.util.mediaQuery.js');
var foundationKeyboard = require('../../vendor/foundation-sites/js/foundation.util.keyboard.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.box.js');
var foundationBox = require('../../vendor/foundation-sites/js/foundation.util.nest.js');
var foundationMotion = require('../../vendor/foundation-sites/js/foundation.util.motion.js');
var foundationTriggers = require('../../vendor/foundation-sites/js/foundation.util.triggers.js');
var foundationTouch = require('../../vendor/foundation-sites/js/foundation.util.touch.js');
var foundationTimerAndImageLoader = require('../../vendor/foundation-sites/js/foundation.util.timerAndImageLoader.js');
var foundationDropdown = require('../../vendor/foundation-sites/js/foundation.dropdown.js');
var foundationAccordion = require('../../vendor/foundation-sites/js/foundation.accordion.js');
var foundationReveal = require('../../vendor/foundation-sites/js/foundation.reveal.js');
var foundationAbide = require('../../vendor/foundation-sites/js/foundation.abide.js');
var foundationTooltip = require('../../vendor/foundation-sites/js/foundation.tooltip.js');
var foundationDropdownMenu = require('../../vendor/foundation-sites/js/foundation.dropdownMenu.js');
var foundationToggler = require('../../vendor/foundation-sites/js/foundation.toggler.js');
var foundationTabs = require('../../vendor/foundation-sites/js/foundation.tabs.js');
var foundationSlider = require('../../vendor/foundation-sites/js/foundation.slider.js');
var foundationSticky = require('../../vendor/foundation-sites/js/foundation.sticky.js');

//require('smoothstate/jquery.smoothState.min.js');
// var smoothState = require('./jquery.smoothState.min.js');

// console.log($);
// $('h1').fadeOut(2000);

// Use for custom Pattern Libary Modules
// var fooModule = require('./foo-module');
// var bar = fooModule.foo();

// Finally, you can drop test JavaScript here...
$(document).ready(function () {
  //console.log('Script kiddies of the world unite.')
  $(document).foundation();

});
