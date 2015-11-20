// ==UserScript==
// @name         eDimension Week Mover
// @namespace    https://github.com/glencbz/edimensionWeekMover
// @version      0.7
// @description  Moves the current course to the top of the
// @author       Glen Choo
// @match        http://edimension.sutd.edu.sg/course/view.php?id=*
// @grant       GM_addStyle
// @require 	http://code.jquery.com/jquery-latest.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

var $ = window.jQuery;
var $current = $(".current");

//Change the background color to whatever you like
$current.css("background-color", "#D7F0FF");
var copy = $current.clone();
copy.css("border", "2px solid #2FB1FF");
copy.css("border-radius", "4px");
copy.children(".content").prepend("<h2 class='this-week-title'>This Week</h2>");
$("ul.weeks").prepend(copy);
$("h2.this-week-title").css("font-family", 'Helvetica Neue",Helvetica,Arial,sans-serif');
