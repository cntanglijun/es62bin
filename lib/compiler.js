'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

var _babelCore = require('babel-core');

var binHeader = '#!/usr/bin/env node\n';

exports.default = function (path) {
  return binHeader + (0, _babelCore.transformFileSync)(path, {
    presets: 'latest'
  }).code;
};
