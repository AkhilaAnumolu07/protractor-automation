var EC = protractor.ExpectedConditions;
module.exports = {
  myClick: function (customerLoginLocator, customerLogin) {
    var eleMenu = element(by.xpath(customerLoginLocator));
    browser.wait(EC.presenceOf(eleMenu), 5000).then(
      function () {
        eleMenu.click().then(
          function () {
            console.log("Clicked " + customerLogin);
          },
          function (err) {
            console.log("Issue while clicking " + customerLogin);
          }
        );
      },
      function (err) {
        console.log("Issue while presence of locator " + customerLoginLocator);
      }
    );
  },

  myModelSendkeys: function (Locator, ModelClick, keys1) {
    var eleMod = element(by.model(Locator));
    browser.wait(EC.presenceOf(eleMod), 5000).then(
      function () {
        eleMod.sendKeys(keys1).then(
          function () {
            console.log("Entered Text" + ModelClick);
          },
          function (errr) {
            console.log("Issue while Sending" + ModelClick);
          }
        );
      },
      function (errr) {
        console.log("Issue while finding Loactor" + Locator);
      }
    );
  },

  mySendKeys: function (firstNameLocator, firstName, keys) {
    var ele = element(by.xpath(firstNameLocator));
    browser.wait(EC.presenceOf(ele), 5000).then(
      function () {
        ele.sendKeys(keys).then(
          function () {
            console.log("Entered Text in" + firstName);
          },
          function (err) {
            console.log("Issue while sending Keys at " + firstName);
          }
        );
      },
      function (err) {
        console.log("Issue while presence of locator " + firstNameLocator);
      }
    );
  },

  validateText: function (locator, ActualText) {
    var ele = element(by.xpath(locator));
    ele.getText().then(function (text) {
      console.log(text);
      expect(text).toBe(ActualText);
    });
  },
};
