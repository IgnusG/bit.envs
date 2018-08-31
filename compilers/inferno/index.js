require('@babel/plugin-proposal-object-rest-spread');
require('@babel/plugin-proposal-decorators');
require('@babel/plugin-proposal-class-properties');
require('babel-plugin-inferno');
require('@babel/preset-env');

const baseCompile = require('../../internals/babel-base-compiler');

const compiledFileTypes = ['js', 'jsx'];

const compile = (files, distPath) => {
  return baseCompile(files, distPath, __dirname, compiledFileTypes);
}

export default {compile};
