var path = require('path');
var resolve = require('resolve');
module.exports = function (url, prev) {
    if (url.indexOf('~') !== 0) {
        return {file: url};
    }
    url = url.substr(1);
    return {
        file: resolve.sync(url, {
            extensions: ['.css', '.scss'],
            basedir: path.dirname(prev)
        })
    };
};
