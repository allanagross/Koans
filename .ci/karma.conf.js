module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'lib/underscore.js',
      'lib/FILL_ME_IN.js',
      'src/*.js',
    ],
    frameworks: ['jasmine'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
