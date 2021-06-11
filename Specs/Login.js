const { browser } = require("protractor");
var TestData = require("../Data/testdata.json");
var Homepage = require("../Pages/HomePage.js");
var LoginPage = require("../Pages/LoginPage.js");
describe("", function () {
  it("It should Open and maximize Browser", function () {
    Homepage.maxBrowser();
    Homepage.launchUrl();
    browser.sleep(5000);
  }),
    it("Click on signIn And register", function () {
      Homepage.clickSignIn();
      browser.sleep(5000);
      LoginPage.enterEmailAddress(TestData.Login.mailId);
      LoginPage.clickCreateAccount();
      browser.sleep(5000);
    }),
    it("enter details to register mailID", function () {
      LoginPage.selectTitle();
      LoginPage.enterFirstName(TestData.Login.firstName);
      LoginPage.enterLastName(TestData.Login.lastName);
      LoginPage.enterPassword(TestData.Login.password);
      LoginPage.enterAddress(TestData.Login.Address);
      LoginPage.selectCity(TestData.Login.City);
      LoginPage.selectState();
      LoginPage.enterZip(TestData.Login.Zip);
      LoginPage.selectCountry();
      LoginPage.enterPhoneNumber(TestData.Login.mobileNumber);
      LoginPage.clickRegister();
      browser.sleep(5000);
    }),
    it("sign out and sign in again", function () {
      Homepage.validateUser();
      Homepage.clickSignOut();
      Homepage.clickSignIn();
      Homepage.enterMailId(TestData.Login.mailId);
      Homepage.enterPassword(TestData.Login.password);
      Homepage.clickLogin();
    }),
    it("Add an item to cart and proceed to payment", function () {
      Homepage.clickTShirtsTab();
      Homepage.clickSelectedShirt();
      Homepage.clickAddToCart();
      browser.sleep(5000);
      Homepage.clickProceedToCheckout();
      browser.sleep(10000);
      Homepage.getShirtName(TestData.Login.shirtName);
    });
});
