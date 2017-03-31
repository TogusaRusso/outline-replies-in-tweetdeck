// ==UserScript==
// @name           Outline reply lines
// @version        0.0.1
// @namespace      https://tweetdeck.twitter.com/
// @auther         Togusa
// @description    Outline reply lines
// @include        https://web.tweetdeck.com/*
// @include        https://tweetdeck.twitter.com/*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant          none
// ==/UserScript==


(function($) {
    setInterval(() => {$("div.other-replies").css('border', '2px dotted #98E23C');}, 1000);
})(jQuery.noConflict(true));
