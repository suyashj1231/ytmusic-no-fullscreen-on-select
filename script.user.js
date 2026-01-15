// ==UserScript==
// @name         YouTube Music: Block Player Page (Working)
// @namespace    http://tampermonkey.net/
// @version      2.0
// @match        https://music.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    function forceMiniPlayer() {
        const layout = document.querySelector('ytmusic-app-layout');
        if (!layout) return;

        layout.removeAttribute('player-page-open');
        layout.setAttribute('is-player-page-open', 'false');
    }

    const observer = new MutationObserver(forceMiniPlayer);

    observer.observe(document.documentElement, {
        subtree: true,
        childList: true
    });

    window.addEventListener('yt-navigate-finish', forceMiniPlayer);
    window.addEventListener('load', forceMiniPlayer);
})();
