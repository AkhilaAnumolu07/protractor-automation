var btn_signInnew = element(by.css("div.header_user_info a"));
var btn_signIn = "//div[@class='header_user_info']/a";
var txt_userAccount = "//a[@class='account']/span";
var btn_signOut = "//a[@class='logout']";
var txt_email = "email";
var txt_pswd = "passwd";
var btn_Login = "SubmitLogin";
var btn_women = "//a[@title='Women']";
var btn_TShirts = "//li//following-sibling::li//a[@title='T-shirts']";
var btn_shirt = "//h5//a[@title='Faded Short Sleeve T-shirts']";
var btn_addToCart = "//button[@name='Submit']";
var btn_proceedTOCheckout = "//a[@Title='Proceed to checkout']";
var txt_productName = "//h1";
var txt_productDescription = "//td[@class='cart_description']//a";

var Actions = require("../Actions/MyActions.js");
module.exports = {
  maxBrowser: function () {
    browser.manage().window().maximize();
  },

  launchUrl: function () {
    browser.get("http://automationpractice.com/index.php");
  },

  clickSignIn: function () {
    // elm = element(by.xpath(btn_signIn));
    // browser.executeScript("arguments[0].click();", elm.getWebElement());
    Actions.myClick(btn_signIn, "SignIn Button Clicked");
  },

  clickSignOut: function () {
    Actions.myClick(btn_signOut, "SignOut Button Clicked");
  },

  enterMailId: function (keys) {
    Actions.mySendKeys(txt_email, "Enter MailId", keys);
  },

  enterPassword: function (keys) {
    Actions.mySendKeys(txt_pswd, "Enter Password", keys);
  },

  clickLogin: function () {
    Actions.myClick(btn_Login, "Login Button Clicked");
  },

  validateUser: function () {
    Actions.validateText(txt_userAccount, "Akhila Anumolu");
  },

  clickTShirtsTab: function () {
    Actions.myClick(btn_TShirts, "T-Shirts Tab Clicked");
  },

  clickSelectedShirt: function () {
    Actions.myClick(btn_shirt, "T-Shirts Clicked");
  },

  clickAddToCart: function () {
    Actions.myClick(btn_addToCart, "Add to cart Clicked");
  },

  clickProceedToCheckout: function () {
    Actions.myClick(btn_proceedTOCheckout, "Proceed to checkout Clicked");
  },

  getShirtName: function (keys) {
    Actions.validateText(txt_productDescription, keys);
  },
};
