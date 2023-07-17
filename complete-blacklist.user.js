// ==UserScript==
// @name         Complete Blacklist
// @namespace    https://github.com/skychatorg/skychat-userscripts
// @version      0.1
// @description  Completely hide blacklisted messages
// @author       7PH
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_addStyle
// @match        https://SKYCHAT_DOMAIN_NAME/*
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(".blacklisted { display: none; }");
})();
