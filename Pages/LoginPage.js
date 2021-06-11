var txt_emailAddress = "//input[@id='email_create']";
var btn_CreateAccount = "//button[@id='SubmitCreate']";
var radioBtn_mrs = "//input[@id='id_gender2']";
var txt_firstName = "//input[@id='customer_firstname']";
var txt_lastName = "//input[@id='customer_lastname']";
var txt_password = "//input[@id='passwd']";
var txt_custFirstName = "firstname";
var txt_custLastName = "lastname";
var txt_address = "//input[@id='address1']";
var drd_state = "id_state";
var txt_city = "//input[@id='city']";
var txt_postalCode = "//input[@id='postcode']";
var drd_country = "id_country";
var txt_mobileNumber = "//input[@id='phone_mobile']";
var btn_register = "//button[@id='submitAccount']";

var Actions = require("../Actions/MyActions.js");

module.exports = {
  enterEmailAddress: function (keys) {
    console.log(keys);
    Actions.mySendKeys(txt_emailAddress, "Enter MailId", keys);
  },

  clickCreateAccount: function () {
    Actions.myClick(btn_CreateAccount, "Create Account Clicked");
  },

  selectTitle: function () {
    Actions.myClick(radioBtn_mrs, "Mrs Selected");
  },

  enterFirstName: function (Keys) {
    Actions.mySendKeys(txt_firstName, " First Name", Keys);
  },

  enterLastName: function (Keys) {
    Actions.mySendKeys(txt_lastName, " Last Name", Keys);
  },

  enterPassword: function (keys) {
    Actions.mySendKeys(txt_password, " Password", keys);
  },

  enterAddress: function (keys) {
    Actions.mySendKeys(txt_address, " Address", keys);
  },

  selectCity: function (keys) {
    Actions.mySendKeys(txt_city, " City", keys);
  },

  selectState: function () {
    element(by.cssContainingText("option", "Alabama")).click();
    // element(by.tagName("select#id_state")).click();
    // element(by.css("#id_state [value='2']")).click();
  },

  enterZip: function (keys) {
    Actions.mySendKeys(txt_postalCode, " Postal Code", keys);
  },

  selectCountry: function () {
    element(by.cssContainingText("option", "United States")).click();
    // element(by.tagName("select#id_country")).click();
    // element(by.css("#id_country [value='2']")).click();
    // var mySelect = new SelectWrapper(drd_country);
    // mySelect.selectByValue("2");
  },

  enterPhoneNumber: function (keys) {
    Actions.mySendKeys(txt_mobileNumber, " Mobile Number", keys);
  },

  clickRegister: function () {
    Actions.myClick(btn_register, "Register Button ");
  },
};
