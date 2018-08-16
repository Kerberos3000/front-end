(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  util.format("http://api/catalogue%s", domain),
    tagsUrl:       util.format("http://api/catalogue%s/tags", domain),
    cartsUrl:      util.format("http://api/carts%s/carts", domain),
    ordersUrl:     util.format("http://api/orders%s", domain),
    ordersProcessUrl:     util.format("http://ordersprocess%s", domain),
    customersUrl:  util.format("http://api/user%s/customers", domain),
    addressUrl:    util.format("http://api/user%s/addresses", domain),
    cardsUrl:      util.format("http://api/user%s/cards", domain),
    loginUrl:      util.format("http://user%s/login", domain),
    registerUrl:   util.format("http://api/user%s/register", domain),
  };
}());
