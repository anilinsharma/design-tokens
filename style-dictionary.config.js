const StyleDictionary = require('style-dictionary');

module.exports = {
  source: ['tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    }
  }
};
