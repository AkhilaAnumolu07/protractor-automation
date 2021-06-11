var AllureReporter = require("jasmine-allure-reporter");

exports.config = {
  directConnect: true,

  specs: ["Login.js"],

  multiCapabilities: [
    {
      browserName: "chrome",

      shardTestFiles: true,

      maxInstances: 1,
    },
  ],

  framework: "jasmine2",

  specs: ["Login.js"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000,
  },
  onPrepare: function () {
    browser.driver.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
  },
};
