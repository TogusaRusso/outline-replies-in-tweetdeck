// ==UserScript==
// @name     TweetDeck Unread Notifications
// @include  https://tweetdeck.twitter.com
// @include  https://tweetdeck.twitter.com/*
// @grant    none
// ==/UserScript==

const head = document.getElementsByTagName('head')[0];
const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = ".tdUnreadUnread { background-color: #444444; }";
head.appendChild(style);

function animate_bg(el, from, to) {
    el.style.backgroundColor = "rgba(68, 68, 68, " + (from += from > to ? -1 : 1) / 10 + ")";
    if(from != to) {
        setTimeout(() => animate_bg(el, from, to), 20);
    }
}

let counter = 0;
let loadingTime = true;

function tdUnreadRefresh() {
    // отмечает рамочками реплаи
    document.querySelectorAll('.other-replies').forEach(el => {el.style.border = '2px dotted #98E23C'});
    // основное предназначение
    const detail = document.querySelectorAll(".js-detail-content");
    document.querySelectorAll('article').forEach(el => {
        if (detail.length === 0) {
        if (!el.classList.contains("tdUnreadUnread")) {
            el.classList.add("tdUnreadUnread");
            if (!loadingTime) {
                counter++;
                function listener() {
                    counter--;
                    el.removeEventListener('mouseenter', listener);
                    animate_bg(el,10,0);
                }
                el.addEventListener('mouseenter', listener);
            } else {
                animate_bg(el,10,0);
            }
        }
        }
    });
    if (counter>0) {
        document.title = "("+counter+") TweetDeck";
    } else {
        document.title = "TweetDeck";
    }
}

setInterval(tdUnreadRefresh,1000);
setTimeout(() => {loadingTime = false;} ,30000);
