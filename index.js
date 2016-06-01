'use strict';

const path = require('path');
const resolve = require('resolve');

function resolveWithUnderscore(id, options) {
    let file;
    try {
        file = resolve.sync(id, options);
    } catch (e) {
        const newFile = path.dirname(id) + path.sep + `_${path.basename(id)}`;
        file = resolve.sync(newFile, options);
    }

    return file;
}

module.exports = function (url, prev) {
    if (url.indexOf('~') !== 0) {
        return {file: url};
    }
    url = url.substr(1);
    return {
        file: resolveWithUnderscore(url, {
            extensions: ['.css', '.scss'],
            basedir: path.dirname(prev)
        })
    };
};
