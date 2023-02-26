// ==UserScript==
// @name         Skychat Blacklist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A script to blacklist a SkyChat user
// @author       Rog3r
// @match        https://skych.at/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skych.at
// ==/UserScript==

// The user you want to blacklist
const username = "User";

// Define a function to hide the messages
function hideMessages() {
    // Select all message blocks on the page
    const messageBlocks = document.querySelectorAll('div.py-1.px-3.flex.flex-row');

    // Loop through each message block and hide the ones with the specified title in the avatar element
    messageBlocks.forEach((messageBlock) => {
        const avatarElement = messageBlock.querySelector(`div.w-10.h-10.rounded-xl.border.border-2.overflow-hidden.bg-black.flex.justify-center.mt-1[title="${username}"]`);
        if (avatarElement) {
            messageBlock.censured = true;
            messageBlock.style.display = 'none';
        }
    });
}

(function() {
    'use strict';

    // Wait for Vue to generate the messages
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach((node) => {
                    hideMessages();
                });
            }
        });
    });

    // Start observing the DOM for changes
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();