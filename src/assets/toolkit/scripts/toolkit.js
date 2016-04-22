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
var foundation = require('../../vendor/foundation/js/foundation.core.js');
var foundationMediaQuery = require('../../vendor/foundation/js/foundation.util.mediaQuery.js');
var foundationKeyboard = require('../../vendor/foundation/js/foundation.util.keyboard.js');
var foundationBox = require('../../vendor/foundation/js/foundation.util.box.js');
var foundationTriggers = require('../../vendor/foundation/js/foundation.util.triggers.js');
var foundationDropdown = require('../../vendor/foundation/js/foundation.dropdown.js');
var foundationAccordion = require('../../vendor/foundation/js/foundation.accordion.js');
var foundationReveal = require('../../vendor/foundation/js/foundation.reveal.js');
var foundationAbide = require('../../vendor/foundation/js/foundation.abide.js');
var foundationTooltip = require('../../vendor/foundation/js/foundation.tooltip.js');

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

  $("body").on("click", ".toggler", function() {
    $(".toggled").toggle(); /*shows or hides #box*/
  });

});
