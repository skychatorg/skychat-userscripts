// ==UserScript==
// @name         Marquee Motto
// @namespace    https://github.com/skychatorg/
// @version      1.0
// @description  Userscript which sets a circular motto, similar to the good 'old <marquee> tag
// @author       7PH
// @grant        none
// @match        https://SKYCHAT_DOMAIN_NAME/*
// ==/UserScript==

/**
 * Do NOT forget to change the @match tag above
 */

/**
 * Entire motto to show
 */
const MOTTO_CONTENT = 'My awesome motto'.toUpperCase();

/**
 * Maximum motto length to show at a specific time
 */
const MOTTO_LENGTH = 8;

(async function() {
    'use strict';

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const interval = 1000;
    const client = Vue.prototype.$client;


    const start = async () => {
        let position = 0;

        while (true) {
            const part = MOTTO_CONTENT.substr(position, MOTTO_LENGTH).trim();
            const command = '/motto ' + part;
            client.sendMessage(command);
            await sleep(interval);
            if (position ++ > MOTTO_CONTENT.length) {
                position = 0;
            }
        }
    };

    client.on('config', start);
})();
