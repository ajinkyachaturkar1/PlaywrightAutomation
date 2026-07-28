const base = require('@playwright/test');

exports.customtest = base.test.extend(
    {
        testDataForOrder:{
        username : "ajinkya.chaturkar1@gmail.com",
        password : "Ajinkya@008",
        productName : "ADIDAS ORIGINAL"
        }
    }
)