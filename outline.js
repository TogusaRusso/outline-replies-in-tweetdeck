// ==UserScript==
// @name           Outline reply lines
// @version        0.0.2
// @namespace      https://tweetdeck.twitter.com/
// @auther         Togusa
// @description    Outline reply lines
// @include        https://web.tweetdeck.com/*
// @include        https://tweetdeck.twitter.com/*
// @grant          none
// ==/UserScript==


setInterval(() => document.querySelectorAll('.other-replies').forEach(el => {el.style.border = '2px dotted #98E23C'}), 1000);
