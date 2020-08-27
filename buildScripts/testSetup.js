// This file isn't transpiled, so must use commonJS and ES6

// Register babel to transpile before our test run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};
