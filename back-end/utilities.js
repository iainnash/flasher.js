"use strict";

const log = require("./logger");

function delay(time) {
    return new Promise((resolve) => {
        log.info("Delaying for %d ms", time);
        setTimeout(resolve, time);
    });
}

function repeatPromise(times, callback) {
    let chain = Promise.resolve();
    // Range just used for closure based loop
    let range = new Array(times)
        .fill(0)
        .map((value, index) => index);
    range.forEach(() => {
        chain = chain.then(() => callback());
    });
    return chain;
}

module.exports = {
    delay: delay,
    repeatPromise: repeatPromise
};
